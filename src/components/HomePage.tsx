import { featuredStoryHighlights, ladderJourney } from "../data/learningData";
import { StoryUnit } from "../types";
import StoryIllustration from "./StoryIllustration";
import heroImage from "../assets/cover web.png";

interface HomePageProps {
  onStartLearning: () => void;
  onExploreStories: () => void;
  onOpenParents: () => void;
  onOpenSubscribe: () => void;
  onOpenJourney: () => void;
  onPreviewStory: (storyId: string) => void;
  stories: StoryUnit[];
}

function HomePage({
  onStartLearning,
  onExploreStories,
  onOpenParents,
  onOpenSubscribe,
  onOpenJourney,
  onPreviewStory,
  stories
}: HomePageProps) {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="storybook-panel relative overflow-hidden p-8 sm:p-10 lg:p-12">
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-52 w-52 rounded-full bg-meadow-200/45 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <span className="glass-pill inline-flex items-center gap-2 px-4 py-2 text-sm font-extrabold text-sky-700">
              📖 Premium Story-Based English Reading
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-navy-900 sm:text-5xl">
              Climb, Read, and Grow.
            </h1>
            <p className="max-w-xl text-base font-semibold leading-relaxed text-navy-700 sm:text-lg">
              Learn English, build good habits, and discover meaningful stories through fun reading
              adventures.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onStartLearning}
                className="story-cta rounded-full bg-sky-500 px-6 py-3 text-sm font-extrabold text-white"
              >
                Start Learning
              </button>
              <button
                type="button"
                onClick={onExploreStories}
                className="story-cta rounded-full border border-sky-300 bg-white px-6 py-3 text-sm font-extrabold text-navy-900"
              >
                Explore Stories
              </button>
            </div>
            <p className="text-sm font-bold text-sky-700">Every Story Helps You Grow.</p>
            <div className="flex flex-wrap gap-2 text-xs font-extrabold">
              <span className="rounded-full bg-white/80 px-3 py-2 text-navy-800">Ages 7-12</span>
              <span className="rounded-full bg-white/80 px-3 py-2 text-navy-800">Reading + Character</span>
              <span className="rounded-full bg-white/80 px-3 py-2 text-navy-800">Mastery Journey</span>
            </div>
          </div>
         <div className="animate-floaty rounded-story border border-white/80 bg-gradient-to-br from-sky-100 via-white to-meadow-100 p-5 shadow-story">
  <img
    src={heroImage}
    alt="English Ladder Hero"
    className="w-full rounded-story"
  />
</div>


</div>

</section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Stories in Library", value: "80+" },
          { label: "Character Values", value: "12" },
          { label: "Weekly Reading Goals", value: "5/7" }
        ].map((stat) => (
          <article key={stat.label} className="storybook-panel p-5 text-center">
            <p className="text-xs font-extrabold uppercase tracking-wide text-sky-600">{stat.label}</p>
            <p className="mt-2 font-display text-4xl font-extrabold text-navy-900">{stat.value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            emoji: "📖",
            title: "Read Stories",
            description: "Learn English through illustrated stories."
          },
          {
            emoji: "❤️",
            title: "Learn Values",
            description: "Discover kindness, honesty, responsibility, and more."
          },
          {
            emoji: "🏆",
            title: "Earn Rewards",
            description: "Unlock badges, achievements, and new adventures."
          }
        ].map((feature) => (
          <article key={feature.title} className="storybook-panel story-card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
              {feature.emoji}
            </div>
            <h3 className="font-display text-2xl font-extrabold text-navy-900">{feature.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-navy-700">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="storybook-panel p-6 sm:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-navy-900">Featured Stories</h2>
            <p className="text-sm font-semibold text-navy-700">
              Illustrated adventures that teach language and life values together.
            </p>
          </div>
          <button
            type="button"
            onClick={onExploreStories}
            className="rounded-full bg-sky-100 px-4 py-2 text-sm font-extrabold text-sky-700 transition hover:bg-sky-200"
          >
            Browse All Stories
          </button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {featuredStoryHighlights.map((story) => {
            const linkedStory = stories.find((item) => item.title === story.title);
            return (
              <article key={story.id} className="rounded-story border border-sky-100 bg-white p-4 shadow-soft story-card">
                <StoryIllustration
                  emoji={story.emoji}
                  scene={story.scene}
                  gradient={story.gradient}
                  compact
                />
                <div className="mt-4 space-y-2">
                  <h3 className="font-display text-xl font-bold text-navy-900">{story.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs font-extrabold">
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">
                      Level {story.readingLevel}
                    </span>
                    <span className="rounded-full bg-meadow-200 px-3 py-1 text-navy-900">
                      Value: {story.value}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="story-cta rounded-full bg-navy-800 px-4 py-2 text-xs font-extrabold text-white"
                    onClick={() => onPreviewStory(linkedStory?.id ?? "unit-1")}
                  >
                    Preview Story
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="storybook-panel p-6 sm:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-navy-900">Learning Journey Preview</h2>
            <p className="text-sm font-semibold text-navy-700">
              This ladder adventure map shows how children grow step by step.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenJourney}
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-extrabold text-white"
          >
            Open Journey Map
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-4">
          {ladderJourney.map((step, index) => (
            <div
              key={step.id}
              className="relative rounded-story border border-sky-100 bg-white p-4 text-center story-card"
            >
              <p className="text-3xl">{step.icon}</p>
              <p className="mt-2 font-display text-lg font-bold text-navy-900">{step.label}</p>
              {index < ladderJourney.length - 1 ? (
                <div className="mx-auto mt-3 h-2 w-20 rounded-full bg-gradient-to-r from-sky-300 to-meadow-300" />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="storybook-panel p-7 sm:p-9">
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-navy-900">
              Built for Children. Trusted by Parents.
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-navy-700">
              Track your child's reading progress, earned badges, completed stories, and character
              development with clear weekly insights and measurable learning outcomes.
            </p>
            <button
              type="button"
              onClick={onOpenParents}
              className="mt-5 rounded-full bg-navy-800 px-5 py-3 text-sm font-extrabold text-white"
            >
              View Parent Features
            </button>
          </div>
          <div className="rounded-story border border-sky-100 bg-white p-4">
            <p className="text-sm font-extrabold uppercase tracking-wide text-sky-700">Parent Snapshot</p>
            <div className="mt-3 space-y-3 text-sm font-semibold text-navy-800">
              <div className="flex items-center justify-between rounded-2xl bg-cream-50 px-4 py-3">
                <span>Stories Completed</span>
                <strong>12</strong>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-cream-50 px-4 py-3">
                <span>Reading Accuracy</span>
                <strong>86%</strong>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-cream-50 px-4 py-3">
                <span>Values Learned</span>
                <strong>4</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="storybook-panel p-7 sm:p-9">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-3xl font-extrabold text-navy-900">Subscription Preview</h2>
          <button
            type="button"
            onClick={onOpenSubscribe}
            className="rounded-full bg-sky-100 px-4 py-2 text-sm font-extrabold text-sky-700"
          >
            View Full Plans
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-story border border-sky-100 bg-white p-6">
            <p className="font-display text-2xl font-bold text-navy-900">FREE PLAN</p>
            <p className="mt-2 text-3xl font-extrabold text-sky-700">Rp0</p>
            <ul className="mt-4 space-y-2 text-sm font-semibold text-navy-700">
              <li>- Limited stories</li>
              <li>- Basic feedback</li>
              <li>- Basic badges</li>
            </ul>
          </article>
          <article className="rounded-story border border-sky-300 bg-gradient-to-br from-sky-50 to-cream-50 p-6 shadow-soft">
            <p className="font-display text-2xl font-bold text-navy-900">PREMIUM PLAN</p>
            <p className="mt-2 text-3xl font-extrabold text-sky-700">Rp29.000/month</p>
            <p className="text-sm font-bold text-navy-700">or Rp299.000/year</p>
            <ul className="mt-4 space-y-2 text-sm font-semibold text-navy-700">
              <li>- Full story library</li>
              <li>- Detailed explanations</li>
              <li>- Parent progress reports</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
