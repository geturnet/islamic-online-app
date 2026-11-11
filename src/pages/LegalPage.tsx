import { Card, CardContent } from "@/components/ui/card";
import { AdSlot } from "@/components/AdSlot";
import { useLang } from "@/lib/i18n";
import type { PageId } from "@/App";

interface Props {
  navigate: (p: PageId, param?: string) => void;
  param?: string;
}

export function LegalPage({ navigate, param }: Props) {
  const { t } = useLang();
  const section = param === "terms" ? "terms" : "privacy";

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-serif text-3xl font-bold text-emerald-900">{t("nav_legal")}</h1>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => navigate("legal", "privacy")}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              section === "privacy" ? "bg-emerald-100 text-emerald-800" : "text-slate-600 hover:bg-emerald-50"
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => navigate("legal", "terms")}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              section === "terms" ? "bg-emerald-100 text-emerald-800" : "text-slate-600 hover:bg-emerald-50"
            }`}
          >
            Terms of Service
          </button>
        </div>

        <Card className="mt-6 border-emerald-100 shadow-sm">
          <CardContent className="space-y-4 p-6 leading-relaxed text-slate-700">
            {section === "privacy" ? (
              <>
                <h2 className="font-serif text-xl font-bold text-emerald-900">Privacy Policy</h2>
                <p>
                  We respect your privacy. This website does not collect personal information unless you voluntarily
                  submit it through our contact form. We use cookies and third-party advertising partners, including
                  Google AdSense, which may use cookies to serve ads based on your prior visits.
                </p>
                <p>
                  You may opt out of personalised advertising by visiting Google's Ads Settings. We do not sell, trade,
                  or otherwise transfer your personally identifiable information to outside parties.
                </p>
                <p>
                  By using this site you consent to this privacy policy. Any changes will be posted on this page.
                </p>
              </>
            ) : (
              <>
                <h2 className="font-serif text-xl font-bold text-emerald-900">Terms of Service</h2>
                <p>
                  By accessing Islamic Online you agree to use the site for lawful purposes only. All content is
                  provided for educational and informational purposes and should not be treated as a substitute for
                  qualified religious or legal advice.
                </p>
                <p>
                  Content may be updated without notice. We are not responsible for the content of external sites
                  linked from this platform.
                </p>
                <p>
                  Continued use of the site constitutes acceptance of these terms.
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <div className="mt-8">
          <AdSlot variant="inline" />
        </div>
      </div>

      <aside className="space-y-6">
        <AdSlot variant="sidebar" />
        <Card className="border-emerald-100 bg-emerald-50 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-emerald-900">More</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button className="text-emerald-700 hover:underline" onClick={() => navigate("about")}>
                  {t("nav_about")}
                </button>
              </li>
              <li>
                <button className="text-emerald-700 hover:underline" onClick={() => navigate("home")}>
                  {t("nav_home")}
                </button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}