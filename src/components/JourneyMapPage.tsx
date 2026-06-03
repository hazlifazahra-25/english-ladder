import { ladderJourney } from "../data/learningData";
import { StoryUnit } from "../types";

interface JourneyMapPageProps {
  stories: StoryUnit[];
  completedStoryIds: string[];
}

function JourneyMapPage({ stories, completedStoryIds }: JourneyMapPageProps) {
  const firstOpenStory = stories.find(
    (story) => !completedStoryIds.includes(story.id) && story.status !== "locked"
  );
  const completionPercent = Math.round((completedStoryIds.length / stories.length) * 100);

  return (
    <div className="space-y-8">
      <section className="storybook-panel p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">Ladder Adventure</p>
            <h1 className="font-display text-4xl font-extrabold text-navy-900">Journey Map</h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold text-navy-700">
              English Ladder is a mastery-based path. Children move up only after understanding each story.
            </p>
          </div>
          <div className="rounded-3xl border border-sky-100 bg-white px-4 py-3 text-center">
            <p className="text-xs font-extrabold uppercase tracking-wide text-sky-600">Overall Journey</p>
            <p className="font-display text-3xl font-extrabold text-navy-900">{completionPercent}%</p>
            <p className="text-xs font-semibold text-navy-700">{completedStoryIds.length} of {stories.length} units</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          {ladderJourney.map((step, idx) => (
            <div key={step.id} className="rounded-story border border-sky-100 bg-white p-5 text-center story-card">
              <div className="text-4xl">{step.icon}</div>
              <p className="mt-2 font-display text-lg font-bold text-navy-900">{step.label}</p>
              {idx < ladderJourney.length - 1 ? (
                <div className="mx-auto mt-3 h-2 w-20 rounded-full bg-gradient-to-r from-sky-300 to-meadow-300" />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="storybook-panel p-6 sm:p-8">
        <h2 className="font-display text-3xl font-extrabold text-navy-900">Mastery Progression</h2>
        <p className="mt-2 text-sm font-semibold text-navy-700">
          Future stories remain locked until previous stories are completed.
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {stories.map((story) => {
            const completed = completedStoryIds.includes(story.id);
            const current = firstOpenStory?.id === story.id && !completed;
            return (
              <article
                key={story.id}
                className="rounded-story border border-sky-100 bg-white p-4 shadow-soft story-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wide text-sky-600">
                      Unit {story.unitNumber} - {story.level}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold text-navy-900">{story.unitTitle}</h3>
                    <p className="mt-1 text-sm font-semibold text-navy-700">{story.title}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-extrabold ${
                      completed
                        ? "bg-meadow-200 text-navy-900"
                        : current
                          ? "bg-sky-100 text-sky-700"
                          : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {completed ? "Completed ✅" : current ? "Current 🔵" : "Locked 🔒"}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default JourneyMapPage;
