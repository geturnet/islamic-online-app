// astro.config.mjs
export default defineConfig({
  site: 'https://geturnet.github.io',
  base: '/islamic-online-app',
  // ... konfigurasi lainnya
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://islamic-online-app.pages.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'id', 'ur', 'tr', 'fr', 'bn', 'ms', 'es', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
