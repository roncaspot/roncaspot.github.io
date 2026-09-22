# Vite + React rewrite notes

## Design source

The application ports the approved September 2026 topology-v5 HTML composition. Its CSS was copied as the starting point and retained for the Vista hero, logo band, content sections, graph and list views, responsive layouts, themes, interactions, and two-page print layout.

## Removed legacy implementation

- Create React App, CRACO, Babel, and legacy module-alias configuration.
- The @hw-core/react-platform and reactstrap-modals vendored dependencies.
- The old roncaspot and universal-pwa module trees, including route components and mixed JSX/Markdown curriculum data.
- The Express/prerender server and sitemap generator applications.
- The old Docker development setup and subrepository maintenance script.
- Bootstrap, jQuery, Fancybox, Owl Carousel, Font Awesome, Glyphicons, animation scripts, and their unused images and fonts.
- The CRA HTML shell, obsolete web manifests and unused PWA icons, and the separate LinkedIn PDF.

## Replacement

- Vite + React with two static entry points: / and /print.html.
- JSON-only content under src/data/.
- Self-hosted Sora and DM Sans through Fontsource.
- Local hero and logo assets with provenance retained.
- Native React state for theme selection, graph/list switching, edge highlighting, the accessible dialog, focus return, and print actions.
- A generated two-page A4 CV at /curriculum.pdf.
