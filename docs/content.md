# app Content Governance

## Purpose

`app` publishes RustZen brand, product, and engineering content for the product site at `app.rustzen.dev`.

The site currently represents:

- Zen Clear: beta macOS cleanup client.
- Clipboard: in-development macOS clipboard history client.
- Blog articles migrated from `idaibin/blog` plus current RustZen product notes.

## Naming

- Use `RustZen` for the public brand, website copy, page titles, navigation labels, image alt text, and product ecosystem references.
- Use `rustzen/app` and `@rustzen/app` for repository/package identifiers; use lowercase `rustzen-*` only for product names, route/file identifiers, command names, historical prose, and literal URLs.
- Historical articles may retain `Rustzen` when documenting the original naming in old prose. Prefer adding context over rewriting historical wording.
- Product names are `Zen Clear` and `Clipboard`.

## Content Sources

| Source | Role | Fact boundary |
| --- | --- | --- |
| `src/data/tools.ts` | Product routes, status, descriptions, highlights, and proof copy. | tracked source |
| `src/pages/index.astro` | Home page composition and high-level product messaging. | tracked source or modified tracked during active design work |
| `src/pages/[code].astro` | Product page rendering. | tracked source or modified tracked during active design work |
| `src/pages/checkout/success.astro` | Checkout completion copy after Creem redirects customers back to the site. | untracked source candidate until added |
| `src/content/posts/*.mdx` | Blog articles. | tracked source or modified tracked during active editing |
| `src/layouts/SiteLayout.astro` | Navigation, footer, favicon, baseline metadata. | tracked source or modified tracked during active design work |
| `public/*` | Public images, icons, and fonts. | tracked or untracked until added |
| `docs/current-site-content.md` | Snapshot from the previous local site before Astro rebuild. | documentation snapshot |

## Product Copy Rules

- Keep product claims tied to current product state.
- Do not describe cloud services as local runtime dependencies for Zen Clear or Clipboard.
- Do not imply clipboard data is uploaded unless a future product contract explicitly says so.
- Do not publish release/update/signing claims that have not been verified in the relevant product repository.
- Keep route slugs stable unless redirects and navigation are reviewed.
- Zen Clear Pro pricing is `$10/year` and subscription-only. Keep purchase copy,
  checkout success copy, and Rustzen Cloud checkout assumptions aligned.

## Blog Rules

Blog posts live in `src/content/posts/`. Each post must satisfy the schema in `src/content.config.ts`.

When migrating or editing posts:

- preserve source provenance when it matters;
- set `lang`, `translationKey`, and `source` frontmatter for migrated posts;
- update title, description, tags, and `pubDate` intentionally;
- keep language variants aligned when both Chinese and English posts exist;
- verify links and images when changing article assets;
- avoid treating generated `dist/` output as article source.

The blog list displays the language label from `lang`. The article page displays source provenance and links to the paired translation when another post shares the same `translationKey`.

## SEO And Metadata

Current baseline metadata is set in `SiteLayout.astro` using page-level `title` and `description` props. Product and blog pages should provide explicit descriptions through source data or frontmatter.

Before adding SEO features such as Open Graph images, canonical URLs, redirects, or sitemap generation, record the source file, generated output expectation, and verification command.

## Media Rules

- `public/` is for assets referenced by URL paths such as `/rustzen-macos-suite.png`.
- Zen Clear product media is based on a real Tauri GUI window screenshot stored
  at `public/products/zen-clear-gui-screenshot.png`, then composed into
  `public/products/zen-clear-product.png` for site and Creem product-page use.
  Keep it aligned with the current Zen Clear app rather than older
  `Disk Cleaner Pro` concept screens.
- `src/assets/` is for build-pipeline-owned assets imported by Astro content or components.
- Screenshots used as docs evidence belong under `docs/screenshots/`.
- New product media should be reviewed for route usage, alt text, file size, and whether it is tracked or still untracked.

## Dirty-Tree Protection

Use `git status --short --branch` before edits. Preserve unrelated local changes, and keep governance-only changes separate from content/UI changes when possible.
