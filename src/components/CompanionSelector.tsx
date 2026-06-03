import { Companion } from "../types";

interface CompanionSelectorProps {
  companions: Companion[];
  selectedCompanionId: string;
  onSelectCompanion: (id: string) => void;
}

function CompanionSelector({
  companions,
  selectedCompanionId,
  onSelectCompanion
}: CompanionSelectorProps) {
  return (
    <section className="storybook-panel p-6 sm:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-navy-900">Choose Your Companion</h3>
          <p className="text-sm font-semibold text-navy-700">
            Pick one friend to guide your reading adventure.
          </p>
        </div>
        <span className="glass-pill px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-sky-600">
          Character Companions
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {companions.map((companion) => {
          const selected = selectedCompanionId === companion.id;
          return (
            <button
              key={companion.id}
              type="button"
              onClick={() => onSelectCompanion(companion.id)}
              className={`rounded-story border p-4 text-left transition story-cta ${
                selected
                  ? "border-sky-500 bg-sky-50 shadow-soft"
                  : "border-sky-100 bg-white hover:border-sky-300"
              }`}
            >
              <div
                className={`mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-3xl ${companion.colorClass}`}
              >
                {companion.emoji}
              </div>
              <p className="font-display text-lg font-bold text-navy-900">{companion.name}</p>
              <p className="mt-1 text-sm text-navy-700">{companion.introLine}</p>
              {selected ? (
                <div className="mt-3 space-y-2">
                  <span className="inline-block rounded-full bg-meadow-200 px-3 py-1 text-xs font-extrabold text-navy-900">
                    Selected
                  </span>
                  <p className="rounded-xl bg-white/80 p-2 text-xs font-bold text-navy-800">
                    "{companion.cheerLine}"
                  </p>
                </div>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CompanionSelector;
