import { parentMetrics } from "../data/learningData";
import { Badge } from "../types";
import BadgeSticker from "./BadgeSticker";

interface ProgressPageProps {
  badges: Badge[];
  completedStoryIds: string[];
}

function ProgressPage({ badges, completedStoryIds }: ProgressPageProps) {
  const weeklyBars = [58, 66, 62, 71, 74, 82, 79];
  const valueCoverage = Math.round(
    (parentMetrics.characterValuesLearned.length / 8) * 100
  );

  return (
    <div className="space-y-8">
      <section className="storybook-panel p-6 sm:p-8">
        <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">Parent Dashboard</p>
        <h1 className="font-display text-4xl font-extrabold text-navy-900">Learning Progress</h1>
        <p className="mt-2 max-w-2xl text-sm font-semibold text-navy-700">
          Professional insights designed for parents to monitor reading growth and character development.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Stories Completed", value: `${completedStoryIds.length}` },
            { label: "Reading Accuracy", value: `${parentMetrics.readingAccuracy}%` },
            { label: "Current Level", value: parentMetrics.currentLevel },
            { label: "Values Learned", value: `${parentMetrics.characterValuesLearned.length}` }
          ].map((metric) => (
            <article key={metric.label} className="rounded-story border border-sky-100 bg-white p-4 story-card">
              <p className="text-xs font-extrabold uppercase tracking-wide text-sky-600">{metric.label}</p>
              <p className="mt-2 font-display text-3xl font-extrabold text-navy-900">{metric.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <article className="storybook-panel p-6 sm:p-8">
          <h2 className="font-display text-3xl font-extrabold text-navy-900">Weekly Progress</h2>
          <p className="mt-2 text-sm font-semibold text-navy-700">Reading performance and consistency this week.</p>
          <div className="mt-4 rounded-2xl border border-sky-100 bg-white p-3">
            <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wide text-sky-600">
              <span>Weekly Goal Completion</span>
              <span>{parentMetrics.weeklyProgressPercent}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-sky-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-meadow-300"
                style={{ width: `${parentMetrics.weeklyProgressPercent}%` }}
              />
            </div>
          </div>
          <div className="mt-6 flex items-end gap-2 rounded-story bg-white p-4">
            {weeklyBars.map((value, idx) => (
              <div key={`bar-${idx}`} className="flex-1">
                <div className="relative h-40 rounded-t-xl bg-sky-50">
                  <div
                    style={{ height: `${value}%` }}
                    className="absolute inset-x-1 bottom-1 rounded-t-lg bg-gradient-to-t from-sky-500 to-meadow-300"
                  />
                </div>
                <p className="mt-2 text-center text-xs font-bold text-navy-700">{["M", "T", "W", "T", "F", "S", "S"][idx]}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="storybook-panel p-6 sm:p-8">
          <h2 className="font-display text-3xl font-extrabold text-navy-900">Character Values Learned</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-extrabold">
            {["Personal Hygiene", "Sharing", "Respect", "Honesty"].map((value) => (
              <span key={value} className="rounded-full bg-cream-100 px-3 py-2 text-navy-800">
                {value}
              </span>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-sky-100 bg-white p-3">
            <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wide text-sky-600">
              <span>Values Coverage</span>
              <span>{valueCoverage}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-sky-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-meadow-300"
                style={{ width: `${valueCoverage}%` }}
              />
            </div>
          </div>
          <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">Earned Badges</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {badges.map((badge, index) => (
              <BadgeSticker key={badge.id} badge={badge} compact earned={index < parentMetrics.earnedBadgeCount} />
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default ProgressPage;
