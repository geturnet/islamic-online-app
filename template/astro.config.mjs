import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// GitHub Pages project site: https://geturnet.github.io/islamic-online-app/
export default defineConfig({
  site: 'https://geturnet.github.io',
  base: '/islamic-online-app',
  integrations: [react(), tailwind()],
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'id', 'ur', 'tr', 'fr', 'bn', 'ms', 'es', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
