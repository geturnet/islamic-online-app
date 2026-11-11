import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { HADITHS } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

export function HadithPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_hadith")}</h1>
        <p className="mt-2 text-slate-500">Authentic sayings of the Prophet Muhammad ﷺ.</p>
        <div className="mt-6 space-y-4">
          {HADITHS.map((h) => (
            <Card key={h.id} className="border-emerald-100 shadow-sm">
              <CardContent className="p-6">
                <p className="font-serif text-lg leading-relaxed text-emerald-900">“{h.text}”</p>
                <p className="mt-3 text-sm text-emerald-600">{h.source} · {h.narrator}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8"><AdSlot variant="inline" /></div>
      </div>
      <aside className="space-y-6">
        <AdSlot variant="sidebar" />
        <Card className="border-emerald-100 bg-emerald-50 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-emerald-900">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("quran")}>{t("nav_quran")}</button></li>
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("articles")}>{t("nav_articles")}</button></li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}