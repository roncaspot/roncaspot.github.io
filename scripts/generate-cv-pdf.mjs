// Renders /print.html from the built site and writes the downloadable CV.
// Run after `vite build`; `npm run deploy` does it automatically.
import { writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { dist, openDist } from "./dist-browser.mjs";

const outputs = [join(dist, "curriculum.pdf"), resolve("public/curriculum.pdf")];
const EXPECTED_PAGES = 2;

const site = await openDist();
await site.page.goto(site.url("/print.html"), { waitUntil: "networkidle" });
await site.page.emulateMedia({ media: "print" });
const pdf = await site.page.pdf({ format: "A4", printBackground: true });
await site.close();

// A CV that silently grows to three pages is a regression, not a new layout.
const pages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;
if (site.failures.length) throw new Error(`print page reported problems:\n${site.failures.join("\n")}`);
if (pages !== EXPECTED_PAGES) throw new Error(`expected ${EXPECTED_PAGES} pages, produced ${pages}`);
for (const output of outputs) await writeFile(output, pdf);
console.log(`curriculum.pdf regenerated: ${pages} pages, ${(pdf.length / 1024).toFixed(0)} kB`);
