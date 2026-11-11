# 🌙 Islamic Online App

[![Astro](https://img.shields.io/badge/Astro-v4.0-orange.svg)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Languages](https://img.shields.io/badge/Languages-10%20Supported-green.svg)]()

Islamic Online is a comprehensive, multi-page digital Islamic platform designed for global audiences. It features verified Islamic resources, daily utility tools, multi-language support (10 languages), and a vast library of SEO-optimized articles with integrated strategic advertising slots.

---

## 🌟 Key Features

- **🌐 Multi-Language Architecture:** Fully localized across **10 global languages** (English, Arabic, Indonesian, Urdu, French, Turkish, Bengali, Malay, Spanish, and German) with RTL support for Arabic and Urdu.
- **📖 Complete Islamic Content & Tools:**
  - **Al-Quran:** Read, translate, and explore verses.
  - **Hadith:** Authentic collections and categorization.
  - **Prayer Times:** Accurate local schedules, yearly prayer books, and widgets.
  - **Qibla Direction & Compass:** Real-time direction finder.
  - **Zakat Calculator:** Simple, accurate financial asset calculation.
  - **Digital Tasbih:** Interactive counter for Dhikr.
  - **99 Names of Allah (Asma-ul-Husna):** Meanings and audio references.
  - **Islamic Calendar & Date Converter:** Hijri to Gregorian conversion.
- **📚 SEO Knowledge Hub:** 100+ in-depth English and multi-language articles (3,000+ words each) featuring semantic structures, multimedia embeds, and internal linking.
- **💰 Strategic Ad Integration:** Programmatic ad slots seamlessly integrated into headers, sidebars, in-article paragraphs, labels, and footers (`AdSlot.tsx`).
- **📱 Fully Responsive Modern UI:** Built with high performance and accessibility in mind using modern CSS and component frameworks.

---

## 📁 Project Structure

```text
islamic-online-app/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── videos/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navigation & Header Ad Slot
│   │   ├── Footer.tsx           # Comprehensive Footer & Links
│   │   ├── Sidebar.tsx          # Sidebar Widgets & Ad Placement
│   │   └── AdSlot.tsx           # Reusable Ad Network Component
│   ├── data/
│   │   ├── articles.ts          # 100 SEO Articles Database (3,000+ words)
│   │   ├── quran.ts             # Quranic metadata & chapters
│   │   └── names99.ts           # 99 Names of Allah
│   ├── locales/
│   │   └── config.json          # 10 Language configuration rules
│   ├── pages/                   # Multi-page routing architecture
│   │   ├── index.astro          # Landing / Home Page
│   │   ├── quran/index.astro
│   │   ├── hadith/index.astro
│   │   ├── prayer-times/index.astro
│   │   ├── qibla/index.astro
│   │   ├── zakat-calculator/index.astro
│   │   ├── tasbih/index.astro
│   │   ├── articles/[slug].astro # Dynamic 3,000+ word article template
│   │   ├── about.astro
│   │   ├── privacy.astro
│   │   └── terms.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```


## 🛠️ Getting Started & Installation
Follow these steps to run or develop the project locally:

**1. Clone the Repository**

Bash
git clone [https://github.com/geturnet/islamic-online-app.git](https://github.com/geturnet/islamic-online-app.git)

```
cd islamic-online-app
```
**2. Install Dependencies**
Make sure you have Node.js installed, then run:
```
Bash
npm install
```

**3. Run Development Server**
Bash
npm run dev
Open http://localhost:4321 in your browser to view the application.

**📢 Advertising Integration**
Ad slots are managed via the reusable <AdSlot> component (src/components/AdSlot.tsx). You can easily replace the placeholder HTML inside AdSlot.tsx with your ad network tags (e.g., Google AdSense, Adsterra, or custom banner scripts):
```
TypeScript
export default function AdSlot({ position }) {
  return (
    <div className={`ad-slot-${position}`}>
      {/* Insert your Ad Network script or responsive tag here */}
    </div>
  );
}
```

## 📜 Footer Links Map
The footer includes structured navigation matching standard directory practices:

**Prayer**: Prayer times, All Prayer times, Prayer Book, Yearly prayer times.

**Special Features**: Al-Quran, Hadith, Dua, Islamic Calendar, Knowledge Articles, Islamic Gallery, News.

**Tools**: Qibla Direction, Date Converter, Zakat Calculator, Prayer Times Widget, Digital Tasbih.

**Legal & Company**: About Us, Privacy Policy, Terms & Conditions, Contact Us.

## 📄 License
This project is licensed under the MIT License.

Alhikmah © 2026. All rights reserved.


---


