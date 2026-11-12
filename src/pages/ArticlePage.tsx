import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdSlot } from "@/components/AdSlot";
import { ARTICLES } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

interface Props {
  navigate: (p: PageId, param?: string) => void;
  slug?: string;
}

export function ArticlePage({ navigate, slug }: Props) {
  const { t } = useLang();
  const article = ARTICLES.find((a) => a.slug === slug) ?? ARTICLES[0];
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <article className="lg:col-span-2">
        <Button variant="ghost" className="mb-4 text-emerald-700" onClick={() => navigate("articles")}>
          ← {t("back")}
        </Button>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
          {article.category} · {article.readMinutes} min read
        </span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-emerald-900 md:text-4xl">{article.title}</h1>
        <img
          src={article.image}
          alt={article.title}
          className="mt-6 h-72 w-full rounded-2xl object-cover shadow-md"
          loading="lazy"
        />
        <p className="mt-6 text-lg text-slate-600">{article.excerpt}</p>
        <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
          {article.body.slice(0, 3).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="my-8">
          <AdSlot variant="inline" />
        </div>
        <div className="space-y-4 leading-relaxed text-slate-700">
          {article.body.slice(3).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {article.video && (
          <div className="mt-8">
            <h3 className="mb-3 font-serif text-xl font-bold text-emerald-900">Watch</h3>
            <div className="aspect-video overflow-hidden rounded-2xl shadow-md">
              <iframe src={article.video} title={article.title} className="h-full w-full" allowFullScreen />
            </div>
          </div>
        )}
        <div className="mt-10">
          <h3 className="mb-4 font-serif text-xl font-bold text-emerald-900">{t("related")}</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Card
                key={r.slug}
                className="cursor-pointer overflow-hidden border-emerald-100 shadow-sm transition-all hover:shadow-md"
                onClick={() => navigate("article", r.slug)}
              >
                <img src={r.image} alt={r.title} className="h-28 w-full object-cover" loading="lazy" />
                <CardContent className="p-3">
                  <p className="text-sm font-medium text-emerald-900">{r.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </article>
      <aside className="space-y-6">
        <AdSlot variant="sidebar" />
        <Card className="border-emerald-100 bg-emerald-50 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-emerald-900">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button className="text-emerald-700 hover:underline" onClick={() => navigate("quran")}>
                  {t("nav_quran")}
                </button>
              </li>
              <li>
                <button className="text-emerald-700 hover:underline" onClick={() => navigate("hadith")}>
                  {t("nav_hadith")}
                </button>
              </li>
              <li>
                <button className="text-emerald-700 hover:underline" onClick={() => navigate("articles")}>
                  {t("all_articles")}
                </button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}