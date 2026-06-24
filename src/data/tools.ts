export const tools = [
  {
    code: 'zen-clear',
    name: 'Zen Clear',
    eyebrow: 'Native macOS cleanup',
    description:
      'A native macOS disk cleanup app for developers. It scans package caches, build outputs, AI tool state, and local development residue, then explains what can be cleaned before any action runs.',
    href: '/zen-clear',
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
    },
    highlights: [
      'Native macOS window with source-list navigation, result tables, and an item inspector',
      'Scan developer cache and build output locations across package managers, IDEs, Docker, Xcode, and AI tools',
      'Risk-grade every finding as Safe, Review, or High risk before cleanup',
      'Preview cleanup scope, keep actions explicit, and route recoverable changes through Restore Center',
    ],
    proof:
      'Cleanup is preview-first: scan results and explanations are shown before any deletion runs.',
  },
  {
    code: 'clipboard',
    name: 'Clipboard',
    eyebrow: 'Native clipboard history',
    description:
      'A native macOS clipboard history app for local text, code, links, files, and images. It keeps history searchable, previewable, and on the Mac.',
    href: '/clipboard',
    status: 'In development',
    accent: 'clipboard',
    image: null,
    purchase: null,
    highlights: [
      'Native macOS history window with compact search, filters, row navigation, and a preview inspector',
      'Search recent, pinned, sensitive, text, code, image, file, and link entries',
      'Paste, paste as plain text, restore, pin, or delete from explicit controls',
      'Keep clipboard history on the Mac with sensitive content controls',
    ],
    proof:
      'Clipboard history stays on the Mac. RustZen Cloud is not used for clipboard contents or clipboard history.',
  },
] as const;

export type ToolCode = (typeof tools)[number]['code'];

export function getTool(code: ToolCode) {
  return tools.find((tool) => tool.code === code);
}
