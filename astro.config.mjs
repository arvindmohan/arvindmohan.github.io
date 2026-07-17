import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arvindmohan.github.io',
  output: 'static',
  integrations: [sitemap()],
});
