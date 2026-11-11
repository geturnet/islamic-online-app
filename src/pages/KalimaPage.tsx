import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { KALIMAS } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

export function KalimaPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_kalima")}</h1>
        <p className="mt-2 text-slate-500">The core declarations of Islamic faith.</p>
        <div className="mt-6 space-y-4">
          {KALIMAS.map((k) => (
            <Card key={k.translit} className="border-emerald-100 shadow-sm">
              <CardContent className="p-6">
                <p className="text-right font-serif text-2xl text-emerald-800" dir="rtl">{k.arabic}</p>
                <p className="mt-2 text-sm italic text-slate-500">{k.translit}</p>
                <p className="mt-1 text-slate-700">{k.meaning}</p>
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
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("dua")}>{t("nav_dua")}</button></li>
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("names")}>{t("nav_names")}</button></li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}