# Roncaspot CV / Portfolio

Personal CV and portfolio site published at roncaspot.github.io. The site is a static Vite + React application with a data-driven curriculum, an interactive experience map, light and dark themes, and an exactly two-page printable CV.

## Commands

- npm install installs dependencies.
- npm start starts the Vite development server.
- npm run build creates the production site in dist/.
- npm run serve serves the production build locally.
- npm run deploy builds and publishes dist/ to the gh-pages branch.

## Structure

- src/data/ is the only source of user-visible copy and curriculum content.
- src/components/ contains presentation and interaction components.
- src/styles.css is the approved responsive design stylesheet.
- public/assets/hero/ contains the Granada hero photograph.
- public/assets/logos/ contains selected-experience marks and their provenance.
- public/curriculum.pdf is the downloadable two-page CV. `npm run pdf` regenerates it from
  /print.html with headless Chromium, and `npm run deploy` runs it before publishing, so the
  download can never fall behind the site. The script fails if the CV is not exactly two pages.
  It uses the Playwright browser; set CHROMIUM_BIN to reuse a Chromium already on the machine.
- index.html and print.html are Vite entry points at / and /print.html.

## Content updates

Keep every user-visible string in src/data/:

- profile.json: identity, headline, availability, contacts, About copy, and print header.
- experience.json: companies, roles, projects, graph edges, marks, relationships, and print excerpts.
- projects.json: featured work and the full archive.
- skills.json: skill groups.
- education.json: studies and outside-work interests.
- ui.json: navigation, section headings, controls, labels, status messages, and print labels.

Adding a client or role means adding an object to experience.json and placing its ID in the relevant layout collection. Components must not contain fallback marketing or curriculum copy.

## Verification

Before delivery:

1. Run npm run build.
2. Serve dist/ with npm run serve.
3. Capture desktop and 390 px screenshots in light and dark themes.
4. Exercise graph nodes and the dialog with Tab, Enter, Space, and Escape; confirm focus returns to the opener.
5. Print with background graphics and confirm the PDF is exactly two A4 pages.
6. Confirm zero console errors, no horizontal overflow at 360 px, and no outbound runtime requests.
7. Compare the screenshots with the approved design reference.

Logo source details and licences are documented in public/assets/logos/SOURCES.md.
