# Hemanth Creative — Skateboard Designer Portfolio

Bold skateboard graphics, visual design and branding portfolio built with React, Vite and Tailwind CSS. A lightweight, accessible single-page portfolio template that makes it easy to showcase projects, services and contact details.

---

## Quick start

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Build for production and preview the production build locally:

```bash
npm run build
npm run preview
```

---

## What this is

A responsive portfolio theme for skateboard designers and visual creatives. It provides components and a small data layer so you can quickly populate the site with your branding, projects and contact information.

### Stack
- Language(s): JavaScript (React) with small amounts of CSS and HTML
- Framework / runtime: Vite + React (JSX)
- Notable libraries:
  - react, react-dom
  - tailwindcss
  - lucide-react (icons)
  - vite / @vitejs/plugin-react

---

## Project structure

Top-level overview (important files and directories only):

```
.
├─ index.html                 # App HTML shell and metadata
├─ package.json               # npm scripts and dependencies
├─ vite.config.js             # Vite configuration
├─ public/                    # Static assets (images, favicon, etc.)
│  └─ images/                 # Put project artwork here (e.g. /images/project-01.jpg)
├─ src/
│  ├─ main.jsx                # App entry — mounts React app
│  ├─ App.jsx                 # Page composition (Hero, Work, Services, Contact, ...)
│  ├─ index.css               # Global styles / Tailwind entry
│  ├─ components/             # Reusable UI components (Hero, Work, Contact, ...)
│  └─ data/                   # Content data (brand, nav, projects, services, testimonials)
│     ├─ brand.js
│     ├─ nav.js
│     ├─ projects.js
│     ├─ services.js
│     ├─ process.js
│     ├─ testimonials.js
│     └─ why.js
├─ scripts/                   # (optional) developer scripts
├─ .env.example               # Example env vars
```

How it fits together:
- The SPA is composed in `App.jsx`. Each visual section is a component under `src/components/`.
- Site content (brand text, nav, projects, services, testimonials) lives in `src/data/*`; the UI components read from these JS modules to render content.
- Static images go into `public/images/` and projects reference them by path (for example `/images/project-01.jpg`).

---

## Editing content

- Brand name, subtitle, contact links: `src/data/brand.js`
- Navigation items: `src/data/nav.js`
- Projects and featured images: `src/data/projects.js` (place images in `public/images/`)
- Services, process, "why": `src/data/services.js`, `src/data/process.js`, `src/data/why.js`
- Testimonials: `src/data/testimonials.js`

Example: add an artwork file `public/images/project-01.jpg` and set a project's `image` to `/images/project-01.jpg` in `src/data/projects.js`.

---

## Contact form

By default the contact button opens a pre-filled email using the address defined in `src/data/brand.js`.

To send form submissions directly from the site (without your own backend), set the environment variable `VITE_CONTACT_ENDPOINT` in an `.env` file to a Formspree endpoint (or similar). An example is provided in `.env.example`.

Example `.env`:
```
VITE_CONTACT_ENDPOINT=https://formspree.io/f/<your-form-id>
```

When `VITE_CONTACT_ENDPOINT` is set, the Contact component will post form data to that endpoint.

---

## Accessibility & performance

- Focus management and a "Skip to content" link are included (see `src/components/SkipLink.jsx`).
- Images are statically served from `public/` to keep the app simple and performant.
- Tailwind CSS is used to keep CSS small and utility-focused.

---

## Deployment

This is a static SPA and can be deployed to any static hosting provider that supports SPAs:
- Vercel: push to Git and connect the repo — Vercel auto-detects Vite projects.
- Netlify: drag & drop or connect repository; set build command `npm run build` and publish directory `dist`.
- GitHub Pages: build locally and push `dist/` to the `gh-pages` branch, or use a deploy action.

Recommended build settings:
- Build command: `npm run build`
- Publish directory: `dist`

---

## Development tips

- Dev server: `npm run dev` (hot reload)
- Linting: `npm run lint` (uses oxlint)
- Tailwind configuration is included via the Tailwind Vite plugin — update `index.css` to change utilities or base styles.
- For React type annotations: TypeScript types are included as dev dependencies (`@types/react`) but project is JavaScript-first.

---

## Contributing

- This repo is intended as a personal/portfolio template. If you'd like to contribute:
  - Open an issue describing the change or improvement.
  - For code changes, fork the repo, create a feature branch, and open a pull request with a clear description and screenshots where appropriate.

---

## Missing / recommended additions
- LICENSE file — no license is currently present; add one if you plan to share or allow reuse.
- Tests — there are no automated tests configured. Consider adding basic component tests and a CI workflow.
- Image optimization step for production builds (optional).

---

## Try asking
- How do I replace the hero heading and subtitle? (see `src/data/brand.js`)
- How do I add a new project with multiple images? (edit `src/data/projects.js` and add files to `public/images/`)
- How do I enable contact submission via Formspree? (set `VITE_CONTACT_ENDPOINT` in `.env`)

---

If you want, I can:
- Apply this README directly to the repository,
- Translate the README into Telugu, or
- Generate a short README variant suitable for npm package pages.
