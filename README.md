# javicabello.dev

Personal website. Astro 5, deployed to GitHub Pages.

## Stack

- **Framework**: Astro 5 (static).
- **Hosting**: GitHub Pages (custom domain `javicabello.dev`, CNAME in `public/CNAME`).
- **Analytics**: Plausible (script in `src/layouts/Base.astro`).
- **Fonts**: JetBrains Mono via `@fontsource/jetbrains-mono` (self-hosted).
- **Content**: long-form pieces live in `src/content/writing/*.md` (or `.mdx`), validated by the Zod schema in `src/content.config.ts`.

## Local development

```bash
nvm use            # picks Node 20 from .nvmrc
pnpm install
pnpm dev           # http://localhost:4321
pnpm build         # runs astro check + builds to ./dist
```

## Deploy

`main` is auto-deployed by `.github/workflows/deploy.yml` to GitHub Pages.

**One-off setup needed** (Javi): in repo Settings → Pages, set source to **GitHub Actions** (not "Deploy from a branch"). Without this the workflow runs but nothing is served.

## Content authoring

Writing pieces live under `src/content/writing/<slug>.md`. Frontmatter:

```yaml
---
title: 'Piece title'
description: 'One-line description for SEO and the index list.'
pubDate: 2026-05-15
draft: false
tags: ['ssi', 'agent-identity']
---
```

Drafts (`draft: true`) are hidden in production, visible in `pnpm dev`.

## Copy placeholders

Page copy is intentionally not written yet. Search the codebase for `{{COPY_*}}` to find every slot to fill. Same for `{{BEEHIIV_PUBLICATION_ID}}` in `src/components/BeehiivEmbed.astro`.

## Structure

```
src/
├── components/   Header, Footer, Seo, BeehiivEmbed
├── content/      writing/ — Markdown pieces (gitkeep for now)
├── layouts/      Base.astro — wraps every page
├── pages/        index, about, humanos, contact, writing/, 404, rss.xml.ts
└── styles/       tokens.css (dark mode palette), global.css
```
