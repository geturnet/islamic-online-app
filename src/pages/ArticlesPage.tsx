import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { ARTICLES } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

export function ArticlesPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();
  const [q, setQ] = useState("");
  const filtered = ARTICLES.filter((a) => a.title.toLowerCase().includes(q.toLowerCase()) || a.category.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_articles")}</h1>
        <p className="mt-2 text-slate-500">In-depth articles on Quran, Hadith, prayer and Islamic life.</p>
        <Input placeholder={t("search")} value={q} onChange={(e) => setQ(e.target.value)} className="mt-4 border-emerald-200" />
        <div className="mt-6 space-y-4">
          {filtered.map((a, i) => (
            <div key={a.slug}>
              <Card className="cursor-pointer overflow-hidden border-emerald-100 shadow-sm transition-all hover:shadow-md" onClick={() => navigate("article", a.slug)}>
                <div className="flex flex-col sm:flex-row">
                  <img src={a.image} alt={a.title} className="h-40 w-full object-cover sm:h-auto sm:w-48" loading="lazy" />
                  <CardContent className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">{a.category} · {a.readMinutes} min</span>
                    <h3 className="mt-2 font-semibold text-emerald-900">{a.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{a.excerpt}</p>
                  </CardContent>
                </div>
              </Card>
              {i === 2 && <div className="mt-4"><AdSlot variant="inline" /></div>}
            </div>
          ))}
        </div>
      </div>
      <aside className="space-y-6">
        <AdSlot variant="sidebar" />
        <Card className="border-emerald-100 bg-emerald-50 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-emerald-900">Categories</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {["Al-Quran", "Hadith", "Prayer", "Dua", "Zakat"].map((c) => (
                <li key={c}><button className="text-emerald-700 hover:underline" onClick={() => setQ(c)}>{c}</button></li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}