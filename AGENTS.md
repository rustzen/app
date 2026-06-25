# app Agent Guide

## Scope

`app` is the RustZen product site. It is an Astro static/content site deployed to Vercel at `app.rustzen.dev`.

Use this guide for work inside `/Users/daibin/Projects/repo-github/rustzen-site`. The GitHub repository is `rustzen/app`; the parent `/Users/daibin/Projects/repo-github/AGENTS.md` still applies for repository boundaries and dirty-tree protection.

## Project Type

- Type: RustZen product site / Vercel / Astro static site.
- Source framework: Astro with MDX content collections.
- Source truth: tracked files in this repository.
- Static output: `dist/`.
- Local-only/generated directories: `.vercel/`, `.astro/`, `.next/`, `out/`, `dist/`.

Do not apply Rust service, Web admin, systemd, Docker, `/opt/rustzen-*`, Tauri, or release-bundle rules to this repository.

## Naming

- Public brand: `RustZen`.
- Repository and package identifiers: `rustzen/app` and `@rustzen/app`.
- Local checkout path: `/Users/daibin/Projects/repo-github/rustzen-site` until renamed separately.
- Route and historical content identifiers may still use lowercase `rustzen-*` when they describe product names, old prose, or local paths.
- Historical article text may mention `Rustzen` or `rustzen-*` when referring to original project naming; do not rewrite old article prose unless the task is content migration.

## Start Every Task

1. Run `git status --short --branch` before edits, builds, tests, deploy checks, or commits.
2. Protect existing content and design edits. Several site pages and content files may be dirty during active copy/design work.
3. Read only the files needed for the request: named files first, then `package.json`, `astro.config.mjs`, `vercel.json`, `src/content.config.ts`, and relevant files under `src/pages`, `src/content`, `src/data`, or `docs`.
4. Treat `.vercel/project.json` as local-only deployment context. Do not describe it as committed deployment truth.
5. Use real scripts from `package.json`; do not invent validation commands.

## Commands

Package manager: `pnpm`.

- Install: `pnpm install --frozen-lockfile`
- Development server: `pnpm dev`
- Build: `pnpm build`
- Preview: `pnpm preview`

Vercel config currently specifies:

- install command: `pnpm install --frozen-lockfile`
- build command: `pnpm build`
- output directory: `dist`

## Documentation

- `docs/README.md` routes site governance docs.
- `docs/architecture.md` records the Astro/source layout.
- `docs/deployment.md` records Vercel and generated/local-only boundaries.
- `docs/content.md` records product pages, blog content, SEO/media ownership, and content update rules.
- `docs/current-site-content.md` is a captured content snapshot, not a replacement for live source files.

## Review Notes

For RustZen standardization work, keep changes docs/governance-first unless the user explicitly asks for content or UI implementation.

When changing content, SEO, product claims, routes, images, or Vercel deployment settings, include evidence for:

- tracked vs untracked files;
- generated/local-only files;
- build command and output directory;
- whether runtime or deployment behavior was actually verified.
