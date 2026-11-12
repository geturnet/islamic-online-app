import { useLang } from "@/lib/i18n";
import { AdSlot } from "@/components/AdSlot";
import type { PageId } from "@/App";

interface Props {
  navigate: (page: PageId, param?: string) => void;
}

export function SiteFooter({ navigate }: Props) {
  const { t } = useLang();

  const columns: { title: string; links: { label: string; page: PageId }[] }[] = [
    {
      title: t("features"),
      links: [
        { label: t("nav_quran"), page: "quran" },
        { label: t("nav_hadith"), page: "hadith" },
        { label: t("nav_dua"), page: "dua" },
        { label: t("nav_calendar"), page: "calendar" },
        { label: t("nav_articles"), page: "articles" },
      ],
    },
    {
      title: t("tools"),
      links: [
        { label: t("nav_qibla"), page: "qibla" },
        { label: t("nav_zakat"), page: "zakat" },
        { label: t("nav_prayer"), page: "prayer" },
        { label: t("nav_tasbih"), page: "tasbih" },
        { label: t("nav_names"), page: "names" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: t("nav_about"), page: "about" },
        { label: t("nav_legal"), page: "legal" },
        { label: t("nav_kalima"), page: "kalima" },
      ],
    },
  ];

  return (
    <footer className="mt-12 border-t border-emerald-100 bg-emerald-900 text-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <AdSlot variant="footer" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-lg">☾</span>
            <span className="font-serif text-lg font-bold">{t("brand")}</span>
          </div>
          <p className="mt-3 text-sm text-emerald-200/80">{t("tagline")}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-300">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <button onClick={() => navigate(l.page)} className="text-sm text-emerald-100/80 hover:text-white">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-emerald-800 py-4 text-center text-xs text-emerald-300/70">
        Alhikmah © 2026. All rights reserved.
      </div>
    </footer>
  );
}