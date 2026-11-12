import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { QURAN_SURAHS } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

export function QuranPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();
  const [q, setQ] = useState("");
  const filtered = QURAN_SURAHS.filter((s) => s.name.toLowerCase().includes(q.toLowerCase()) || s.en.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_quran")}</h1>
        <p className="mt-2 text-slate-500">Read the Holy Quran with translation and transliteration.</p>
        <Input placeholder={t("search")} value={q} onChange={(e) => setQ(e.target.value)} className="mt-4 border-emerald-200" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {filtered.map((s) => (
            <Card key={s.n} className="border-emerald-100 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md">
              <CardContent className="flex items-center gap-4 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-semibold text-emerald-700">{s.n}</span>
                <div>
                  <p className="font-semibold text-emerald-900">{s.name}</p>
                  <p className="text-xs text-slate-500">{s.en} · {s.ayahs} ayahs · {s.type}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <AdSlot variant="inline" />
        </div>
      </div>
      <aside className="space-y-6">
        <AdSlot variant="sidebar" />
        <Card className="border-emerald-100 bg-emerald-50 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-emerald-900">Related</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("hadith")}>{t("nav_hadith")}</button></li>
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("dua")}>{t("nav_dua")}</button></li>
              <li><button className="text-emerald-700 hover:underline" onClick={() => navigate("articles")}>{t("nav_articles")}</button></li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}