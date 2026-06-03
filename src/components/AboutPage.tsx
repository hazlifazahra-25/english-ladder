function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="storybook-panel p-6 sm:p-8">
        <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">About English Ladder</p>
        <h1 className="font-display text-4xl font-extrabold text-navy-900">
          A Magical Reading Adventure with Purpose
        </h1>
        <p className="mt-3 max-w-3xl text-base font-semibold leading-relaxed text-navy-700">
          English Ladder is a premium story-based English reading platform for children aged 7-12. We
          combine illustrated stories, character education, and mastery-based progression so every child can
          grow in language, confidence, and values.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-extrabold">
          <span className="rounded-full bg-sky-100 px-3 py-2 text-sky-700">Safe Child-Friendly Design</span>
          <span className="rounded-full bg-sky-100 px-3 py-2 text-sky-700">Mastery-Based Path</span>
          <span className="rounded-full bg-sky-100 px-3 py-2 text-sky-700">Parent Progress Visibility</span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            emoji: "📖",
            title: "Story-Based Learning",
            description:
              "Children learn vocabulary and comprehension through meaningful narratives, not worksheets."
          },
          {
            emoji: "❤️",
            title: "Character Education",
            description:
              "Each story includes a moral value such as honesty, responsibility, kindness, and teamwork."
          },
          {
            emoji: "🪜",
            title: "Mastery Journey",
            description:
              "Learners unlock each level step-by-step, building real reading habits over time."
          }
        ].map((item) => (
          <article key={item.title} className="storybook-panel p-6 story-card">
            <p className="text-3xl">{item.emoji}</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-navy-900">{item.title}</h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-navy-700">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="storybook-panel p-6 sm:p-8">
        <h2 className="font-display text-3xl font-extrabold text-navy-900">Designed for Real Learning Outcomes</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Reading Habit", value: "Daily Story Goals" },
            { label: "Comprehension", value: "Question-Based Mastery" },
            { label: "Character Growth", value: "Reflection + Values" }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-xs font-extrabold uppercase tracking-wide text-sky-600">{item.label}</p>
              <p className="mt-2 font-display text-xl font-bold text-navy-900">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
