import { Badge } from "../types";

interface BadgeStickerProps {
  badge: Badge;
  earned?: boolean;
  compact?: boolean;
}

function BadgeSticker({ badge, earned = true, compact = false }: BadgeStickerProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-3xl border p-4 transition ${
        earned
          ? "border-amber-200 bg-gradient-to-br from-amber-50 via-white to-sky-50 shadow-soft"
          : "border-slate-200 bg-slate-50 opacity-70"
      } ${compact ? "min-h-[110px]" : "min-h-[140px]"}`}
    >
      <div className="absolute -right-5 -top-5 h-14 w-14 rounded-full bg-white/60 blur-sm" />
      <div className="absolute left-3 top-3 text-xl">{earned ? "✨" : "🔒"}</div>
      <div className="pt-5">
        <p className={`${compact ? "text-2xl" : "text-3xl"}`}>{badge.emoji}</p>
        <p className="mt-2 font-display text-lg font-extrabold text-navy-900">{badge.name}</p>
        {!compact ? <p className="mt-1 text-xs font-semibold text-navy-700">{badge.description}</p> : null}
      </div>
    </article>
  );
}

export default BadgeSticker;
