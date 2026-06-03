export type PageId =
  | "home"
  | "library"
  | "journey"
  | "progress"
  | "about"
  | "subscribe";

export type StoryStatus = "completed" | "current" | "locked";

export type LearningStep =
  | "story"
  | "questions"
  | "reflection"
  | "completion"
  | "retry";

export interface Companion {
  id: string;
  name: string;
  animal: string;
  emoji: string;
  colorClass: string;
  cheerLine: string;
  retryLine: string;
  introLine: string;
}

export interface VocabularyWord {
  word: string;
  meaning: string;
  example: string;
  illustrationHint: string;
}

export interface StoryQuestion {
  id: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface StoryUnit {
  id: string;
  unitNumber: number;
  level: "A1" | "A2";
  unitTitle: string;
  title: string;
  moralValue: string;
  readingLevel: "A1" | "A2";
  status: StoryStatus;
  coverEmoji: string;
  coverScene: string;
  coverGradient: string;
  passage: string[];
  vocabulary: VocabularyWord[];
  questions: StoryQuestion[];
  reflectionPrompt: string;
  badgeName: string;
  badgeEmoji: string;
  xp: number;
}

export interface Badge {
  id: string;
  emoji: string;
  name: string;
  description: string;
}
