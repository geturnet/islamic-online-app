import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Atur site sesuai domain utama atau GitHub Pages Anda
  site: 'https://geturnet.github.io',
  
  // Base path repository GitHub Anda (kosongkan atau hapus baris ini jika deploy ke Netlify / Vercel / Custom Domain)
  base: '/islamic-online-app',

  integrations: [tailwind()],
  
  output: 'static',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'id', 'ur', 'tr', 'fr', 'bn', 'ms', 'es', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
