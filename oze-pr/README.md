# Programy komputerowe w projektowaniu instalacji OZE

Course website built with [Docusaurus](https://docusaurus.io/), deployed at <https://oze-projektowanie.vercel.app>.

## Requirements

- [Node.js](https://nodejs.org/) 20 or newer (an LTS release such as 22 or 24 is recommended)

## Installation

```bash
npm install
```

## Local development

```bash
npm start
```

Starts a local development server at <http://localhost:3000> and opens a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

Generates static content into the `build` directory. Preview it locally with:

```bash
npm run serve
```

If the dev server or build behaves strangely, clear the cache with `npm run clear`.

## Project structure

- `docs/wyklady/` – lectures (slides use the components from `src/components/SlideComponents.jsx`)
- `docs/projekty/` – project and lab assignments
- `docs/<topic>/` – topic overview pages (PV, solar thermal, heat pumps, wind)
- `src/data/literature.json` – literature list rendered by `<LiteratureList topic="software" />`
- `static/` – files served as-is (images, favicon)

## Deployment

The site is deployed on Vercel from the GitHub repository <https://github.com/Viktar-T/OZE-projektowanie>.
