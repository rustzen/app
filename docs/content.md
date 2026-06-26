# app Content Governance

## Purpose

`app` publishes the RustZen brand and Zen Clear product content for the product site at `app.rustzen.dev`.

The site currently represents:

- Zen Clear: beta macOS cleanup client.

## Naming

- Use `RustZen` for the public brand, website copy, page titles, navigation labels, image alt text, and product ecosystem references.
- Use `rustzen/app` and `@rustzen/app` for repository/package identifiers; use lowercase `rustzen-*` only for product names, route/file identifiers, command names, historical prose, and literal URLs.
- Historical snapshots may retain `Rustzen` when documenting the original naming in old prose. Prefer adding context over rewriting historical wording.
- The product is `Zen Clear`.

## Content Sources

| Source | Role | Fact boundary |
| --- | --- | --- |
| `src/data/product.ts` | Product status, description, highlights, proof, download, and purchase copy. | tracked source |
| `src/pages/index.astro` | Home page composition and high-level product messaging. | tracked source or modified tracked during active design work |
| `src/pages/checkout/success.astro` | Checkout completion copy after Creem redirects customers back to the site. | tracked source or modified tracked during active design work |
| `src/layouts/SiteLayout.astro` | Footer, favicon, and baseline metadata. | tracked source or modified tracked during active design work |
| `public/*` | Public images, icons, and fonts. | tracked or untracked until added |
| `docs/current-site-content.md` | Snapshot from the previous multi-product local site before the Astro rebuild. | documentation snapshot |

## Product Copy Rules

- Keep product claims tied to current product state.
- Do not describe cloud services as local runtime dependencies for Zen Clear.
- Do not publish release/update/signing claims that have not been verified in the relevant product repository.
- Keep route slugs stable unless redirects and navigation are reviewed.
- Keep the public download button pointed at the Cloud latest download resolver,
  not a hard-coded release package URL.
- Zen Clear Pro pricing is `$10/year` and subscription-only. Keep purchase copy,
  checkout success copy, and Rustzen Cloud checkout assumptions aligned.
- Current public feature boundary: scanning, cleanup preview, macOS permission
  setup, automatic update checks, and manual update checks do not require a
  license. Pro unlocks cleanup, Restore Center, development scan settings
  (scan folders and exclusions), custom rules, scheduled scans, and up to three
  activated devices.

## SEO And Metadata

Current baseline metadata is set in `SiteLayout.astro` using page-level `title` and `description` props. The home page provides an explicit description through `src/data/product.ts`.

Before adding SEO features such as Open Graph images, canonical URLs, redirects, or sitemap generation, record the source file, generated output expectation, and verification command.

## Media Rules

- `public/` is for assets referenced by URL paths such as `/products/zen-clear-product.png`.
- Zen Clear product media is based on a real Tauri GUI window screenshot stored
  at `public/products/zen-clear-gui-screenshot.png`, then composed into
  `public/products/zen-clear-product.png` for site and Creem product-page use.
  Use `public/products/zen-clear-creem-cover.png` for the Creem checkout media:
  it is a checkout-specific cover with reduced whitespace, current GUI media,
  and concise Pro purchase points.
  Keep it aligned with the current Zen Clear app rather than older
  `Disk Cleaner Pro` concept screens.
- Screenshots used as docs evidence belong under `docs/screenshots/`.
- New product media should be reviewed for route usage, alt text, file size, and whether it is tracked or still untracked.

## Dirty-Tree Protection

Use `git status --short --branch` before edits. Preserve unrelated local changes, and keep governance-only changes separate from content/UI changes when possible.
