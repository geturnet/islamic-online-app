# Islamic Online

A responsive, static multi-page Islamic resource site built with Astro, React islands, and Tailwind CSS. The project is configured for GitHub Pages at `https://geturnet.github.io/islamic-online-app/`.

## Features

- Quran index and 114 surah pages with Arabic text and English translation.
- Hadith collection directory, daily dua, Kalima, and the commonly presented 99 Names list.
- Daily prayer-time estimates by city or browser location, plus an optional yearly schedule generator.
- Hijri date converter, Qibla direction tool, digital Tasbih, and Zakat estimate calculator.
- Knowledge guides with images, SEO metadata, category labels, related articles, and internal links.
- Responsive navigation with English, Arabic, Indonesian, Urdu, Turkish, French, Spanish, German, Malay, and Bengali labels. Arabic and Urdu switch the page direction to RTL. Educational article and tool content is currently primarily English.
- Reusable Google AdSense units in header, sidebar, content, and footer areas; `public/ads.txt` and `public/app-ads.txt` are included.

The knowledge library currently contains five starter guides. They are concise introductory articles, **not** 3,000-word SEO articles, and the requested 100-article library still requires substantial editorial writing, source review, and media production. The site does not claim that this content is already complete.

## Run locally

```sh
npm ci
npm run dev
```

Astro is configured with the GitHub Pages project base path. The local development URL is printed by Astro when the server starts.

Create and verify the static production site:

```sh
npm run build
npm run preview
```

The build produces `dist/` and fetches Quran data for all 114 surahs from AlQuran Cloud. Building therefore requires network access to that service. Prayer and Hijri date tools query the Aladhan API in the visitor’s browser.

## Main project paths

- `astro.config.mjs` — root Astro build and GitHub Pages configuration.
- `template/src/pages/` — public routes and page content.
- `template/src/components/` — shared header, footer, ad slot, and interactive tools.
- `template/src/data/articles.ts` — starter guide data.
- `template/src/styles/global.css` — shared Tailwind and editorial styles.
- `src/lib/i18n.tsx` — ten-language interface labels.
- `public/` — static site assets and ad publisher files.
- `.github/workflows/static.yml` — build and deploy workflow.

## Advertising

The AdSense publisher account and slot use the public IDs provided for this project. Ad delivery depends on approval and valid inventory settings in the AdSense account; an empty ad unit may display until then. Check placement, privacy/consent requirements, and account configuration before publishing.

## Content note

Islamic content, translations, prayer times, date conversion, and Zakat calculations are provided for general reference. Calendar and prayer calculations may vary by authority or location. Verify religious questions with qualified scholars and check local mosque guidance where appropriate.

## License

MIT. Alhikmah © 2026. All rights reserved.
