import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://javicabello.dev',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  integrations: [sitemap()],
});
