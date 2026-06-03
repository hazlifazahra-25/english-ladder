import { useMemo, useState } from "react";

function SubscribePage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const premiumPrice = useMemo(() => {
    return billing === "monthly" ? "Rp29.000/month" : "Rp299.000/year";
  }, [billing]);

  return (
    <div className="space-y-8">
      <section className="storybook-panel p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">Subscription</p>
            <h1 className="font-display text-4xl font-extrabold text-navy-900">Choose Your Learning Plan</h1>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-relaxed text-navy-700">
              Beautifully designed plans for families who want children to read consistently and build positive
              values through meaningful stories.
            </p>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-white p-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`rounded-xl px-3 py-2 text-xs font-extrabold ${
                  billing === "monthly" ? "bg-sky-500 text-white" : "bg-sky-100 text-sky-700"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling("yearly")}
                className={`rounded-xl px-3 py-2 text-xs font-extrabold ${
                  billing === "yearly" ? "bg-sky-500 text-white" : "bg-sky-100 text-sky-700"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="storybook-panel p-6 sm:p-8 story-card">
          <p className="font-display text-2xl font-extrabold text-navy-900">FREE PLAN</p>
          <p className="mt-2 text-4xl font-extrabold text-sky-700">Rp0</p>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-navy-700">
            <li>- Limited stories</li>
            <li>- Basic feedback</li>
            <li>- Basic badges</li>
          </ul>
          <button type="button" className="mt-6 rounded-full bg-sky-100 px-5 py-3 text-sm font-extrabold text-sky-700">
            Start Free
          </button>
        </article>

        <article className="rounded-story border-2 border-sky-300 bg-gradient-to-br from-sky-50 via-white to-cream-50 p-6 shadow-story sm:p-8 story-card">
          <p className="inline-flex rounded-full bg-sky-500 px-3 py-1 text-xs font-extrabold text-white">
            Most Loved by Parents
          </p>
          <p className="mt-3 font-display text-2xl font-extrabold text-navy-900">PREMIUM PLAN</p>
          <p className="mt-2 text-4xl font-extrabold text-sky-700">{premiumPrice}</p>
          <p className="text-sm font-bold text-navy-700">Full access to English Ladder premium journey</p>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-navy-700">
            <li>- Full story library</li>
            <li>- Detailed explanations</li>
            <li>- Unlimited practice</li>
            <li>- Parent progress reports</li>
            <li>- Exclusive badges</li>
            <li>- Monthly new stories</li>
          </ul>
          <div className="mt-4 rounded-2xl border border-meadow-200 bg-meadow-200/40 p-3 text-xs font-bold text-navy-900">
            Save more with yearly billing and unlock exclusive seasonal story packs.
          </div>
          <button type="button" className="mt-6 rounded-full bg-sky-500 px-5 py-3 text-sm font-extrabold text-white">
            Upgrade to Premium
          </button>
        </article>
      </section>
    </div>
  );
}

export default SubscribePage;
