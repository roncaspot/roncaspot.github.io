import { readFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

// Link previews and search engines never run the app, so the title, description and
// share tags have to be in the static HTML.
function pageMeta() {
    return {
        name: "page-meta",
        transformIndexHtml(html, { filename }) {
            const profile = JSON.parse(
                readFileSync(resolve(import.meta.dirname, "src/data/profile.json"), "utf8"),
            );
            const { share } = profile;
            const tags = [`<meta name="description" content="${escapeHtml(profile.description)}" />`];
            if (basename(filename) === "index.html") {
                const meta = {
                    "og:type": "website",
                    "og:url": share.url,
                    "og:title": profile.siteTitle,
                    "og:description": profile.description,
                    "og:image": new URL(share.image, share.url).href,
                    "og:image:width": share.imageWidth,
                    "og:image:height": share.imageHeight,
                    "og:image:alt": share.imageAlt,
                };
                tags.push(
                    `<link rel="canonical" href="${escapeHtml(share.url)}" />`,
                    ...Object.entries(meta).map(
                        ([property, content]) =>
                            `<meta property="${property}" content="${escapeHtml(content)}" />`,
                    ),
                    `<meta name="twitter:card" content="summary_large_image" />`,
                );
            }
            return html
                .replace("<title></title>", `<title>${escapeHtml(profile.siteTitle)}</title>`)
                .replace(/(\s*)<\/head>/, (_, space) => `\n        ${tags.join("\n        ")}${space}</head>`);
        },
    };
}

export default defineConfig({
    base: "/",
    plugins: [react(), pageMeta()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, "index.html"),
                print: resolve(import.meta.dirname, "print.html"),
            },
        },
    },
});
