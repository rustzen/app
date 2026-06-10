export const tools = [
  {
    code: 'zen-clear',
    name: 'Zen Clear',
    eyebrow: 'Developer cleanup',
    description:
      'A lightweight macOS cleaner for developer environments. The free edition supports full scanning and disk analysis. Pro unlocks cleanup, configuration, and all operational capabilities.',
    href: '/zen-clear',
    status: 'Planning paid release',
    accent: 'clear',
    highlights: [
      'Full scan and disk analysis in the free edition',
      'Cleanup and follow-up operations unlocked by Pro',
      'Configuration unlocked by Pro',
      'Designed for Rust, Node.js, Java, Xcode, and IDE caches',
    ],
    proof:
      'Built around a local-first desktop workflow for developers who want to inspect storage pressure before making changes.',
  },
  {
    code: 'clipboard',
    name: 'Clipboard',
    eyebrow: 'Private clipboard history',
    description:
      'Capture text and image clipboard entries, search recent and pinned items, preview content, and restore selected entries back to the system clipboard.',
    href: '/clipboard',
    status: 'Early product design',
    accent: 'clipboard',
    highlights: [
      'Text and image clipboard history',
      'Local storage by default',
      'Search recent and pinned entries',
      'Delete sensitive or temporary entries',
    ],
    proof:
      'Clipboard content stays local by default. The product is designed around private, on-device history.',
  },
] as const;

export type ToolCode = (typeof tools)[number]['code'];

export function getTool(code: ToolCode) {
  return tools.find((tool) => tool.code === code);
}
