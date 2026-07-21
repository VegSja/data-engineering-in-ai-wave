import { chromium } from 'playwright-chromium';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3030/3?embedded=true', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
const info = await page.evaluate(() => {
  const candidates = ['.slidev-page', '.slidev-slide', '#slide-content', '[class*="slidev"]', 'main'];
  const found = {};
  for (const s of candidates) {
    const els = document.querySelectorAll(s);
    found[s] = Array.from(els).slice(0, 3).map(e => {
      const r = e.getBoundingClientRect();
      return { cls: e.className.slice(0,80), w: Math.round(r.width), h: Math.round(r.height), t: Math.round(r.top), l: Math.round(r.left), transform: getComputedStyle(e).transform.slice(0,60) };
    });
  }
  return { found, bodyH: document.body.getBoundingClientRect().height, vw: innerWidth, vh: innerHeight };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
