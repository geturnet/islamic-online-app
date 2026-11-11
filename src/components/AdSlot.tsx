import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  variant?: "leaderboard" | "sidebar" | "inline" | "footer";
  label?: string;
}

export function AdSlot({ variant = "inline", label }: AdSlotProps) {
  const { t } = useLang();
  const text = label ?? t("advertisement");

  const styles: Record<string, string> = {
    leaderboard: "h-24 md:h-28",
    sidebar: "h-64",
    inline: "h-28",
    footer: "h-20",
  };

  return (
    <div
      className={cn(
        "flex w-full items-center justify-center rounded-xl border border-dashed border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 text-center",
        styles[variant]
      )}
      aria-label={text}
    >
      <p className="px-4 text-xs font-semibold uppercase tracking-widest text-emerald-600">{text}</p>
    </div>
  );
}