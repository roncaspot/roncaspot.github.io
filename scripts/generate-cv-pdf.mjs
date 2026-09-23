// Renders /print.html from the built site and writes the downloadable CV.
// Run after `vite build`; `npm run deploy` does it automatically.
import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { chromium } from "playwright";

const dist = resolve("dist");
const outputs = [join(dist, "curriculum.pdf"), resolve("public/curriculum.pdf")];
const EXPECTED_PAGES = 2;
const types = {
    ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
    ".woff": "font/woff", ".woff2": "font/woff2", ".png": "image/png",
    ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".pdf": "application/pdf",
    ".ico": "image/x-icon", ".xml": "application/xml", ".txt": "text/plain",
};

const server = createServer(async (request, response) => {
    const path = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    try {
        const file = await readFile(join(dist, path === "/" ? "index.html" : path));
        response.writeHead(200, { "content-type": types[extname(path)] ?? "application/octet-stream" });
        response.end(file);
    } catch {
        response.writeHead(404).end();
    }
});
await new Promise((done) => server.listen(0, "127.0.0.1", done));
const { port } = server.address();

// Prefer the browser Playwright manages. CHROMIUM_BIN lets a machine that already
// has a Chromium build reuse it instead of downloading another one.
const browser = await chromium.launch(
    process.env.CHROMIUM_BIN ? { executablePath: process.env.CHROMIUM_BIN } : { channel: "chromium" },
);
const page = await browser.newPage();
const failures = [];
page.on("pageerror", (error) => failures.push(error.message));
page.on("requestfailed", (request) => failures.push(`request failed: ${request.url()}`));
await page.goto(`http://127.0.0.1:${port}/print.html`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
const pdf = await page.pdf({ format: "A4", printBackground: true });
await browser.close();
server.close();

// A CV that silently grows to three pages is a regression, not a new layout.
const pages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;
if (failures.length) throw new Error(`print page reported problems:\n${failures.join("\n")}`);
if (pages !== EXPECTED_PAGES) throw new Error(`expected ${EXPECTED_PAGES} pages, produced ${pages}`);
for (const output of outputs) await writeFile(output, pdf);
console.log(`curriculum.pdf regenerated: ${pages} pages, ${(pdf.length / 1024).toFixed(0)} kB`);
