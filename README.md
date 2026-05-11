# javicabello.dev

Personal site. Minimal portfolio with an outbound link to the Human/OS newsletter.

## Stack

- **Framework**: Astro 5 (static).
- **Hosting**: GitHub Pages (custom domain `javicabello.dev`, CNAME in `public/CNAME`).
- **Analytics**: Plausible (script in `src/layouts/Base.astro`).
- **Fonts**: JetBrains Mono via `@fontsource/jetbrains-mono` (self-hosted).

## Pages

- `/` — Home. Bio + outbound CTA to Human/OS + social links.
- `/services` — Coming soon (placeholder).
- `/contact` — Email only, no form.
- `/404`

Human/OS lives in Beehiiv (`https://humanos-frame.beehiiv.com/`). The site does not host newsletter content; it links out.

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

## Copy placeholders

Page copy is intentionally not written yet. Search the codebase for `{{COPY_*}}` to find every slot to fill.

## Structure

```
src/
├── components/   Header, Footer, Seo
├── layouts/      Base.astro
├── pages/        index, services, contact, 404
└── styles/       tokens.css (dark mode), global.css
```
