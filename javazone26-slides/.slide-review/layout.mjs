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
    // Slidev renders multiple .slidev-page elements (prefetch); the visible one has real dims
    const pages = Array.from(document.querySelectorAll('.slidev-page'));
    const slide = pages.find(p => { const r = p.getBoundingClientRect(); return r.width > 100 && r.height > 100; }) || document.body;
    const sr = slide.getBoundingClientRect();
    const W = sr.width, H = sr.height;
    if (W < 100 || H < 100) return { title: '?', notes: ['slide element too small — selector wrong?'] };

    const notes = [];

    // Content bounding box: union of all visible text/media inside slide, excluding decorative overlays
    let minTop = Infinity, maxBottom = -Infinity, minLeft = Infinity, maxRight = -Infinity;
    const visibleEls = [];
    // Any leaf-ish element with visible text or an icon counts as content
    const contentSel = 'h1, h2, h3, h4, p, li, img, svg, [class*="carbon-"], [class*="i-carbon"], .iconify, code, pre, table, .check-item, .card, span';
    for (const el of slide.querySelectorAll(contentSel)) {
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      // clip to slide bounds
      const t = r.top - sr.top, l = r.left - sr.left, b = r.bottom - sr.top, ri = r.right - sr.left;
      if (t < 0 || l < 0 || b > H + 2 || ri > W + 2) continue;
      minTop = Math.min(minTop, t);
      maxBottom = Math.max(maxBottom, b);
      minLeft = Math.min(minLeft, l);
      maxRight = Math.max(maxRight, ri);
      visibleEls.push({ el, t, l, b, r: ri, w: r.width, h: r.height });
    }
    if (!isFinite(minTop)) return { title: '(no content)', notes: ['no measurable content'] };

    const pad = (v) => (v / H * 100).toFixed(1);
    const padW = (v) => (v / W * 100).toFixed(1);

    const topPad = minTop, bottomPad = H - maxBottom;
    const leftPad = minLeft, rightPad = W - maxRight;
    const vertFill = (maxBottom - minTop) / H;
    const horizFill = (maxRight - minLeft) / W;
    const asymmetryV = Math.abs(topPad - bottomPad) / H;
    const asymmetryH = Math.abs(leftPad - rightPad) / W;

    // 1. Vertical asymmetry — content top-heavy or bottom-heavy on a center-ish layout
    if (asymmetryV > 0.12) {
      const dir = topPad > bottomPad ? 'bottom-heavy' : 'top-heavy';
      notes.push(`${dir}: top ${pad(topPad)}% vs bottom ${pad(bottomPad)}% of slide`);
    }

    // 2. Horizontal asymmetry — content shifted left or right
    if (asymmetryH > 0.08) {
      const dir = leftPad > rightPad ? 'shifted right' : 'shifted left';
      notes.push(`${dir}: left ${padW(leftPad)}% vs right ${padW(rightPad)}%`);
    }

    // 3. Wasted vertical space — content occupies less than 50% of slide height AND both paddings large
    if (vertFill < 0.5 && topPad > H * 0.15 && bottomPad > H * 0.15) {
      notes.push(`sparse: content fills only ${(vertFill*100).toFixed(0)}% of slide height`);
    }

    // 4. Too close to edges — any content within 2% of an edge on non-cover slides
    if (topPad < H * 0.02) notes.push(`content touches top edge (${pad(topPad)}%)`);
    if (bottomPad < H * 0.02) notes.push(`content touches bottom edge (${pad(bottomPad)}%)`);
    if (leftPad < W * 0.02) notes.push(`content touches left edge (${padW(leftPad)}%)`);
    if (rightPad < W * 0.02) notes.push(`content touches right edge (${padW(rightPad)}%)`);

    // 5. Grid balance — cards in a grid with mismatched heights
    const gridContainers = slide.querySelectorAll('[class*="grid-cols"], [style*="grid-template-columns"], [class*="flex"]');
    for (const g of gridContainers) {
      const kids = Array.from(g.children).filter(c => {
        const r = c.getBoundingClientRect();
        return r.width > 20 && r.height > 20;
      });
      if (kids.length < 2) continue;
      // check they're on the same row (similar top)
      const tops = kids.map(k => k.getBoundingClientRect().top);
      const rows = new Map();
      for (let i = 0; i < kids.length; i++) {
        const t = Math.round(tops[i] / 10) * 10;
        if (!rows.has(t)) rows.set(t, []);
        rows.get(t).push(kids[i]);
      }
      for (const [t, row] of rows) {
        if (row.length < 2) continue;
        const heights = row.map(k => k.getBoundingClientRect().height);
        const maxH = Math.max(...heights), minH = Math.min(...heights);
        if (maxH > 60 && (maxH - minH) / maxH > 0.35) {
          notes.push(`grid row uneven: ${row.length} items, heights ${minH.toFixed(0)}–${maxH.toFixed(0)}px (${((maxH-minH)/maxH*100).toFixed(0)}% diff)`);
          break; // one note per slide is enough
        }
      }
    }

    // 6. Heading vs body font-size ratio — heading should dominate
    const heading = slide.querySelector('h1, h2');
    const body = slide.querySelector('p, li');
    if (heading && body) {
      const hs = parseFloat(getComputedStyle(heading).fontSize);
      const bs = parseFloat(getComputedStyle(body).fontSize);
      if (hs && bs && hs / bs < 1.4) {
        notes.push(`weak heading hierarchy: heading ${hs.toFixed(0)}px vs body ${bs.toFixed(0)}px (ratio ${(hs/bs).toFixed(2)})`);
      }
    }

    // 7. Bullet density — >7 bullets in a single list is hard to read
    for (const ul of slide.querySelectorAll('ul, ol')) {
      const bullets = ul.querySelectorAll(':scope > li').length;
      if (bullets > 7) {
        notes.push(`dense list: ${bullets} bullets in one list`);
        break;
      }
    }

    // 8. Line length — paragraphs wider than 70% of slide width feel encyclopedic
    for (const p of slide.querySelectorAll('p')) {
      const r = p.getBoundingClientRect();
      const chars = (p.innerText || '').length;
      if (r.width / W > 0.75 && chars > 120) {
        notes.push(`wide-line paragraph: ${(r.width/W*100).toFixed(0)}% width, ${chars} chars`);
        break;
      }
    }

    // 9. Title-only slide with lots of empty space below title
    if (visibleEls.length <= 2 && vertFill < 0.3) {
      notes.push(`title-only feel: only ${visibleEls.length} content element(s)`);
    }

    // 10. Detect two-column with wildly different fill (one column much taller)
    // handled by (5) above for most cases

    const h = slide.querySelector('h1, h2, h3');
    const title = h ? h.innerText.trim().slice(0, 55) : '(no heading)';
    return { title, notes, metrics: { W: Math.round(W), H: Math.round(H), topPad: Math.round(topPad), bottomPad: Math.round(bottomPad), leftPad: Math.round(leftPad), rightPad: Math.round(rightPad), vertFill: +(vertFill*100).toFixed(0), horizFill: +(horizFill*100).toFixed(0) } };
  });

  results.push({ n, ...report });
  const flag = report.notes.length ? `⚠ ${report.notes.length}` : '✓';
  console.log(`\nSlide ${n.toString().padStart(2)} ${flag}  [${report.title}]`);
  if (report.metrics) console.log(`  metrics: ${report.metrics.W}×${report.metrics.H}  padT=${report.metrics.topPad} padB=${report.metrics.bottomPad} padL=${report.metrics.leftPad} padR=${report.metrics.rightPad}  vFill=${report.metrics.vertFill}% hFill=${report.metrics.horizFill}%`);
  for (const nt of report.notes) console.log(`  - ${nt}`);
}

await browser.close();

const flagged = results.filter(r => r.notes && r.notes.length);
console.log(`\n--- SUMMARY --- ${flagged.length}/${TOTAL} slides with layout notes`);
