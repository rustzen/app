import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://app.rustzen.dev',
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: false,
  },
  output: 'static',
});
