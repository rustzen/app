# Rustzen Site

Rustzen Site is the static official website for Rustzen macOS tools.

## Scope

- Product website for Rustzen
- Dedicated pages for Zen Clear and Clipboard
- Blog module with migrated content from `idaibin/blog`

## Tools

- **Zen Clear**: a lightweight macOS cleaner for developer environments.
- **Clipboard**: a local-first clipboard history app for macOS.

## Stack

- Astro
- Astro Content Collections
- MDX
- Vercel

`pnpm build` exports static files into `dist/`.

## Development

```bash
pnpm install
pnpm dev
```

## Content Sources

- Current website copy was preserved in `docs/current-site-content.md`.
- Blog articles were copied from `idaibin/blog` at commit `6f79586fc313604089a0ef7d46bf84d500ad86a4`.
