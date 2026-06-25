export const product = {
  name: 'Zen Clear',
  eyebrow: 'Native macOS cleanup',
  description:
    'A native macOS disk cleanup app for developers. It scans package caches, build outputs, AI tool state, and local development residue, then explains what can be cleaned before any action runs.',
  status: 'Beta',
  accent: 'clear',
  image: {
    src: '/products/zen-clear-product.png',
    alt: 'Zen Clear native macOS GUI screenshot showing available disk space and cache scan categories',
  },
  purchase: {
    label: 'Subscribe Pro',
    href: 'https://cloud.rustzen.dev/api/billing/checkout?product=rustzen-clear&source=site',
    price: '$10/year',
    deviceLimit: 'up to 3 devices',
    free: 'Free scan & preview',
    pro: 'Pro unlocks cleanup',
  },
  download: {
    label: 'Download for macOS',
    href: 'https://cloud.rustzen.dev/api/updates/download/latest?platform=darwin-universal&download=1',
    version: 'latest',
  },
  highlights: [
    'Native macOS window with source-list navigation, result tables, and an item inspector',
    'Scan developer cache and build output locations across package managers, IDEs, Docker, Xcode, and AI tools',
    'Risk-grade every finding as Safe, Review, or High risk before cleanup',
    'Preview cleanup scope, keep actions explicit, and route recoverable changes through Restore Center',
  ],
  proof:
    'Cleanup is preview-first: scan results and explanations are shown before any deletion runs.',
} as const;
