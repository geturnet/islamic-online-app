import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AdSlot } from "@/components/AdSlot";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

const CITIES = ["Makkah", "Madinah", "Jakarta", "Istanbul", "Cairo", "London", "New York", "Kuala Lumpur"];

export function PrayerTimesPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();
  const [city, setCity] = useState("Makkah");

  const times = [
    { name: "Fajr", time: "04:52" },
    { name: "Dhuhr", time: "12:18" },
    { name: "Asr", time: "15:42" },
    { name: "Maghrib", time: "18:31" },
    { name: "Isha", time: "19:58" },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_prayer")}</h1>
        <p className="mt-2 text-slate-500">Accurate daily prayer times for your selected city.</p>
        <div className="mt-4 max-w-xs">
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="border-emerald-200"><SelectValue /></SelectTrigger>
            <SelectContent>
              {CITIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {times.map((p) => (
            <Card key={p.name} className="border-emerald-100 bg-gradient-to-br from-white to-emerald-50 shadow-sm">
              <CardContent className="p-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">{p.name}</p>
                <p className="mt-2 font-serif text-3xl font-bold text-emerald-900">{p.time}</p>
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
            <h3 className="font-semibold text-emerald-900">Tools</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("qibla")}>{t("nav_qibla")}</button></li>
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("calendar")}>{t("nav_calendar")}</button></li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}