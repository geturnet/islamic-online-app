import AdSlot from "./AdSlot";
import { sitePath } from "../lib/site";

const groups = [
  {
    title: "Prayer",
    links: [
      ["Prayer times", "/prayer-times"],
      ["All prayer times", "/prayer-times"],
      ["Prayer book", "/prayer-times#prayer-book"],
      ["Yearly prayer times", "/prayer-times#yearly-schedule"],
    ],
  },
  {
    title: "Special features",
    links: [
      ["Al-Quran", "/quran"],
      ["Hadith", "/hadith"],
      ["Dua", "/dua"],
      ["Islamic calendar", "/calendar"],
      ["Knowledge", "/articles"],
      ["Islamic gallery", "/gallery"],
      ["IslamicFinder news", "/news"],
    ],
  },
  {
    title: "Our tools",
    links: [
      ["Qibla direction", "/qibla"],
      ["Date converter", "/calendar#date-converter"],
      ["Zakat calculator", "/zakat-calculator"],
      ["Prayer times widget", "/prayer-times#prayer-widget"],
      ["Tasbih", "/tasbih"],
      ["99 Names", "/names"],
      ["Kalima", "/kalima"],
    ],
  },
  {
    title: "About",
    links: [
      ["About us", "/about"],
      ["Contact us", "/about#contact"],
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-emerald-100 bg-emerald-950 text-emerald-50">
      <div className="mx-auto max-w-7xl px-4 pt-6">
        <AdSlot position="footer" slotId="1222556839" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <a href={sitePath("")} className="font-serif text-xl font-bold">☾ Islamic Online</a>
          <p className="mt-3 max-w-xs text-sm leading-6 text-emerald-100/75">
            Quran, Hadith, prayer times and practical tools for everyday Muslim life.
          </p>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-300">
              {group.title}
            </h2>
            <ul className="space-y-2">
              {group.links.map(([label, href]) => (
                <li key={href + label}>
                  <a className="text-sm text-emerald-100/80 hover:text-white hover:underline" href={sitePath(href)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="border-t border-emerald-900 py-4 text-center text-xs text-emerald-200/70">
        Alhikmah © 2026. All rights reserved.
      </p>
    </footer>
  );
}
