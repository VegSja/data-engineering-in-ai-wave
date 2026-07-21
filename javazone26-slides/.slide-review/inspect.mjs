import { chromium } from 'playwright-chromium';

const TOTAL = 20;
const BASE = 'http://localhost:3030';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
const page = await ctx.newPage();

const results = [];

for (let n = 1; n <= TOTAL; n++) {
  await page.goto(`${BASE}/${n}?embedded=true`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  const report = await page.evaluate(() => {
    const bugs = [];
    const slide = document.querySelector('#slide-content, .slidev-page, main') || document.body;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // 1. horizontal / vertical overflow of slide content
    const all = slide.querySelectorAll('*');
    let clipped = 0;
    let offRight = 0, offBottom = 0;
    for (const el of all) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (r.right > vw + 2) offRight++;
      if (r.bottom > vh + 2) offBottom++;
      // element itself scrolls
      if (el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflowX !== 'visible') clipped++;
    }
    if (offRight > 0) bugs.push(`${offRight} el(s) past right edge`);
    if (offBottom > 0) bugs.push(`${offBottom} el(s) past bottom edge`);
    if (clipped > 0) bugs.push(`${clipped} scrolling container(s)`);

    // 2. orphaned frontmatter: any text node containing 'layout:' or 'class: text-'
    const txt = slide.innerText || '';
    if (/^\s*layout:\s/m.test(txt)) bugs.push('orphaned "layout:" text');
    if (/^\s*class:\s/m.test(txt)) bugs.push('orphaned "class:" text');
    if (/^---\s*$/m.test(txt)) bugs.push('orphaned "---" separator text');

    // 3. unrendered icons: <div class="carbon-*"> or <span class="iconify"> with 0 dimensions,
    //    or elements whose class includes 'carbon-' with an empty computed background
    const iconEls = slide.querySelectorAll('[class*="carbon-"], [class*="i-carbon"], .iconify');
    let blankIcons = 0;
    for (const el of iconEls) {
      const r = el.getBoundingClientRect();
      if (r.width < 4 || r.height < 4) blankIcons++;
    }
    if (blankIcons > 0) bugs.push(`${blankIcons} blank/tiny icon(s)`);

    // 4. near-empty slide
    const visibleText = txt.trim().replace(/\s+/g, ' ');
    if (visibleText.length < 5) bugs.push('empty/near-empty');

    // 5. text elements with computed font-size below 14px (readability at projection)
    let tiny = 0;
    for (const el of slide.querySelectorAll('p, li, span, div')) {
      if (!el.innerText || el.innerText.trim().length < 10) continue;
      if (el.children.length > 0) continue;
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs > 0 && fs < 14) tiny++;
    }
    if (tiny > 0) bugs.push(`${tiny} tiny-text (<14px) block(s)`);

    // 6. signpost detection & overlap: element with text starting "Part " top-right
    let signpost = null;
    for (const el of slide.querySelectorAll('*')) {
      const t = (el.innerText || '').trim();
      if (/^Part [123] [·—-]/.test(t) && el.children.length <= 3) {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.2 && r.right > vw * 0.5) { signpost = { el, r }; break; }
      }
    }
    if (signpost) {
      // check overlap with h1/h2
      const heading = slide.querySelector('h1, h2');
      if (heading) {
        const hr = heading.getBoundingClientRect();
        const overlap = !(signpost.r.right < hr.left || signpost.r.left > hr.right ||
                          signpost.r.bottom < hr.top || signpost.r.top > hr.bottom);
        if (overlap) bugs.push('signpost overlaps heading');
      }
    }

    // 7. dump visible headings so caller can identify slide
    const h = slide.querySelector('h1, h2, h3');
    const title = h ? h.innerText.trim().slice(0, 60) : '(no heading)';

    return { title, bugs, sample: visibleText.slice(0, 120) };
  });

  results.push({ n, ...report });
  console.log(`Slide ${n.toString().padStart(2)}: ${report.bugs.length ? '⚠ ' + report.bugs.join('; ') : 'OK'}  [${report.title}]`);
}

await browser.close();

console.log('\n--- SUMMARY ---');
const withBugs = results.filter(r => r.bugs.length);
console.log(`${withBugs.length}/${TOTAL} slides have rendering issues`);
