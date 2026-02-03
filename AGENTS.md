# AGENTS.md

## Non-Negotiable Rule
All documents, source files, comments, and user-facing content in this repository must be written in English. Do not introduce or keep non-English text.

## Purpose
This repository is a personal CV + portfolio site published on GitHub Pages. AI agents should keep content, layout, and build behavior aligned with the `roncaspot` module structure and its data-driven curriculum.

## Typical Changes
- CV content in `src/modules/roncaspot/data/curriculum`.
- Home sections in `src/modules/roncaspot/routes/Home`.
- Title and meta tags in `src/modules/roncaspot/index.jsx`.
- Site configuration in `src/conf/conf.js`.

## Avoid
- Do not change `src/deps/hw-core` without an explicit request.
- Do not rename `/` and `/print.html` without updating links and sitemap.
- Do not remove assets in `public/assets` if referenced by layouts.

## Useful Commands
- `npm start` for development.
- `npm run build` for CSR build.
- `npm run build:ssg` for prerendered static build.
- `npm run serve` to serve the build via Express.
- `npm run deploy` to publish to `gh-pages`.

## Conventions
- Content is data-driven: prefer updates in `data/` over hardcoding in components.
- Use path aliases defined in `cra-config.js` and `_moduleAliases`.
- Keep formatting consistent with existing code (4 spaces).

## Entry Points
- App bootstrap: `src/index.js`.
- Module registration: `src/conf/modules.js`.
- Main routing: `src/modules/roncaspot/index.jsx`.

## Suggested Checks
- Verify `/print.html` generates the PDF correctly.
- Verify home loads local assets from `public/assets`.
