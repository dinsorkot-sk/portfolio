# Portfolio

Personal portfolio built from the [Canvas template](https://github.com/HugoRCD/canvas) by HugoRCD (Apache-2.0).

- **Stack**: Nuxt 4 · Nuxt UI v4 · Nuxt Content · @nuxtjs/i18n · @nuxtjs/seo
- **Locales**: English (`/en`) + Thai (`/th`) — content lives in `content/<locale>/`
- **Editing**: all text is in `content/` (markdown pages, `projects/*.json`, `faq.json`) and `i18n/locales/<lang>/*.json`. Identity (name, job, email, socials, SEO) is in `app/app.config.ts`.

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev            # http://localhost:3000 → redirects to /en or /th
```

## Production

```bash
pnpm build
pnpm start          # node .output/server/index.mjs
```

Optional: set `NUXT_PRIVATE_RESEND_API_KEY` to enable the contact form email handler.
