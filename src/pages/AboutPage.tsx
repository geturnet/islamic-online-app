import { Mail, MapPin, ShieldCheck, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AdSlot } from "@/components/AdSlot";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

export function AboutPage({ navigate }: { navigate: (p: PageId, param?: string) => void }) {
  const { t } = useLang();

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_about")}</h1>
        <p className="mt-2 text-slate-500">
          Islamic Online is a free platform offering the Quran, authentic Hadith, prayer times, and trusted Islamic
          tools to Muslims around the world.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Card className="border-emerald-100 shadow-sm">
            <CardContent className="p-5">
              <BookOpen className="h-6 w-6 text-emerald-600" />
              <p className="mt-3 font-semibold text-emerald-900">Authentic Sources</p>
              <p className="mt-1 text-sm text-slate-500">Content drawn from recognised scholarship.</p>
            </CardContent>
          </Card>
          <Card className="border-emerald-100 shadow-sm">
            <CardContent className="p-5">
              <ShieldCheck className="h-6 w-6 text-emerald-600" />
              <p className="mt-3 font-semibold text-emerald-900">Privacy First</p>
              <p className="mt-1 text-sm text-slate-500">We never sell your personal data.</p>
            </CardContent>
          </Card>
          <Card className="border-emerald-100 shadow-sm">
            <CardContent className="p-5">
              <MapPin className="h-6 w-6 text-emerald-600" />
              <p className="mt-3 font-semibold text-emerald-900">Global Reach</p>
              <p className="mt-1 text-sm text-slate-500">Available in 10 languages worldwide.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <AdSlot variant="inline" />
        </div>

        <Card className="mt-8 border-emerald-100 shadow-sm">
          <CardContent className="space-y-4 p-6">
            <h2 className="font-serif text-xl font-bold text-emerald-900">Contact us</h2>
            <div>
              <Label>Name</Label>
              <Input className="mt-1 border-emerald-200" placeholder="Your name" />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" className="mt-1 border-emerald-200" placeholder="you@example.com" />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea className="mt-1 border-emerald-200" placeholder="How can we help?" />
            </div>
            <Button className="bg-emerald-700 hover:bg-emerald-800">
              <Mail className="mr-2 h-4 w-4" /> Send message
            </Button>
          </CardContent>
        </Card>
      </div>

      <aside className="space-y-6">
        <AdSlot variant="sidebar" />
        <Card className="border-emerald-100 bg-emerald-50 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-emerald-900">Quick links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button className="text-emerald-700 hover:underline" onClick={() => navigate("legal")}>
                  {t("nav_legal")}
                </button>
              </li>
              <li>
                <button className="text-emerald-700 hover:underline" onClick={() => navigate("articles")}>
                  {t("nav_articles")}
                </button>
              </li>
              <li>
                <button className="text-emerald-700 hover:underline" onClick={() => navigate("prayer")}>
                  {t("nav_prayer")}
                </button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}