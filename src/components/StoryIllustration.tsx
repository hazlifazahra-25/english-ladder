interface StoryIllustrationProps {
  emoji: string;
  scene: string;
  gradient: string;
  compact?: boolean;
}

function StoryIllustration({
  emoji,
  scene,
  gradient,
  compact = false
}: StoryIllustrationProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-story border border-white/70 bg-gradient-to-br ${gradient} ${
        compact ? "h-36" : "h-56"
      } story-card`}
      aria-label={scene}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/35 blur-sm" />
      <div className="absolute bottom-4 left-4 h-16 w-16 rounded-full bg-white/30 animate-floaty" />
      <div className="absolute right-6 top-6 text-5xl drop-shadow-sm animate-floaty">{emoji}</div>
      <div className="absolute left-5 top-4 text-sm">☁️</div>
      <div className="absolute right-20 top-14 text-sm">✨</div>
      <div className="absolute inset-x-5 bottom-4 rounded-2xl bg-white/82 p-3 text-sm font-semibold text-navy-900">
        {scene}
      </div>
    </div>
  );
}

export default StoryIllustration;
