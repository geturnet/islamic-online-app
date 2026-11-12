import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

const PHRASES = ["Subhanallah", "Alhamdulillah", "Allahu Akbar", "La ilaha illallah"];

export function TasbihPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();
  const [count, setCount] = useState(0);
  const [phrase, setPhrase] = useState(PHRASES[0]);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_tasbih")}</h1>
        <p className="mt-2 text-slate-500">A digital counter for your daily dhikr.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {PHRASES.map((p) => (
            <Button key={p} variant={phrase === p ? "default" : "outline"} className={phrase === p ? "bg-emerald-700" : "border-emerald-200"} onClick={() => { setPhrase(p); setCount(0); }}>
              {p}
            </Button>
          ))}
        </div>
        <Card className="mt-6 border-emerald-100 bg-gradient-to-br from-emerald-700 to-teal-800 text-white shadow-lg">
          <CardContent className="flex flex-col items-center p-10">
            <p className="font-serif text-xl text-emerald-100">{phrase}</p>
            <p className="mt-4 font-serif text-6xl font-bold">{count}</p>
            <div className="mt-6 flex gap-3">
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50" onClick={() => setCount((c) => c + 1)}>Count</Button>
              <Button size="lg" variant="outline" className="border-emerald-300 bg-transparent text-white hover:bg-emerald-700" onClick={() => setCount(0)}>Reset</Button>
            </div>
          </CardContent>
        </Card>
        <div className="mt-8"><AdSlot variant="inline" /></div>
      </div>
      <aside className="space-y-6">
        <AdSlot variant="sidebar" />
        <Card className="border-emerald-100 bg-emerald-50 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-emerald-900">More</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("kalima")}>{t("nav_kalima")}</button></li>
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("dua")}>{t("nav_dua")}</button></li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}