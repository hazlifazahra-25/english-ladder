import { useMemo, useState } from "react";
import { StoryUnit } from "../types";
import StoryIllustration from "./StoryIllustration";
import tomWashing from "../assets/tom washing.png";

interface StoryLibraryPageProps {
  stories: StoryUnit[];
  selectedStoryId: string;
  onSelectStory: (storyId: string) => void;
  onReadStory: (storyId: string) => void;
  completedStoryIds: string[];
}

function StoryLibraryPage({
  stories,
  selectedStoryId,
  onSelectStory,
  onReadStory,
  completedStoryIds
}: StoryLibraryPageProps) {
  const [levelFilter, setLevelFilter] = useState<"all" | "A1" | "A2">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "current" | "locked">("all");

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const completed = completedStoryIds.includes(story.id);
      const effectiveStatus = completed ? "completed" : story.status;
      const levelMatch = levelFilter === "all" || story.level === levelFilter;
      const statusMatch = statusFilter === "all" || effectiveStatus === statusFilter;
      return levelMatch && statusMatch;
    });
  }, [stories, completedStoryIds, levelFilter, statusFilter]);

  return (
    <div className="space-y-8">
      <section className="storybook-panel p-6 sm:p-8">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">Story Library</p>
            <h1 className="font-display text-4xl font-extrabold text-navy-900">Collect Every Story</h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold text-navy-700">
              Unlock illustrated stories, discover values, and build your English level one story at a
              time.
            </p>
          </div>
          <div className="glass-pill px-4 py-2 text-sm font-extrabold text-navy-800">
            {completedStoryIds.length} Completed
          </div>
        </div>
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wide text-sky-600">Filter:</span>
          {(["all", "A1", "A2"] as const).map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setLevelFilter(level)}
              className={`rounded-full px-3 py-1 text-xs font-extrabold ${
                levelFilter === level ? "bg-sky-500 text-white" : "bg-sky-100 text-sky-700"
              }`}
            >
              {level === "all" ? "All Levels" : level}
            </button>
          ))}
          {(["all", "completed", "current", "locked"] as const).map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setStatusFilter(status)}
              className={`rounded-full px-3 py-1 text-xs font-extrabold ${
                statusFilter === status ? "bg-navy-800 text-white" : "bg-cream-100 text-navy-700"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredStories.map((story) => {
            const completed = completedStoryIds.includes(story.id);
            const locked = story.status === "locked" && !completed;
            const current = story.status === "current" && !completed;
            const selected = selectedStoryId === story.id;
            return (
              <article
                key={story.id}
                className={`relative rounded-story border bg-white p-4 shadow-soft transition story-card ${
                  selected ? "border-sky-400" : "border-sky-100"
                }`}
              >
                {locked ? (
                  <div className="absolute inset-0 z-20 flex items-center justify-center rounded-story bg-navy-900/52">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-extrabold text-navy-900">
                      🔒 Locked
                    </span>
                  </div>
                ) : null}
               <div className="overflow-hidden rounded-story shadow-soft">
 <img
  src={tomWashing}
  alt="The Boy Who Didn't Wash His Hands"
  className="h-72 w-full object-cover transition duration-300 hover:scale-105"
/>
</div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-sky-600">
                      Unit {story.unitNumber} - {story.level}
                    </p>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-extrabold ${
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
                  <h3 className="font-display text-xl font-bold text-navy-900">{story.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs font-extrabold">
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">
                      Level: {story.readingLevel}
                    </span>
                    <span className="rounded-full bg-cream-100 px-3 py-1 text-navy-800">
                      Value: {story.moralValue}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => onSelectStory(story.id)}
                      className="story-cta rounded-full border border-sky-200 px-4 py-2 text-xs font-extrabold text-sky-700"
                    >
                      Select
                    </button>
                    <button
                      type="button"
                      disabled={locked}
                      onClick={() => onReadStory(story.id)}
                      className="story-cta rounded-full bg-navy-800 px-4 py-2 text-xs font-extrabold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                      Read Story
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {!filteredStories.length ? (
          <div className="mt-5 rounded-2xl border border-sky-100 bg-white p-5 text-center text-sm font-bold text-navy-700">
            No stories in this filter yet. Try another level or status.
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default StoryLibraryPage;
