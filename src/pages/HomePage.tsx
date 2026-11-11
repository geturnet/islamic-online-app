import { BookOpen, ScrollText, HandHeart, Clock, CalendarDays, Sparkles, Compass, Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { ARTICLES } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

interface Props {
  navigate: (page: PageId, param?: string) => void;
}

export function HomePage({ navigate }: Props) {
  const { t } = useLang();

  const features = [
    { icon: BookOpen, title: t("nav_quran"), page: "quran" as PageId, desc: "Read all 114 surahs with translation." },
    { icon: ScrollText, title: t("nav_hadith"), page: "hadith" as PageId, desc: "Authentic sayings of the Prophet ﷺ." },
    { icon: HandHeart, title: t("nav_dua"), page: "dua" as PageId, desc: "Daily supplications and remembrances." },
    { icon: Clock, title: t("nav_prayer"), page: "prayer" as PageId, desc: "Accurate prayer times for your city." },
    { icon: CalendarDays, title: t("nav_calendar"), page: "calendar" as PageId, desc: "Hijri calendar and key dates." },
    { icon: Sparkles, title: t("nav_names"), page: "names" as PageId, desc: "The 99 beautiful names of Allah." },
  ];

  const tools = [
    { icon: Compass, title: t("nav_qibla"), page: "qibla" as PageId },
    { icon: Calculator, title: t("nav_zakat"), page: "zakat" as PageId },
    { icon: Clock, title: t("nav_prayer"), page: "prayer" as PageId },
    { icon: Sparkles, title: t("nav_tasbih"), page: "tasbih" as PageId },
  ];

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 px-6 py-12 text-white shadow-xl md:px-12 md:py-16">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-200">
            Islamic Online
          </span>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight md:text-5xl">{t("hero_title")}</h1>
          <p className="mt-4 text-emerald-100/90 md:text-lg">{t("hero_sub")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50" onClick={() => navigate("quran")}>
              {t("cta_explore")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-300 bg-transparent text-white hover:bg-emerald-700" onClick={() => navigate("prayer")}>
              {t("cta_prayer")}
            </Button>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
      </section>

      <section>
        <h2 className="mb-6 font-serif text-2xl font-bold text-emerald-900">{t("features")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="group cursor-pointer border-emerald-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md" onClick={() => navigate(f.page)}>
              <CardContent className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-emerald-900">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <AdSlot variant="inline" />

      <section>
        <h2 className="mb-6 font-serif text-2xl font-bold text-emerald-900">{t("tools")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <button key={tool.title} onClick={() => navigate(tool.page)} className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white p-5 text-left shadow-sm transition-all hover:border-emerald-300 hover:shadow-md">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                <tool.icon className="h-5 w-5" />
              </span>
              <span className="font-medium text-emerald-900">{tool.title}</span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-emerald-900">{t("nav_articles")}</h2>
          <Button variant="ghost" className="text-emerald-700" onClick={() => navigate("articles")}>
            {t("all_articles")} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a) => (
            <Card key={a.slug} className="cursor-pointer overflow-hidden border-emerald-100 shadow-sm transition-all hover:shadow-md" onClick={() => navigate("article", a.slug)}>
              <img src={a.image} alt={a.title} className="h-44 w-full object-cover" loading="lazy" />
              <CardContent className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">{a.category}</span>
                <h3 className="mt-2 font-semibold text-emerald-900">{a.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-500">{a.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}