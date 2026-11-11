import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

const MONTHS = ["Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani", "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhul-Qa'dah", "Dhul-Hijjah"];

export function CalendarPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_calendar")}</h1>
        <p className="mt-2 text-slate-500">The twelve months of the Hijri calendar and their significance.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {MONTHS.map((m, i) => (
            <Card key={m} className="border-emerald-100 shadow-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 font-semibold text-teal-700">{i + 1}</span>
                <p className="font-medium text-emerald-900">{m}</p>
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
            <h3 className="font-semibold text-emerald-900">Related</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("prayer")}>{t("nav_prayer")}</button></li>
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("articles")}>{t("nav_articles")}</button></li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}