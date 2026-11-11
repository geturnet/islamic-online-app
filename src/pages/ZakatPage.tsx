import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

export function ZakatPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();
  const [cash, setCash] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");

  const total = (Number(cash) || 0) + (Number(gold) || 0) + (Number(silver) || 0);
  const zakat = total * 0.025;

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_zakat")}</h1>
        <p className="mt-2 text-slate-500">Calculate your annual Zakat obligation (2.5%).</p>
        <Card className="mt-6 border-emerald-100 shadow-sm">
          <CardContent className="space-y-4 p-6">
            <div>
              <Label>Cash & Savings</Label>
              <Input type="number" value={cash} onChange={(e) => setCash(e.target.value)} className="mt-1 border-emerald-200" placeholder="0" />
            </div>
            <div>
              <Label>Gold Value</Label>
              <Input type="number" value={gold} onChange={(e) => setGold(e.target.value)} className="mt-1 border-emerald-200" placeholder="0" />
            </div>
            <div>
              <Label>Silver Value</Label>
              <Input type="number" value={silver} onChange={(e) => setSilver(e.target.value)} className="mt-1 border-emerald-200" placeholder="0" />
            </div>
            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="text-sm text-emerald-700">Total Assets: <span className="font-semibold">{total.toFixed(2)}</span></p>
              <p className="mt-1 font-serif text-2xl font-bold text-emerald-900">Zakat Due: {zakat.toFixed(2)}</p>
            </div>
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
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("articles")}>{t("nav_articles")}</button></li>
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("calendar")}>{t("nav_calendar")}</button></li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}