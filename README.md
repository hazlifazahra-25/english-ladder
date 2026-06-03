# English Ladder Prototype

Premium story-based English reading startup prototype for children (7-12) built with:

- React
- TypeScript
- Tailwind CSS

## Run

1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev`
3. Build production output:
   - `npm run build`

## Product Scope Implemented

- Story-first home page with hero, featured stories, journey preview, parent section, and subscription preview
- Second-pass premium polish: richer storybook visual system, animated cards, and upgraded navigation flow
- Companion selection: Luna, Finn, Benny, Olive
- Story Library with collectible cards, reading levels, moral values, completion states, and lock states
- Learning flow:
  - Step 1: Story page first (no questions)
  - Step 2: Question page with progress and heart system
  - Correct and wrong feedback states
  - Different replacement question after wrong answer
  - Five-mistake retry gate back to story
  - Reflection corner
  - Story completion celebration, badge, and XP
- Vocabulary highlight system with meaning and visual hint panel
- Ladder journey map with mastery progression locks
- Parent dashboard with progress metrics and values learned
- Subscription page with Free and Premium plans

## Key Files

- `src/App.tsx`
- `src/components/HomePage.tsx`
- `src/components/StoryLibraryPage.tsx`
- `src/components/LearningExperiencePage.tsx`
- `src/components/JourneyMapPage.tsx`
- `src/components/ProgressPage.tsx`
- `src/components/SubscribePage.tsx`
- `src/data/learningData.ts`
