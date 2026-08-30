# Hemanth Creative — Portfolio

Premium skateboard designer portfolio. Built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Edit content

| What | File |
| --- | --- |
| Brand name, subtitle | `src/data/brand.js` |
| Instagram, email, WhatsApp | `src/data/brand.js` |
| Navigation | `src/data/nav.js` |
| Projects / images | `src/data/projects.js` |
| Services, process, why | `src/data/services.js`, `process.js`, `why.js` |
| Testimonials | `src/data/testimonials.js` |

Put artwork in `public/images/` and point each project `image` field at it, for example `/images/project-01.jpg`.

## Contact form

By default, submit opens a pre-filled email to the address in `src/data/brand.js`. To send from the site without a custom backend, set `VITE_CONTACT_ENDPOINT` in `.env` to a Formspree (or similar) JSON endpoint — see `.env.example`.
