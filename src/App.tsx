import { useMemo, useState } from "react";
import AboutPage from "./components/AboutPage";
import CompanionSelector from "./components/CompanionSelector";
import HomePage from "./components/HomePage";
import JourneyMapPage from "./components/JourneyMapPage";
import LearningExperiencePage from "./components/LearningExperiencePage";
import ProgressPage from "./components/ProgressPage";
import StoryLibraryPage from "./components/StoryLibraryPage";
import SubscribePage from "./components/SubscribePage";
import TopNav from "./components/TopNav";
import { collectibleBadges, companions, storyUnits } from "./data/learningData";
import { PageId, StoryStatus } from "./types";

function App() {
  const [activePage, setActivePage] = useState<PageId>("home");
  const [selectedCompanionId, setSelectedCompanionId] = useState(companions[0].id);
  const [selectedStoryId, setSelectedStoryId] = useState(storyUnits[0].id);
  const [completedStoryIds, setCompletedStoryIds] = useState<string[]>(["unit-1"]);
  const [libraryView, setLibraryView] = useState<"library" | "learning">("library");

  const selectedCompanion = useMemo(
    () => companions.find((companion) => companion.id === selectedCompanionId) ?? companions[0],
    [selectedCompanionId]
  );

  const storiesWithProgress = useMemo(() => {
    return storyUnits.map((story, index) => {
      const isCompleted = completedStoryIds.includes(story.id);
      const previousStoryCompleted = index === 0 || completedStoryIds.includes(storyUnits[index - 1].id);
      return {
  ...story,
  status: (isCompleted
    ? "completed"
    : previousStoryCompleted
    ? "current"
    : "locked") as StoryStatus
};
    });
  }, [completedStoryIds]);

  const selectedStory = useMemo(() => {
    return storiesWithProgress.find((story) => story.id === selectedStoryId) ?? storiesWithProgress[0];
  }, [selectedStoryId, storiesWithProgress]);

  const currentStory = useMemo(() => {
    return storiesWithProgress.find((story) => story.status === "current") ?? storiesWithProgress[0];
  }, [storiesWithProgress]);

  const openLibrary = () => {
    setActivePage("library");
    setLibraryView("library");
  };

  const openLearning = (storyId: string) => {
    const targetStory = storiesWithProgress.find((story) => story.id === storyId);
    if (!targetStory || targetStory.status === "locked") {
      return;
    }
    setSelectedStoryId(storyId);
    setActivePage("library");
    setLibraryView("learning");
  };

  const handleStoryComplete = (storyId: string) => {
    setCompletedStoryIds((previous) => {
      if (previous.includes(storyId)) {
        return previous;
      }
      const completed = [...previous, storyId];
      return completed;
    });
  };

  const renderPage = () => {
    if (activePage === "home") {
      return (
        <div className="space-y-8">
          <HomePage
            stories={storiesWithProgress}
            onStartLearning={() => openLearning(selectedStoryId)}
            onExploreStories={openLibrary}
            onOpenJourney={() => setActivePage("journey")}
            onOpenParents={() => setActivePage("progress")}
            onOpenSubscribe={() => setActivePage("subscribe")}
            onPreviewStory={openLearning}
          />
          <CompanionSelector
            companions={companions}
            selectedCompanionId={selectedCompanion.id}
            onSelectCompanion={setSelectedCompanionId}
          />
        </div>
      );
    }

    if (activePage === "library") {
      return libraryView === "library" ? (
        <StoryLibraryPage
          stories={storiesWithProgress}
          selectedStoryId={selectedStory.id}
          completedStoryIds={completedStoryIds}
          onSelectStory={setSelectedStoryId}
          onReadStory={openLearning}
        />
      ) : (
        <LearningExperiencePage
          story={selectedStory}
          companion={selectedCompanion}
          onBackToLibrary={() => setLibraryView("library")}
          onStoryComplete={handleStoryComplete}
          onContinueJourney={() => {
            setLibraryView("library");
            setActivePage("journey");
          }}
        />
      );
    }

    if (activePage === "journey") {
      return <JourneyMapPage stories={storiesWithProgress} completedStoryIds={completedStoryIds} />;
    }

    if (activePage === "progress") {
      return <ProgressPage badges={collectibleBadges} completedStoryIds={completedStoryIds} />;
    }

    if (activePage === "about") {
      return <AboutPage />;
    }

    return <SubscribePage />;
  };

  return (
    <div className="min-h-screen">
      <TopNav activePage={activePage} onPageChange={setActivePage} />
      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section className="mb-6 rounded-story border border-sky-100 bg-white/70 p-4 shadow-soft page-enter">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-bold text-navy-800 sm:text-base">
              {selectedCompanion.emoji} <span className="font-extrabold">{selectedCompanion.name}</span>:{" "}
              {activePage === "library" && libraryView === "learning"
                ? selectedCompanion.cheerLine
                : selectedCompanion.introLine}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-sky-100 px-3 py-2 text-xs font-extrabold text-sky-700">
                Current Story: Unit {currentStory.unitNumber}
              </span>
              <button
                type="button"
                onClick={() => openLearning(currentStory.id)}
                className="rounded-full bg-sky-500 px-4 py-2 text-xs font-extrabold text-white"
              >
                Continue Learning
              </button>
              <button
                type="button"
                onClick={() => setActivePage("home")}
                className="rounded-full bg-sky-100 px-4 py-2 text-xs font-extrabold text-sky-700"
              >
                Back to Home
              </button>
            </div>
          </div>
        </section>
        <div className="page-enter">{renderPage()}</div>
      </main>

      <footer className="border-t border-sky-100 bg-white/85 py-5">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 text-sm font-bold text-navy-700 sm:px-6 lg:px-8">
          <p>English Ladder - Climb, Read, and Grow.</p>
          <p>Every Story Helps You Grow.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
