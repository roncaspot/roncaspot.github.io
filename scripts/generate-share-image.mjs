// Captures the hero of the built site as the link preview image (og:image).
// Run after `vite build`; `npm run deploy` does it automatically.
import { readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { dist, openDist } from "./dist-browser.mjs";

const { share } = JSON.parse(await readFile(resolve("src/data/profile.json"), "utf8"));
const outputs = [join(dist, share.image), resolve("public", share.image)];

// Reduced motion keeps the headline on its first word and skips the scroll reveal.
const site = await openDist({
    viewport: { width: share.imageWidth, height: share.imageHeight },
    colorScheme: "light",
    reducedMotion: "reduce",
});
await site.page.goto(site.url("/"), { waitUntil: "networkidle" });
await site.page.evaluate(() => document.fonts.ready);
const image = await site.page.screenshot({ type: "jpeg", quality: 85 });
await site.close();

if (site.failures.length) throw new Error(`home page reported problems:\n${site.failures.join("\n")}`);
for (const output of outputs) await writeFile(output, image);
console.log(`${share.image} regenerated: ${share.imageWidth}x${share.imageHeight}, ${(image.length / 1024).toFixed(0)} kB`);
