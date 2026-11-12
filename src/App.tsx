import { useState } from "react";
import { LanguageProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdSlot } from "@/components/AdSlot";
import { HomePage } from "@/pages/HomePage";
import { QuranPage } from "@/pages/QuranPage";
import { HadithPage } from "@/pages/HadithPage";
import { DuaPage } from "@/pages/DuaPage";
import { PrayerTimesPage } from "@/pages/PrayerTimesPage";
import { CalendarPage } from "@/pages/CalendarPage";
import { NamesPage } from "@/pages/NamesPage";
import { KalimaPage } from "@/pages/KalimaPage";
import { TasbihPage } from "@/pages/TasbihPage";
import { QiblaPage } from "@/pages/QiblaPage";
import { ZakatPage } from "@/pages/ZakatPage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { ArticlePage } from "@/pages/ArticlePage";
import { AboutPage } from "@/pages/AboutPage";
import { LegalPage } from "@/pages/LegalPage";

export type PageId =
  | "home"
  | "quran"
  | "hadith"
  | "dua"
  | "prayer"
  | "calendar"
  | "names"
  | "kalima"
  | "tasbih"
  | "qibla"
  | "zakat"
  | "articles"
  | "article"
  | "about"
  | "legal";

export interface NavTarget {
  page: PageId;
  param?: string;
}

export default function App() {
  const [page, setPage] = useState<PageId>("home");
  const [param, setParam] = useState<string | undefined>(undefined);

  const navigate = (target: PageId, nextParam?: string) => {
    setPage(target);
    setParam(nextParam);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {
      case "quran":
        return <QuranPage navigate={navigate} />;
      case "hadith":
        return <HadithPage navigate={navigate} />;
      case "dua":
        return <DuaPage navigate={navigate} />;
      case "prayer":
        return <PrayerTimesPage navigate={navigate} />;
      case "calendar":
        return <CalendarPage navigate={navigate} />;
      case "names":
        return <NamesPage navigate={navigate} />;
      case "kalima":
        return <KalimaPage navigate={navigate} />;
      case "tasbih":
        return <TasbihPage navigate={navigate} />;
      case "qibla":
        return <QiblaPage navigate={navigate} />;
      case "zakat":
        return <ZakatPage navigate={navigate} />;
      case "articles":
        return <ArticlesPage navigate={navigate} />;
      case "article":
        return <ArticlePage navigate={navigate} slug={param} />;
      case "about":
        return <AboutPage navigate={navigate} />;
      case "legal":
        return <LegalPage navigate={navigate} param={param} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-emerald-50/40 text-slate-800">
        <SiteHeader current={page} navigate={navigate} />
        <div className="mx-auto max-w-7xl px-4 pt-4">
          <AdSlot variant="leaderboard" label="Advertisement" />
        </div>
        <main className="mx-auto max-w-7xl px-4 py-8">{renderPage()}</main>
        <SiteFooter navigate={navigate} />
      </div>
    </LanguageProvider>
  );
}