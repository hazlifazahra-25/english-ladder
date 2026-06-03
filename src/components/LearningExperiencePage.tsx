import { useEffect, useMemo, useState } from "react";
import { Companion, LearningStep, StoryQuestion, StoryUnit, VocabularyWord } from "../types";
import StoryIllustration from "./StoryIllustration";
import washingHand from "../assets/washing hand.png";

interface LearningExperiencePageProps {
  story: StoryUnit;
  companion: Companion;
  onBackToLibrary: () => void;
  onStoryComplete: (storyId: string) => void;
  onContinueJourney: () => void;
}

interface FeedbackState {
  kind: "correct" | "wrong";
  explanation: string;
  xp?: number;
}

const TARGET_CORRECT_ANSWERS = 5;
const MIN_REFLECTION_WORDS = 4;

function LearningExperiencePage({
  story,
  companion,
  onBackToLibrary,
  onStoryComplete,
  onContinueJourney
}: LearningExperiencePageProps) {
  const [learningStep, setLearningStep] = useState<LearningStep>("story");
  const [heartsLeft, setHeartsLeft] = useState(5);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [sessionXp, setSessionXp] = useState(0);
  const [askedQuestionIds, setAskedQuestionIds] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<StoryQuestion | null>(null);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [reflectionText, setReflectionText] = useState("");
  const [selectedVocabulary, setSelectedVocabulary] = useState<VocabularyWord | null>(null);

  const vocabularyLookup = useMemo(() => {
    const map = new Map<string, VocabularyWord>();
    story.vocabulary.forEach((item) => {
      map.set(item.word.toLowerCase(), item);
    });
    return map;
  }, [story.vocabulary]);

  const reflectionWordCount = useMemo(() => {
    const words = reflectionText.trim().split(/\s+/).filter(Boolean);
    return words.length;
  }, [reflectionText]);

  const reflectionReady = reflectionWordCount >= MIN_REFLECTION_WORDS;

  const resetSession = () => {
    setLearningStep("story");
    setHeartsLeft(5);
    setCorrectAnswers(0);
    setSessionXp(0);
    setAskedQuestionIds([]);
    setCurrentQuestion(null);
    setFeedback(null);
    setReflectionText("");
    setSelectedVocabulary(null);
  };

  useEffect(() => {
    resetSession();
  }, [story.id]);

  const pickRandomQuestion = (excludeIds: string[], avoidId?: string) => {
    let pool = story.questions.filter((question) => {
      if (avoidId && question.id === avoidId) {
        return false;
      }
      return !excludeIds.includes(question.id);
    });

    if (!pool.length) {
      pool = story.questions.filter((question) => (avoidId ? question.id !== avoidId : true));
    }

    if (!pool.length) {
      return null;
    }

    return pool[Math.floor(Math.random() * pool.length)];
  };

  const startQuestions = () => {
    const firstQuestion = pickRandomQuestion([]);
    if (!firstQuestion) {
      return;
    }
    setHeartsLeft(5);
    setCorrectAnswers(0);
    setSessionXp(0);
    setAskedQuestionIds([]);
    setFeedback(null);
    setCurrentQuestion(firstQuestion);
    setLearningStep("questions");
  };

  const handleAnswer = (option: string) => {
    if (!currentQuestion || feedback || learningStep !== "questions") {
      return;
    }

    const nextAsked = [...askedQuestionIds, currentQuestion.id];
    setAskedQuestionIds(nextAsked);

    const isCorrect = option === currentQuestion.answer;
    if (isCorrect) {
      setFeedback({
        kind: "correct",
        explanation: currentQuestion.explanation,
        xp: 10
      });
      return;
    }

    const nextHearts = heartsLeft - 1;
    setHeartsLeft(nextHearts);

    if (nextHearts <= 0) {
      setLearningStep("retry");
      setFeedback(null);
      return;
    }

    const replacementQuestion = pickRandomQuestion(nextAsked, currentQuestion.id);
    setCurrentQuestion(replacementQuestion);
    setFeedback({
      kind: "wrong",
      explanation: currentQuestion.explanation
    });
  };

  const proceedAfterCorrect = () => {
    const nextCorrect = correctAnswers + 1;
    const earnedXp = feedback?.xp ?? 0;
    setCorrectAnswers(nextCorrect);
    setSessionXp((previous) => previous + earnedXp);
    setFeedback(null);

    if (nextCorrect >= TARGET_CORRECT_ANSWERS) {
      setLearningStep("reflection");
      return;
    }

    const nextQuestion = pickRandomQuestion(askedQuestionIds);
    if (!nextQuestion) {
      setLearningStep("reflection");
      return;
    }
    setCurrentQuestion(nextQuestion);
  };

  const proceedAfterWrong = () => {
    setFeedback(null);
  };

  const submitReflection = () => {
    if (!reflectionReady) {
      return;
    }
    setLearningStep("completion");
    onStoryComplete(story.id);
  };

  const readStoryAloud = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(story.passage.join(" "));
    utterance.rate = 0.9;
    utterance.pitch = 1.05;
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const renderStoryParagraph = (paragraph: string) => {
    return paragraph.split(" ").map((token, index) => {
      const cleaned = token.toLowerCase().replace(/[^a-z]/g, "");
      const vocab = vocabularyLookup.get(cleaned);

      if (!vocab) {
        return (
          <span key={`${token}-${index}`} className="mr-1">
            {token}
          </span>
        );
      }

      return (
        <button
          key={`${token}-${index}`}
          type="button"
          onClick={() => setSelectedVocabulary(vocab)}
          className="mr-1 rounded-lg bg-yellow-100 px-1 font-extrabold text-navy-900 underline decoration-dotted underline-offset-4 transition hover:bg-yellow-200"
          aria-label={`Open vocabulary meaning for ${vocab.word}`}
        >
          {token}
        </button>
      );
    });
  };

  return (
    <div className="space-y-8">
      <section className="storybook-panel p-6 sm:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBackToLibrary}
            className="rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-extrabold text-sky-700"
          >
            ← Back to Story Library
          </button>
          <div className="glass-pill px-4 py-2 text-sm font-extrabold text-navy-900">
            Companion: {companion.emoji} {companion.name}
          </div>
        </div>

        <div className="mb-5 grid gap-3 rounded-2xl border border-sky-100 bg-white p-4 sm:grid-cols-3">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wide text-sky-600">Story Quest</p>
            <p className="font-display text-2xl font-extrabold text-navy-900">Unit {story.unitNumber}</p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wide text-sky-600">Hearts</p>
            <p className="text-xl font-extrabold text-rose-600">{[...Array(5)].map((_, i) => (i < heartsLeft ? "❤️" : "🤍"))}</p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wide text-sky-600">Session XP</p>
            <p className="font-display text-2xl font-extrabold text-meadow-500">+{sessionXp}</p>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-sky-100 bg-sky-50 p-4">
          <p className="text-sm font-bold text-navy-800">
            {companion.emoji} {companion.name}:{" "}
            {learningStep === "questions" ? "Answer carefully and climb one step at a time." : companion.introLine}
          </p>
        </div>

        {learningStep === "story" ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
            <div className="overflow-hidden rounded-story">
 <img
  src={washingHand}
  alt="Tom Washing Hands"
  className="h-full w-full object-cover object-center"
 />
</div>
            <div className="soft-paper rounded-story border border-sky-100 p-5 sm:p-6">
              <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">
                Step 1 - Story Page
              </p>
              <h1 className="mt-2 font-display text-3xl font-extrabold text-navy-900">{story.title}</h1>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-extrabold">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">
                  Level {story.readingLevel}
                </span>
                <span className="rounded-full bg-cream-100 px-3 py-1 text-navy-800">
                  Value: {story.moralValue}
                </span>
              </div>
              <button
                type="button"
                onClick={readStoryAloud}
                className="mt-4 rounded-full bg-sky-500 px-4 py-2 text-xs font-extrabold text-white story-cta"
              >
                🔊 Audio Narration
              </button>
              <div className="mt-4 space-y-3 text-sm font-semibold leading-relaxed text-navy-800">
                {story.passage.map((paragraph, idx) => (
                  <p key={`paragraph-${idx}`}>{renderStoryParagraph(paragraph)}</p>
                ))}
              </div>
              <button
                type="button"
                onClick={startQuestions}
                className="mt-6 rounded-full bg-navy-800 px-5 py-3 text-sm font-extrabold text-white story-cta"
              >
                Continue to Questions
              </button>
            </div>
          </div>
        ) : null}

        {learningStep === "questions" ? (
          <div className="rounded-story border border-sky-100 bg-white p-5 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">
                  Step 2 - Question Page
                </p>
                <p className="font-display text-2xl font-extrabold text-navy-900">
                  Question {Math.min(correctAnswers + 1, TARGET_CORRECT_ANSWERS)} of {TARGET_CORRECT_ANSWERS}
                </p>
              </div>
              <p className="rounded-full bg-sky-100 px-3 py-2 text-xs font-extrabold text-sky-700">
                Mastery: {correctAnswers}/{TARGET_CORRECT_ANSWERS}
              </p>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-sky-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-meadow-300 transition-all"
                style={{ width: `${(correctAnswers / TARGET_CORRECT_ANSWERS) * 100}%` }}
              />
            </div>

            <div className="mt-6">
              {feedback?.kind === "correct" ? (
                <div className="rounded-story border border-meadow-300 bg-meadow-200/40 p-5">
                  <p className="font-display text-3xl font-extrabold text-navy-900">🎉 Great Job!</p>
                  <p className="mt-2 text-sm font-semibold text-navy-800">{feedback.explanation}</p>
                  <p className="mt-2 text-sm font-extrabold text-meadow-500">+{feedback.xp} XP</p>
                  <p className="mt-3 text-sm font-bold text-navy-700">{companion.cheerLine}</p>
                  <button
                    type="button"
                    onClick={proceedAfterCorrect}
                    className="mt-4 rounded-full bg-navy-800 px-5 py-2 text-sm font-extrabold text-white story-cta"
                  >
                    Continue
                  </button>
                </div>
              ) : null}

              {feedback?.kind === "wrong" ? (
                <div className="rounded-story border border-amber-300 bg-amber-50 p-5">
                  <p className="font-display text-3xl font-extrabold text-navy-900">😅 Almost There!</p>
                  <p className="mt-2 text-sm font-semibold text-navy-800">{feedback.explanation}</p>
                  <p className="mt-2 text-sm font-semibold text-navy-700">{companion.retryLine}</p>
                  <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-amber-700">
                    A different question from the same story is ready.
                  </p>
                  <button
                    type="button"
                    onClick={proceedAfterWrong}
                    className="mt-4 rounded-full bg-navy-800 px-5 py-2 text-sm font-extrabold text-white story-cta"
                  >
                    Try New Question
                  </button>
                </div>
              ) : null}

              {!feedback && currentQuestion ? (
                <div className="space-y-4">
                  <h2 className="font-display text-2xl font-bold text-navy-900">{currentQuestion.prompt}</h2>
                  <div className="grid gap-3">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleAnswer(option)}
                        className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-left text-sm font-bold text-navy-900 transition hover:border-sky-400 hover:bg-white"
                      >
                        <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-extrabold text-sky-700">
                          {String.fromCharCode(65 + index)}
                        </span>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        {learningStep === "retry" ? (
          <div className="rounded-story border border-rose-200 bg-rose-50 p-6 text-center">
            <p className="text-5xl">😢</p>
            <p className="mt-3 font-display text-3xl font-extrabold text-navy-900">
              Let's read the story again.
            </p>
            <p className="mt-2 text-sm font-semibold text-navy-700">You can do it!</p>
            <button
              type="button"
              onClick={resetSession}
              className="mt-5 rounded-full bg-navy-800 px-5 py-3 text-sm font-extrabold text-white story-cta"
            >
              Review Story
            </button>
          </div>
        ) : null}

        {learningStep === "reflection" ? (
          <div className="rounded-story border border-sky-100 bg-white p-6 sm:p-7">
            <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">Reflection Corner</p>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-navy-900">💭 Think About It</h2>
            <p className="mt-3 text-sm font-semibold text-navy-800">{story.reflectionPrompt}</p>
            <textarea
              value={reflectionText}
              onChange={(event) => setReflectionText(event.target.value)}
              rows={4}
              placeholder="Write 1-2 sentences..."
              className="mt-4 w-full rounded-2xl border border-sky-200 bg-sky-50 p-3 text-sm font-semibold text-navy-900 focus:border-sky-400 focus:outline-none"
            />
            <p className="mt-2 text-xs font-bold text-navy-700">
              {reflectionWordCount < MIN_REFLECTION_WORDS
                ? `Add at least ${MIN_REFLECTION_WORDS} words to continue.`
                : "Great reflection! Ready to complete."}
            </p>
            <button
              type="button"
              disabled={!reflectionReady}
              onClick={submitReflection}
              className="mt-4 rounded-full bg-sky-500 px-5 py-3 text-sm font-extrabold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Complete Story
            </button>
          </div>
        ) : null}

        {learningStep === "completion" ? (
          <div className="rounded-story border border-meadow-300 bg-gradient-to-br from-meadow-200/55 to-sky-100 p-6 text-center sm:p-8">
            <p className="font-display text-4xl font-extrabold text-navy-900">🎉 Story Completed!</p>
            <div className="mx-auto mt-5 max-w-xl rounded-story border border-white/70 bg-white/80 p-5">
              <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">You Learned</p>
              <p className="mt-2 text-sm font-bold text-navy-800">✅ Reading Comprehension</p>
              <p className="text-sm font-bold text-navy-800">✅ {story.moralValue}</p>
              <p className="mt-4 text-sm font-extrabold uppercase tracking-wide text-sky-600">
                Badge Earned
              </p>
              <p className="mt-1 font-display text-2xl font-extrabold text-navy-900">
                {story.badgeEmoji} {story.badgeName}
              </p>
              <p className="mt-3 text-lg font-extrabold text-meadow-500">XP Earned: +{story.xp + sessionXp} XP</p>
            </div>
            <button
              type="button"
              onClick={onContinueJourney}
              className="mt-6 rounded-full bg-navy-800 px-6 py-3 text-sm font-extrabold text-white story-cta"
            >
              Continue Your Journey
            </button>
          </div>
        ) : null}
      </section>

      {selectedVocabulary ? (
        <section className="storybook-panel p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wide text-sky-600">Vocabulary Highlight</p>
              <h3 className="mt-1 font-display text-3xl font-extrabold text-navy-900">
                {selectedVocabulary.word}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setSelectedVocabulary(null)}
              className="rounded-full bg-sky-100 px-4 py-2 text-xs font-extrabold text-sky-700"
            >
              Close
            </button>
          </div>
          <p className="mt-3 text-sm font-semibold text-navy-800">
            <span className="font-extrabold">Meaning:</span> {selectedVocabulary.meaning}
          </p>
          <p className="mt-2 text-sm font-semibold text-navy-800">
            <span className="font-extrabold">Example:</span> {selectedVocabulary.example}
          </p>
          <div className="mt-4 rounded-story border border-sky-100 bg-white p-4">
            <p className="text-xs font-extrabold uppercase tracking-wide text-sky-600">Illustration</p>
            <p className="mt-2 text-sm font-semibold text-navy-800">{selectedVocabulary.illustrationHint}</p>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default LearningExperiencePage;
