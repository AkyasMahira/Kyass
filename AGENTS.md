# AGENTS.md

## Project overview

Astro portfolio with home page + `/projects` listing + individual project pages. Static output to `dist/`. Bilingual (ID + EN) via Astro i18n routing. Components live in `src/components/` as `.astro` files plus one React island (`FadeIn.jsx`).

## Commands

- `npm run dev` — Astro dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally

No lint, typecheck, or test scripts are configured.

## Key conventions

### Astro v6 content collections (Content Layer API)
- Config lives at `src/content.config.ts` (NOT `src/content/config.ts`).
- Collections require a `loader` — use `glob` from `astro/loaders` for local markdown files.
- `z` must be imported from `astro/zod` (NOT `astro:content` or `astro:schema`).
- `render()` must be explicitly imported from `astro:content` (NOT called as `entry.render()`).
- Collection entries use `id` (NOT `slug`). The `id` is auto-generated from the filename by the `glob` loader.
- To add a new project: create a markdown file in `src/content/projects/` with frontmatter matching the schema.

### Astro + React islands
- Most components are `.astro` files (static HTML, zero client JS). Only `FadeIn.jsx` is a React component hydrated with `client:visible`.
- Astro uses `astro/tsconfigs/strict` base. JSX is configured for React (`react-jsx`, `jsxImportSource: "react"`).

### Tailwind CSS v4
- Tailwind v4 uses the `@tailwindcss/vite` plugin (no `tailwind.config.*`).
- Theme tokens are defined as CSS custom properties in `src/styles/global.css` with `@theme` directive.
- Colors use semantic CSS vars (`--theme-bg`, `--theme-surface`, etc.). Do not hardcode color values in markup.

### Theme system
- Light/dark controlled by `.dark` class on `<html>`. CSS custom properties switch values via the `.dark` selector in `global.css`.
- Initial theme set by inline script in `Layout.astro` (reads `localStorage` + `prefers-color-scheme`).
- `ThemeToggle.astro` uses `is:inline` script to toggle the class and persist to `localStorage`.

### Design tokens
```
--theme-bg          background (light #FAFAFA / dark #0A0A0A)
--theme-surface     surface (light #F4F4F5 / dark #111111)
--theme-card        card (light #FFFFFF / dark #171717)
--theme-border      border (light #E5E5E5 / dark #262626)
--theme-primary     text primary (light #0A0A0A / dark #FAFAFA)
--theme-secondary   text secondary (light #52525B / dark #A1A1AA)
--theme-accent      accent (light #171717 / dark #E5E5E5)
```
Fonts: Geist (sans), JetBrains Mono (mono).

### Layout facts
- Public assets live in `public/` (favicon, OG image, noise texture, project previews).
- Node >=22.12.0 required.

### Astro config
- `site` is set to `https://zayssme.my.id` (used for canonical URLs in the layout).
- Integrations: `@astrojs/react`, `@astrojs/sitemap`, `@astrojs/mdx`.
- `i18n.locales`: `['id', 'en']`, `defaultLocale: 'id'`.

### i18n (Bilingual)
- Translation dictionary at `src/i18n/ui.ts` — keys: `nav`, `hero`, `about`, `services`, `featured`, `process`, `testimonials`, `faq`, `footer`, `projects`.
- Helper: `useTranslations(locale)` at `src/i18n/utils.ts`.
- Pages live under `src/pages/[locale]/` with explicit `getStaticPaths` returning all locales.
- Both locales use URL prefixes: `/id/` (Indonesian) and `/en/` (English).
- Root `/` redirects to `/id/` via `src/pages/index.astro`.
- Navbar has inline ID/EN language switcher.
- Project content (markdown) is NOT translated — only UI text.
