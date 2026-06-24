# RustZen Site

RustZen Site is the static official website for RustZen macOS tools.

## Scope

- Product website for RustZen
- Dedicated pages for Zen Clear and Clipboard
- Blog module with migrated content from `idaibin/blog`

## Tools

- **Zen Clear**: a lightweight macOS cleaner for developer environments. Pro is
  sold as a Creem annual subscription at $10/year.
- **Clipboard**: a clipboard history app for macOS that keeps history on the Mac.

## Stack

- Astro
- Astro Content Collections
- MDX
- Vercel

`pnpm build` exports static files into `dist/`.

## Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Content Sources

- Current website copy was preserved in `docs/current-site-content.md`.
- Blog articles were migrated and adapted from `idaibin/blog` at commit `6f79586fc313604089a0ef7d46bf84d500ad86a4`.
