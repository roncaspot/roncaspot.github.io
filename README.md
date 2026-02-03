# Roncaspot CV / Portfolio

Personal CV + portfolio site published on GitHub Pages: `roncaspot.github.io`.
This is a React single-page app built on `@hw-core/react-platform` and CRACO, with data-driven content in `src/modules/roncaspot/data`.

## What This Repo Provides

- **Home (`/` and `/index.html`)** with intro, menu, curriculum, footer.
- **Printable CV (`/print.html`)** with client-side PDF export.
- **Curriculum data** in `src/modules/roncaspot/data/curriculum`.
- **Static assets** in `public/assets` and images in `src/modules/roncaspot/data/pictures`.

## Rendering Modes

This project can be used as:

- **CSR (Client-Side Rendering):** default `npm run build`.
- **SSG (Static pre-render):** `npm run build:ssg` using `react-spa-prerender`.
- **SSR-style prerender for crawlers:** optional Express + `prerender` setup (see `apps/server`).

## Key Structure

- `src/index.js`: platform bootstrap.
- `src/platformConf.js`: platform config and `routePaths` export (used for sitemap).
- `src/conf/conf.js`: runtime config (basePath, websiteUrl, etc.).
- `src/conf/modules.js`: module registration (activates `roncaspot`).
- `src/modules/roncaspot`: main module with routes, components, and data.
- `apps/server`: optional Express server for serving build and prerender.

## Commands

- `npm install`
- `npm start` start dev server (CRA + CRACO).
- `npm run build` CSR production build.
- `npm run build:ssg` build + static prerender.
- `npm run serve` serve the build via Express.
- `npm run deploy` publish to `gh-pages` (runs `build:ssg`).

## Where To Update Content

- **Profile/CV:** `src/modules/roncaspot/data/curriculum`.
- **Home sections:** `src/modules/roncaspot/routes/Home`.
- **Title/SEO:** `src/modules/roncaspot/index.jsx` (Helmet).

## Notes

- Adjust site base path for GitHub Pages in `src/conf/conf.js`.
- The print page uses `html2pdf.js` and saves `curriculum.pdf`.
- Code style uses 4 spaces for indentation.
