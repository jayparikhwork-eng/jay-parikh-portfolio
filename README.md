# Jay Parikh — Portfolio

A fast, static, single-page product-manager portfolio built with **Vite + React + TypeScript + Tailwind CSS**. All content lives in one editable data file, and all images are self-hosted (nothing is hotlinked).

**Live reference design:** single-page site with hero, stats, philosophy, work experience, education, a project gallery with expandable case studies, hobbies, and contact.

## Tech stack

- [Vite](https://vitejs.dev/) — build tool & dev server
- [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS 3](https://tailwindcss.com/) with `tailwindcss-animate`
- [@phosphor-icons/react](https://phosphoricons.com/) — light-stroke icons
- Self-hosted fonts via [Fontsource](https://fontsource.org/): **Playfair Display** (serif display) + **Plus Jakarta Sans** (body)

## Design system — "Editorial Luxury"

A warm, print-inspired identity: paper/cream surfaces with a subtle film-grain
overlay, high-contrast serif display headings, a single **sage** accent, and
"double-bezel" nested cards (an inner core seated in an outer shell for a
machined, physical feel). Motion is spring-eased (custom cubic-beziers), with
scroll-reveal fade-ups and button-in-button CTA physics. All design tokens
(colors, radii, shadows, fonts) live in [tailwind.config.ts](tailwind.config.ts)
and [src/index.css](src/index.css) as HSL variables — change the palette in one
place.

## Project structure

```
.
├─ public/
│  ├─ assets/            # all images (profile, logos, project & hobby art)
│  └─ favicon.svg        # generated "JP" monogram
├─ reference/            # design reference: screenshots + full content extraction
├─ src/
│  ├─ components/        # one component per section (+ Reveal, CountUp, dialogs)
│  ├─ data/content.ts    # ← ALL text and links live here
│  ├─ lib/asset.ts       # base-path-aware asset URL helper
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css          # Tailwind + design tokens (colors, gradients, shadows)
├─ .github/workflows/deploy.yml   # GitHub Pages CI
├─ index.html
├─ tailwind.config.ts
└─ vite.config.ts
```

## Editing content

Open [`src/data/content.ts`](src/data/content.ts). Every heading, paragraph, project case study, link label, and URL is there. Change text or links without touching any component.

To swap an image, drop the new file into `public/assets/` and update its path in `content.ts`.

## Getting started

Requires Node 18+.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# type-check + production build → dist/
npm run build

# preview the production build locally
npm run preview
```

## Deployment

The site is fully static (the contents of `dist/`). `vite.config.ts` uses a **relative base (`./`)**, so the same build works from a domain root *or* a project subpath with no changes.

### Option A — GitHub Pages (automated)

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push to `main`. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and deploys automatically.
4. Your site publishes at `https://<username>.github.io/<repo>/`.

Because the base is relative, no extra config is needed for a project subpath.

### Option B — Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
3. Deploy. (No environment variables required.)

Netlify works the same way: build `npm run build`, publish `dist`.

## Accessibility & performance

- Semantic landmarks (`header`, `main`, `footer`, `nav`), a skip link, and a single `h1`.
- All images have descriptive `alt` text; decorative elements use `aria-hidden`.
- Visible keyboard focus states; dialogs close on `Esc` and manage focus.
- Motion (scroll reveals, count-ups) is disabled under `prefers-reduced-motion`.
- No tracking scripts, no third-party branding.

## Contact form

The "Send me a message" dialog composes a pre-filled email via `mailto:` (static-friendly, no backend). To use a real form service instead, replace the `handleSubmit` in [`src/components/ContactDialog.tsx`](src/components/ContactDialog.tsx) with a POST to Formspree/Getform.
