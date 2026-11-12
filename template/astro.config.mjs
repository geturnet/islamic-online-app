import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import AdSlot from '@geturnet/islamic-online-app/AdSlot';
import { names99 } from '@geturnet/islamic-online-app/names99';

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
