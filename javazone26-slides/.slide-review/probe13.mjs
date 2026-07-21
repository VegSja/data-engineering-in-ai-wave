import { chromium } from 'playwright-chromium';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3030/13?embedded=true', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
const info = await page.evaluate(() => {
  const ps = Array.from(document.querySelectorAll('.slidev-page')).find(p => p.getBoundingClientRect().width > 100).querySelectorAll('p');
  return Array.from(ps).map(p => {
    const cs = getComputedStyle(p);
    const r = p.getBoundingClientRect();
    return { cls: p.className, w: Math.round(r.width), maxWidth: cs.maxWidth, marginL: cs.marginLeft, marginR: cs.marginRight, display: cs.display, text: p.innerText.slice(0,40) };
  });
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
