import { Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

export function QiblaPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_qibla")}</h1>
        <p className="mt-2 text-slate-500">Determine the direction of the Ka'bah from your location.</p>
        <Card className="mt-6 border-emerald-100 bg-gradient-to-br from-emerald-700 to-teal-900 text-white shadow-lg">
          <CardContent className="flex flex-col items-center p-12">
            <Compass className="h-24 w-24 text-emerald-200" />
            <p className="mt-4 font-serif text-2xl font-bold">Qibla Direction</p>
            <p className="mt-1 text-emerald-100">Approx. 118° from North (example)</p>
          </CardContent>
        </Card>
        <div className="mt-8"><AdSlot variant="inline" /></div>
      </div>
      <aside className="space-y-6">
        <AdSlot variant="sidebar" />
        <Card className="border-emerald-100 bg-emerald-50 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-emerald-900">Related</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("prayer")}>{t("nav_prayer")}</button></li>
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("calendar")}>{t("nav_calendar")}</button></li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}