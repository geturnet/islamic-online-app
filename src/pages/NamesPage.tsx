import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { NAMES_99 } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

export function NamesPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_names")}</h1>
        <p className="mt-2 text-slate-500">The 99 beautiful names of Allah and their meanings.</p>
        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {NAMES_99.map((n, i) => (
            <div key={`${n}-${i}`} className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white p-3 shadow-sm">
              <span className="text-xs font-semibold text-emerald-500">{i + 1}</span>
              <span className="font-medium text-emerald-900">{n}</span>
            </div>
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
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("kalima")}>{t("nav_kalima")}</button></li>
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("tasbih")}>{t("nav_tasbih")}</button></li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}