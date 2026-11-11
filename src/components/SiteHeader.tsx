import { useState } from "react";
import { Menu, X, Globe, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LANGUAGES, useLang } from "@/lib/i18n";
import type { PageId } from "@/App";
import { cn } from "@/lib/utils";

interface Props {
  current: PageId;
  navigate: (page: PageId, param?: string) => void;
}

export function SiteHeader({ current, navigate }: Props) {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links: { id: PageId; label: string }[] = [
    { id: "home", label: t("nav_home") },
    { id: "quran", label: t("nav_quran") },
    { id: "hadith", label: t("nav_hadith") },
    { id: "dua", label: t("nav_dua") },
    { id: "prayer", label: t("nav_prayer") },
    { id: "calendar", label: t("nav_calendar") },
    { id: "names", label: t("nav_names") },
    { id: "kalima", label: t("nav_kalima") },
    { id: "tasbih", label: t("nav_tasbih") },
    { id: "qibla", label: t("nav_qibla") },
    { id: "zakat", label: t("nav_zakat") },
    { id: "articles", label: t("nav_articles") },
  ];

  const go = (id: PageId) => {
    navigate(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <button onClick={() => go("home")} className="flex items-center gap-3 text-left">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-lg font-bold text-white shadow-md">
            ☾
          </span>
          <span className="hidden sm:block">
            <span className="block font-serif text-lg font-bold leading-tight text-emerald-900">{t("brand")}</span>
            <span className="block text-xs text-emerald-600">{t("tagline")}</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 xl:flex">
          {links.slice(0, 8).map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                current === l.id
                  ? "bg-emerald-100 text-emerald-800"
                  : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
              )}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Button variant="outline" size="sm" onClick={() => setLangOpen((v) => !v)} className="gap-2 border-emerald-200">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{LANGUAGES.find((l) => l.code === lang)?.label}</span>
            </Button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-lg">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-emerald-50",
                      lang === l.code && "bg-emerald-50 font-semibold text-emerald-800"
                    )}
                  >
                    <span>{l.flag}</span>
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button size="sm" className="hidden bg-emerald-700 hover:bg-emerald-800 sm:flex" onClick={() => go("prayer")}>
            <Moon className="mr-1 h-4 w-4" /> {t("cta_prayer")}
          </Button>
          <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-emerald-100 bg-white xl:hidden">
          <div className="grid grid-cols-2 gap-1 p-4 sm:grid-cols-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={cn(
                  "rounded-lg px-3 py-2 text-left text-sm font-medium",
                  current === l.id ? "bg-emerald-100 text-emerald-800" : "text-slate-600 hover:bg-emerald-50"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}