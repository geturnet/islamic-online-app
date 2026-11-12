import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { DUAS } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

export function DuaPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_dua")}</h1>
        <p className="mt-2 text-slate-500">Daily supplications with Arabic, transliteration and meaning.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {DUAS.map((d) => (
            <Card key={d.title} className="border-emerald-100 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-emerald-900">{d.title}</h3>
                <p className="mt-3 text-right font-serif text-xl text-emerald-800" dir="rtl">{d.arabic}</p>
                <p className="mt-2 text-sm italic text-slate-500">{d.translit}</p>
                <p className="mt-2 text-sm text-slate-600">{d.meaning}</p>
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
            <h3 className="font-semibold text-emerald-900">More</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("tasbih")}>{t("nav_tasbih")}</button></li>
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("kalima")}>{t("nav_kalima")}</button></li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}