// Serves the built site from dist/ on a random local port and opens it in headless
// Chromium, so the generators render exactly what gets published.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { chromium } from "playwright";

export const dist = resolve("dist");

const types = {
    ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
    ".woff": "font/woff", ".woff2": "font/woff2", ".png": "image/png",
    ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".pdf": "application/pdf",
    ".ico": "image/x-icon", ".xml": "application/xml", ".txt": "text/plain",
};

export async function openDist(pageOptions = {}) {
    const server = createServer(async (request, response) => {
        const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
        const path = pathname === "/" ? "index.html" : pathname;
        try {
            const file = await readFile(join(dist, path));
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
    const page = await browser.newPage(pageOptions);
    const failures = [];
    page.on("pageerror", (error) => failures.push(error.message));
    page.on("requestfailed", (request) => failures.push(`request failed: ${request.url()}`));

    return {
        page,
        failures,
        url: (path) => `http://127.0.0.1:${port}${path}`,
        close: async () => {
            await browser.close();
            server.close();
        },
    };
}
