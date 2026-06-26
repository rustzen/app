# Current Website Content Snapshot

Source: local Next.js files in this repository before the Astro rebuild.

Date captured: 2026-06-10.

## Home

Title: Rustzen macOS apps

Headline: macOS cleanup and clipboard history.

Description: Rustzen builds macOS tools for developer cache cleanup and local clipboard history.

Primary products:

- Zen Clear
  - Status: Beta
  - Description: A macOS cleanup tool for developer environments. It scans common cache locations, shows what can be removed, and keeps cleanup decisions explicit.
  - Path: `/zen-clear`
- Clipboard
  - Status: In development
  - Description: A macOS clipboard history app for text and images. It lets you search recent items, pin useful entries, and restore a selected item to the system clipboard.
  - Path: `/clipboard`

## Zen Clear

Description: A macOS cleanup tool for developer environments. It scans common cache locations, shows what can be removed, and keeps cleanup decisions explicit.

Features:

- Scan developer cache and build output locations
- Preview disk usage before deleting files
- Choose cleanup scope before running an action
- Covers Rust, Node.js, Java, Xcode, IDE, Docker, and Homebrew caches

Note: Cleanup is preview-first: scan results are shown before any deletion runs.

## Clipboard

Description: A macOS clipboard history app for text and images. It lets you search recent items, pin useful entries, and restore a selected item to the system clipboard.

Features:

- Text and image clipboard history
- History stays on the Mac
- Search recent and pinned entries
- Delete sensitive or temporary entries

Note: Clipboard history stays on the Mac. Rustzen Cloud is not used for clipboard contents or clipboard history.
