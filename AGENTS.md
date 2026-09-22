# AGENTS.md

## Non-negotiable rule

All documents, source files, comments, and user-facing content in this repository must be written in English. Do not introduce or keep non-English text.

## Purpose

This repository is a personal CV and portfolio site published on GitHub Pages. It is a Vite + React static application with a data-driven curriculum and a two-page printable CV.

## Content boundary

Every user-visible string must live in src/data/. Components may contain only rendering and interaction logic. Do not add headings, labels, alt text, status messages, CV copy, punctuation used as content, or fallback copy directly to JSX.

Typical content changes:

- Profile, contacts, hero, About, and CV header: src/data/profile.json.
- Experience graph, roles, details, links, and print excerpts: src/data/experience.json.
- Featured work and archive: src/data/projects.json.
- Skills: src/data/skills.json.
- Education and outside-work interests: src/data/education.json.
- Navigation, headings, labels, controls, and accessible messages: src/data/ui.json.

Adding a client must mean adding an object to experience.json and referencing its ID from the appropriate layout collection.

## Design

- Preserve the current design tokens, spacing, typography, themes, hover and focus behavior, graph layout, and 390 px composition in src/styles.css.
- Preserve self-hosted Sora and DM Sans; do not add runtime font or asset requests.
- Keep /, /print.html, and /curriculum.pdf working.
- Keep the printable CV at exactly two A4 pages.
- Keep logo provenance in public/assets/logos/SOURCES.md.

## Commands

- npm start starts Vite.
- npm run build builds to dist/.
- npm run serve previews the production build.
- npm run deploy publishes dist/ to gh-pages.

## Suggested checks

- Build successfully and preview the production output.
- Compare desktop and 390 px screenshots in both themes with the approved reference.
- Verify keyboard traversal, dialog focus handling, Escape close, and focus return.
- Verify 360 px has no horizontal scroll.
- Verify the print output is exactly two A4 pages.
- Verify zero console errors and no outbound runtime requests.
