import { Badge, Companion, StoryUnit } from "../types";

export const companions: Companion[] = [
  {
    id: "luna",
    name: "Luna the Rabbit",
    animal: "Rabbit",
    emoji: "🐰",
    colorClass: "from-pink-100 to-rose-50",
    cheerLine: "Great job! Let's keep climbing the ladder!",
    retryLine: "That's okay. Let's try again together.",
    introLine: "I love helping careful readers discover new words."
  },
  {
    id: "finn",
    name: "Finn the Fox",
    animal: "Fox",
    emoji: "🦊",
    colorClass: "from-orange-100 to-amber-50",
    cheerLine: "Great job! Let's keep climbing the ladder!",
    retryLine: "That's okay. Let's try again together.",
    introLine: "I can guide you through clues hidden in every story."
  },
  {
    id: "benny",
    name: "Benny the Bear",
    animal: "Bear",
    emoji: "🐻",
    colorClass: "from-amber-100 to-yellow-50",
    cheerLine: "Great job! Let's keep climbing the ladder!",
    retryLine: "That's okay. Let's try again together.",
    introLine: "Slow and steady reading helps your English grow strong."
  },
  {
    id: "olive",
    name: "Olive the Owl",
    animal: "Owl",
    emoji: "🦉",
    colorClass: "from-purple-100 to-indigo-50",
    cheerLine: "Great job! Let's keep climbing the ladder!",
    retryLine: "That's okay. Let's try again together.",
    introLine: "Let's think deeply and read with wise curiosity."
  }
];

export const ladderJourney = [
  { id: "village", label: "Starter Village", icon: "🏠" },
  { id: "forest", label: "Healthy Habits Forest", icon: "🌳" },
  { id: "park", label: "Friendship Park", icon: "🎈" },
  { id: "castle", label: "Kindness Castle", icon: "🏰" }
];

export const featuredStoryHighlights = [
  {
    id: "highlight-1",
    title: "The Boy Who Didn't Wash His Hands",
    readingLevel: "A1",
    value: "Personal Hygiene",
    emoji: "🧼",
    scene: "A cheerful sink and bubbles remind Tom to wash before eating.",
    gradient: "from-cyan-200 to-sky-100"
  },
  {
    id: "highlight-2",
    title: "The Lost Balloon",
    readingLevel: "A1",
    value: "Perseverance",
    emoji: "🎈",
    scene: "A red balloon floats over the park while two friends search together.",
    gradient: "from-rose-200 to-orange-100"
  },
  {
    id: "highlight-3",
    title: "My Puppy Max",
    readingLevel: "A1",
    value: "Responsibility",
    emoji: "🐶",
    scene: "A child feeds and brushes a playful puppy named Max.",
    gradient: "from-lime-200 to-emerald-100"
  },
  {
    id: "highlight-4",
    title: "Grandma's Grocery Bags",
    readingLevel: "A2",
    value: "Kindness",
    emoji: "👵",
    scene: "A child helps Grandma carry heavy bags across the street.",
    gradient: "from-violet-200 to-fuchsia-100"
  }
];

export const storyUnits: StoryUnit[] = [
  {
    id: "unit-1",
    unitNumber: 1,
    level: "A1",
    unitTitle: "Healthy Habits",
    title: "The Boy Who Didn't Wash His Hands",
    moralValue: "Personal Hygiene",
    readingLevel: "A1",
    status: "completed",
    coverEmoji: "🧼",
    coverScene: "Tom learns that clean hands keep his body healthy and strong.",
    coverGradient: "from-cyan-200 to-blue-100",
    passage: [
      "Tom came home from school and ran to the kitchen. He was very hungry.",
      "His mother said, \"Tom, wash your hands before you eat.\" Tom did not listen. He grabbed his sandwich and ate quickly.",
      "In the evening, Tom felt sick. His stomach hurt, and he looked pale.",
      "His mother gave him warm water and said, \"Dirty hands can carry germs.\" Tom felt sorry.",
      "The next day, Tom washed his hands with soap before breakfast, lunch, and dinner. Soon, he felt better and smiled.",
      "Tom learned a healthy habit: clean hands help us stay strong."
    ],
    vocabulary: [
      {
        word: "germs",
        meaning: "very tiny things that can make us sick",
        example: "Soap removes germs from our hands.",
        illustrationHint: "Child washing hands with bubbles around a sink"
      },
      {
        word: "pale",
        meaning: "looking less healthy because you are sick or tired",
        example: "Tom looked pale when his stomach hurt.",
        illustrationHint: "Boy with tired face sitting on a couch"
      },
      {
        word: "habit",
        meaning: "something you do again and again",
        example: "Washing hands before meals is a good habit.",
        illustrationHint: "Calendar with repeating check marks and soap icon"
      },
      {
        word: "healthy",
        meaning: "good for your body and mind",
        example: "Healthy habits help children grow.",
        illustrationHint: "Child smiling with fruit and water bottle"
      },
      {
        word: "honest",
        meaning: "telling the truth",
        example: "An honest child returns a lost wallet.",
        illustrationHint: "Child returning a lost wallet to an adult"
      }
    ],
    questions: [
      {
        id: "u1-q1",
        prompt: "Why did Tom feel sick in the evening?",
        options: [
          "He skipped school",
          "He did not wash his hands before eating",
          "He played outside too long",
          "He forgot his homework"
        ],
        answer: "He did not wash his hands before eating",
        explanation:
          "Tom became sick because he did not wash his hands before eating."
      },
      {
        id: "u1-q2",
        prompt: "What did Tom's mother tell him before he ate?",
        options: [
          "Drink cold soda",
          "Take a nap",
          "Wash your hands",
          "Call your friend"
        ],
        answer: "Wash your hands",
        explanation:
          "Tom's mother reminded him to wash his hands before eating."
      },
      {
        id: "u1-q3",
        prompt: "What can dirty hands carry?",
        options: ["Germs", "Books", "Toys", "Rainbows"],
        answer: "Germs",
        explanation:
          "Dirty hands can carry germs, and germs may cause sickness."
      },
      {
        id: "u1-q4",
        prompt: "What did Tom do the next day?",
        options: [
          "He skipped breakfast",
          "He washed his hands before meals",
          "He threw away the soap",
          "He stayed in bed all day"
        ],
        answer: "He washed his hands before meals",
        explanation:
          "Tom changed his behavior and washed his hands before every meal."
      },
      {
        id: "u1-q5",
        prompt: "What is the main value of this story?",
        options: ["Personal Hygiene", "Teamwork", "Honesty", "Friendship"],
        answer: "Personal Hygiene",
        explanation:
          "The story teaches children to care for their health by washing hands."
      },
      {
        id: "u1-q6",
        prompt: "Which sentence best matches the story ending?",
        options: [
          "Tom ignored his mother again",
          "Tom never ate dinner again",
          "Tom learned a healthy habit and felt better",
          "Tom moved to a new school"
        ],
        answer: "Tom learned a healthy habit and felt better",
        explanation:
          "At the end, Tom practiced clean habits and became healthy again."
      },
      {
        id: "u1-q7",
        prompt: "When should Tom wash his hands?",
        options: [
          "Only on weekends",
          "Before meals",
          "Only after sports",
          "Only before sleep"
        ],
        answer: "Before meals",
        explanation: "Washing hands before meals helps stop germs from entering the body."
      },
      {
        id: "u1-q8",
        prompt: "How did Tom feel after following healthy habits?",
        options: ["Worse", "Better", "Angry", "Sleepy all day"],
        answer: "Better",
        explanation:
          "After washing his hands regularly, Tom felt better and smiled."
      }
    ],
    reflectionPrompt: "What healthy habits do you do every day?",
    badgeName: "Healthy Habits Hero",
    badgeEmoji: "🌟",
    xp: 50
  },
  {
    id: "unit-2",
    unitNumber: 2,
    level: "A1",
    unitTitle: "Sharing is Caring",
    title: "Emma and Her Toys",
    moralValue: "Sharing",
    readingLevel: "A1",
    status: "current",
    coverEmoji: "🧸",
    coverScene: "Emma learns joy when she shares her toy box with friends.",
    coverGradient: "from-pink-200 to-rose-100",
    passage: [
      "Emma loved her toy box. One day, her cousin Mia came to visit.",
      "Mia looked at the toys and smiled. Emma held the toys close and said, \"These are mine.\"",
      "Mia sat quietly. Emma noticed Mia's sad face.",
      "After lunch, Emma gave Mia a puzzle and a teddy bear.",
      "They played together, laughed, and built a big castle.",
      "Emma learned that sharing makes playtime happier for everyone."
    ],
    vocabulary: [
      {
        word: "quietly",
        meaning: "in a calm and soft way",
        example: "Mia sat quietly near the toy shelf.",
        illustrationHint: "Child sitting peacefully beside toy shelf"
      },
      {
        word: "sharing",
        meaning: "letting others use what you have",
        example: "Sharing toys can make everyone smile.",
        illustrationHint: "Two children exchanging toys happily"
      }
    ],
    questions: [
      {
        id: "u2-q1",
        prompt: "Why was Mia sad at first?",
        options: [
          "She wanted to go home",
          "Emma did not want to share toys",
          "She lost her bag",
          "She was hungry"
        ],
        answer: "Emma did not want to share toys",
        explanation:
          "Mia felt sad because Emma kept all the toys to herself at first."
      },
      {
        id: "u2-q2",
        prompt: "What happened after Emma shared?",
        options: [
          "They argued",
          "They played happily together",
          "Mia went to sleep",
          "The toys broke"
        ],
        answer: "They played happily together",
        explanation: "Sharing helped both children enjoy playtime together."
      },
      {
        id: "u2-q3",
        prompt: "What toys did Emma share with Mia?",
        options: ["A puzzle and a teddy bear", "A kite and a bike", "A drum and a flute", "A robot and a train"],
        answer: "A puzzle and a teddy bear",
        explanation: "Emma offered Mia a puzzle and a teddy bear."
      },
      {
        id: "u2-q4",
        prompt: "How did Emma feel after sharing?",
        options: ["Lonely", "Happy", "Sleepy", "Upset"],
        answer: "Happy",
        explanation: "Emma and Mia laughed together, so Emma felt happy."
      },
      {
        id: "u2-q5",
        prompt: "What value does this story teach?",
        options: ["Sharing", "Teamwork", "Honesty", "Punctuality"],
        answer: "Sharing",
        explanation: "The story teaches that sharing makes everyone happier."
      },
      {
        id: "u2-q6",
        prompt: "Which sentence matches the ending best?",
        options: [
          "Emma kept all toys to herself",
          "Mia went home sad",
          "They played and built a big castle together",
          "The toys were hidden"
        ],
        answer: "They played and built a big castle together",
        explanation: "By the end, both children played happily and built a castle."
      }
    ],
    reflectionPrompt: "How can you share with a friend at school?",
    badgeName: "Sharing Star",
    badgeEmoji: "💫",
    xp: 50
  },
  {
    id: "unit-3",
    unitNumber: 3,
    level: "A1",
    unitTitle: "Listening to Parents",
    title: "Tom and the Rainy Day",
    moralValue: "Respect",
    readingLevel: "A1",
    status: "locked",
    coverEmoji: "🌧️",
    coverScene: "Tom learns to listen when his mother warns about the rain.",
    coverGradient: "from-slate-300 to-sky-100",
    passage: [
      "Tom wanted to play outside. Dark clouds filled the sky.",
      "His mother said, \"Take your raincoat.\" Tom said, \"No need!\" and ran out.",
      "Soon heavy rain fell. Tom got wet and cold.",
      "He came home shivering. His mother dried his hair and made warm soup.",
      "Tom said, \"Next time I will listen.\""
    ],
    vocabulary: [
      {
        word: "shivering",
        meaning: "shaking because you are cold",
        example: "Tom was shivering after the heavy rain.",
        illustrationHint: "Boy wrapped in towel holding warm cup"
      }
    ],
    questions: [
      {
        id: "u3-q1",
        prompt: "What did Tom forget to bring?",
        options: ["His lunch box", "His raincoat", "His notebook", "His shoes"],
        answer: "His raincoat",
        explanation: "Tom ignored his mother's advice and forgot his raincoat."
      },
      {
        id: "u3-q2",
        prompt: "What was the weather like?",
        options: ["Sunny and dry", "Snowy", "Rainy with dark clouds", "Windy and hot"],
        answer: "Rainy with dark clouds",
        explanation: "The story says dark clouds appeared and heavy rain fell."
      },
      {
        id: "u3-q3",
        prompt: "How did Tom feel after playing in the rain?",
        options: ["Warm and excited", "Wet and cold", "Hungry and happy", "Dry and sleepy"],
        answer: "Wet and cold",
        explanation: "Tom came home wet, cold, and shivering."
      },
      {
        id: "u3-q4",
        prompt: "What did Tom's mother do when he came home?",
        options: ["She gave him ice cream", "She dried his hair and made warm soup", "She sent him outside", "She took his toys"],
        answer: "She dried his hair and made warm soup",
        explanation: "Tom's mother cared for him by drying his hair and giving warm soup."
      },
      {
        id: "u3-q5",
        prompt: "What lesson did Tom learn?",
        options: ["Run faster", "Stay awake all night", "Listen to parents", "Skip breakfast"],
        answer: "Listen to parents",
        explanation: "Tom promised he would listen next time."
      },
      {
        id: "u3-q6",
        prompt: "Which is the best title meaning of this story?",
        options: ["A Sunny Picnic", "Tom and the Rainy Day", "The Missing Pencil", "Grandma's Garden"],
        answer: "Tom and the Rainy Day",
        explanation: "The story centers on Tom's choice and what happened on a rainy day."
      }
    ],
    reflectionPrompt: "When did listening to your parents help you?",
    badgeName: "Respect Ranger",
    badgeEmoji: "🌦️",
    xp: 60
  },
  {
    id: "unit-4",
    unitNumber: 4,
    level: "A1",
    unitTitle: "Being Honest",
    title: "The Lost Pencil",
    moralValue: "Honesty",
    readingLevel: "A1",
    status: "locked",
    coverEmoji: "✏️",
    coverScene: "Nina finds a pencil and chooses to return it honestly.",
    coverGradient: "from-yellow-200 to-amber-100",
    passage: [
      "Nina found a blue pencil under her desk.",
      "She liked the pencil, but she knew it was not hers.",
      "During class, she asked, \"Whose pencil is this?\"",
      "Rafi raised his hand and smiled with relief.",
      "Nina gave the pencil back. Their teacher praised her honesty."
    ],
    vocabulary: [
      {
        word: "relief",
        meaning: "a calm feeling after worry goes away",
        example: "Rafi felt relief when he got his pencil back.",
        illustrationHint: "Student smiling while receiving lost item"
      }
    ],
    questions: [
      {
        id: "u4-q1",
        prompt: "What did Nina do with the pencil?",
        options: [
          "She kept it",
          "She threw it away",
          "She returned it to the owner",
          "She gave it to her cousin"
        ],
        answer: "She returned it to the owner",
        explanation: "Nina chose honesty and returned the pencil."
      },
      {
        id: "u4-q2",
        prompt: "Where did Nina find the pencil?",
        options: ["Under her desk", "In the library", "At home", "Near the garden"],
        answer: "Under her desk",
        explanation: "Nina found the blue pencil under her desk."
      },
      {
        id: "u4-q3",
        prompt: "Why didn't Nina keep the pencil?",
        options: ["She didn't like blue", "She knew it was not hers", "It was broken", "Teacher asked first"],
        answer: "She knew it was not hers",
        explanation: "Nina understood that taking things that are not ours is wrong."
      },
      {
        id: "u4-q4",
        prompt: "Who was relieved to get the pencil back?",
        options: ["Nina", "Rafi", "The teacher", "Mia"],
        answer: "Rafi",
        explanation: "Rafi smiled with relief after receiving his pencil."
      },
      {
        id: "u4-q5",
        prompt: "What value is taught in this story?",
        options: ["Honesty", "Teamwork", "Personal hygiene", "Patience"],
        answer: "Honesty",
        explanation: "The main value is honesty because Nina returns the lost item."
      },
      {
        id: "u4-q6",
        prompt: "What did the teacher do at the end?",
        options: ["Ignored Nina", "Praised Nina's honesty", "Gave homework", "Took the pencil"],
        answer: "Praised Nina's honesty",
        explanation: "The teacher praised Nina for doing the honest thing."
      }
    ],
    reflectionPrompt: "Why is being honest important in friendship?",
    badgeName: "Truth Teller",
    badgeEmoji: "🫶",
    xp: 60
  },
  {
    id: "unit-5",
    unitNumber: 5,
    level: "A2",
    unitTitle: "Helping Others",
    title: "Grandma's Grocery Bags",
    moralValue: "Kindness",
    readingLevel: "A2",
    status: "locked",
    coverEmoji: "🛍️",
    coverScene: "A child helps Grandma carry groceries up a hill.",
    coverGradient: "from-violet-200 to-fuchsia-100",
    passage: [
      "After school, Dito saw Grandma Sari carrying two heavy grocery bags.",
      "He crossed the street and said, \"Grandma, may I help you?\"",
      "Grandma smiled and handed him one bag.",
      "They walked slowly and talked about Dito's day.",
      "At home, Grandma thanked him warmly. Dito felt proud and kind."
    ],
    vocabulary: [
      {
        word: "warmly",
        meaning: "in a very kind and friendly way",
        example: "Grandma thanked Dito warmly for helping.",
        illustrationHint: "Grandmother smiling and thanking child"
      }
    ],
    questions: [
      {
        id: "u5-q1",
        prompt: "How did Dito show kindness?",
        options: [
          "He ignored Grandma",
          "He carried one grocery bag",
          "He ran away",
          "He dropped the bag"
        ],
        answer: "He carried one grocery bag",
        explanation: "Helping with heavy bags was an act of kindness."
      },
      {
        id: "u5-q2",
        prompt: "Who was carrying the heavy bags?",
        options: ["Dito's teacher", "Grandma Sari", "Bima", "Rina"],
        answer: "Grandma Sari",
        explanation: "Dito saw Grandma Sari carrying two heavy grocery bags."
      },
      {
        id: "u5-q3",
        prompt: "What did Dito say before helping?",
        options: ["Can I borrow money?", "May I help you?", "Where is my bag?", "Do you need water?"],
        answer: "May I help you?",
        explanation: "Dito politely asked Grandma if he could help."
      },
      {
        id: "u5-q4",
        prompt: "How did Grandma respond?",
        options: ["She was angry", "She smiled and gave him one bag", "She said no and left", "She dropped the bags"],
        answer: "She smiled and gave him one bag",
        explanation: "Grandma smiled warmly and let Dito help."
      },
      {
        id: "u5-q5",
        prompt: "How did Dito feel at home?",
        options: ["Proud and kind", "Tired and upset", "Bored", "Confused"],
        answer: "Proud and kind",
        explanation: "Dito felt proud because he helped someone."
      },
      {
        id: "u5-q6",
        prompt: "Which value does this story emphasize?",
        options: ["Kindness", "Competition", "Fear", "Silence"],
        answer: "Kindness",
        explanation: "The main lesson is kindness through helping others."
      }
    ],
    reflectionPrompt: "Who can you help in your neighborhood this week?",
    badgeName: "Kindness Champion",
    badgeEmoji: "❤️",
    xp: 70
  },
  {
    id: "unit-6",
    unitNumber: 6,
    level: "A2",
    unitTitle: "Responsibility",
    title: "The Forgotten Homework",
    moralValue: "Responsibility",
    readingLevel: "A2",
    status: "locked",
    coverEmoji: "📘",
    coverScene: "A student learns to prepare homework the night before class.",
    coverGradient: "from-blue-200 to-indigo-100",
    passage: [
      "Rina loved drawing but often forgot to pack her homework.",
      "One morning, she arrived at school and realized her worksheet was at home.",
      "She felt worried during class.",
      "That evening, Rina made a checklist and packed her bag early.",
      "From then on, she came to school ready and confident."
    ],
    vocabulary: [
      {
        word: "checklist",
        meaning: "a list of tasks to help you remember things",
        example: "Rina used a checklist before sleeping.",
        illustrationHint: "Notebook checklist with checked boxes"
      }
    ],
    questions: [
      {
        id: "u6-q1",
        prompt: "What helped Rina become responsible?",
        options: ["A checklist", "A new toy", "A raincoat", "A bicycle"],
        answer: "A checklist",
        explanation: "The checklist helped Rina remember her homework."
      },
      {
        id: "u6-q2",
        prompt: "What did Rina often forget?",
        options: ["Her water bottle", "Her homework", "Her shoes", "Her lunch"],
        answer: "Her homework",
        explanation: "Rina often forgot to pack homework."
      },
      {
        id: "u6-q3",
        prompt: "How did Rina feel when homework stayed at home?",
        options: ["Excited", "Worried", "Sleepy", "Proud"],
        answer: "Worried",
        explanation: "Rina felt worried when she realized her worksheet was at home."
      },
      {
        id: "u6-q4",
        prompt: "When did Rina pack her bag after learning the lesson?",
        options: ["At school", "Early in the evening", "At lunch", "On the bus"],
        answer: "Early in the evening",
        explanation: "Rina packed her bag early to stay prepared."
      },
      {
        id: "u6-q5",
        prompt: "What changed after Rina used a checklist?",
        options: ["She came ready and confident", "She stopped drawing", "She changed schools", "She forgot more often"],
        answer: "She came ready and confident",
        explanation: "The story says she came to school ready and confident."
      },
      {
        id: "u6-q6",
        prompt: "Which value is shown in this story?",
        options: ["Responsibility", "Jealousy", "Luck", "Independence only"],
        answer: "Responsibility",
        explanation: "Rina learns responsibility by preparing her school tasks."
      }
    ],
    reflectionPrompt: "What can you prepare at night for tomorrow?",
    badgeName: "Responsibility Hero",
    badgeEmoji: "🏅",
    xp: 70
  },
  {
    id: "unit-7",
    unitNumber: 7,
    level: "A2",
    unitTitle: "Friendship",
    title: "The New Student",
    moralValue: "Friendship",
    readingLevel: "A2",
    status: "locked",
    coverEmoji: "🤝",
    coverScene: "Classmates welcome a new student and invite him to play.",
    coverGradient: "from-emerald-200 to-teal-100",
    passage: [
      "A new student named Bima joined class 5B.",
      "He sat alone during break and looked nervous.",
      "Salsa walked over and introduced herself.",
      "She invited Bima to play football with friends.",
      "By the end of the day, Bima was smiling and laughing with everyone."
    ],
    vocabulary: [
      {
        word: "nervous",
        meaning: "feeling worried or shy",
        example: "Bima felt nervous in his new class.",
        illustrationHint: "New student sitting quietly before making friends"
      }
    ],
    questions: [
      {
        id: "u7-q1",
        prompt: "How did Salsa help Bima?",
        options: [
          "She ignored him",
          "She introduced herself and invited him to play",
          "She laughed at him",
          "She took his book"
        ],
        answer: "She introduced herself and invited him to play",
        explanation:
          "Salsa built friendship by being welcoming and inclusive."
      },
      {
        id: "u7-q2",
        prompt: "Why did Bima sit alone during break?",
        options: ["He was nervous in a new class", "He forgot lunch", "He was angry", "He was sleepy"],
        answer: "He was nervous in a new class",
        explanation: "Bima was a new student and felt nervous."
      },
      {
        id: "u7-q3",
        prompt: "What game did Salsa invite Bima to play?",
        options: ["Chess", "Football", "Hide and seek", "Basketball"],
        answer: "Football",
        explanation: "Salsa invited Bima to play football with friends."
      },
      {
        id: "u7-q4",
        prompt: "How did Bima feel by the end of the day?",
        options: ["Sad and lonely", "Smiling and laughing", "Angry", "Confused"],
        answer: "Smiling and laughing",
        explanation: "By the end of the day Bima smiled and laughed with everyone."
      },
      {
        id: "u7-q5",
        prompt: "What value does this story teach most?",
        options: ["Friendship", "Speed", "Winning", "Silence"],
        answer: "Friendship",
        explanation: "This story is about welcoming and building friendship."
      },
      {
        id: "u7-q6",
        prompt: "Which action is friendly in a new class?",
        options: ["Ignoring new students", "Introducing yourself kindly", "Taking their seat", "Laughing at mistakes"],
        answer: "Introducing yourself kindly",
        explanation: "A kind introduction helps new students feel included."
      }
    ],
    reflectionPrompt: "How can you welcome a new friend at school?",
    badgeName: "Friendship Builder",
    badgeEmoji: "🎈",
    xp: 75
  },
  {
    id: "unit-8",
    unitNumber: 8,
    level: "A2",
    unitTitle: "Teamwork",
    title: "The School Garden",
    moralValue: "Teamwork",
    readingLevel: "A2",
    status: "locked",
    coverEmoji: "🌱",
    coverScene: "Students work together to plant and care for a school garden.",
    coverGradient: "from-green-200 to-lime-100",
    passage: [
      "The class started a small garden behind the library.",
      "Each group had a task: digging soil, planting seeds, watering plants, and cleaning tools.",
      "At first, some students wanted to work alone.",
      "Soon they realized teamwork was faster and more fun.",
      "After three weeks, flowers bloomed, and the whole class celebrated together."
    ],
    vocabulary: [
      {
        word: "bloomed",
        meaning: "opened into flowers",
        example: "The flowers bloomed after careful teamwork.",
        illustrationHint: "Children cheering near blooming flowers"
      }
    ],
    questions: [
      {
        id: "u8-q1",
        prompt: "Why was teamwork important in the garden?",
        options: [
          "It made the work faster and more fun",
          "It made the tools disappear",
          "It stopped the rain",
          "It changed the school color"
        ],
        answer: "It made the work faster and more fun",
        explanation: "Teamwork helped the class finish tasks and enjoy the project."
      },
      {
        id: "u8-q2",
        prompt: "Where did the class make the garden?",
        options: ["Behind the library", "In the gym", "Near the cafeteria", "At the playground gate"],
        answer: "Behind the library",
        explanation: "The story says the garden started behind the library."
      },
      {
        id: "u8-q3",
        prompt: "Which was one group task in the garden?",
        options: ["Painting walls", "Planting seeds", "Reading aloud", "Selling food"],
        answer: "Planting seeds",
        explanation: "Students had tasks like digging soil, planting seeds, and watering."
      },
      {
        id: "u8-q4",
        prompt: "What did some students want at first?",
        options: ["To work alone", "To leave school", "To stop gardening", "To buy flowers"],
        answer: "To work alone",
        explanation: "At first, some students preferred working alone."
      },
      {
        id: "u8-q5",
        prompt: "What happened after three weeks?",
        options: ["Nothing changed", "Flowers bloomed and the class celebrated", "The garden closed", "The tools broke"],
        answer: "Flowers bloomed and the class celebrated",
        explanation: "Their teamwork produced blooming flowers and a shared celebration."
      },
      {
        id: "u8-q6",
        prompt: "Which value is strongest in this story?",
        options: ["Teamwork", "Greed", "Fear", "Laziness"],
        answer: "Teamwork",
        explanation: "The story clearly highlights teamwork as the key value."
      }
    ],
    reflectionPrompt: "What teamwork task have you done recently?",
    badgeName: "Teamwork Captain",
    badgeEmoji: "🌿",
    xp: 80
  }
];

export const collectibleBadges: Badge[] = [
  {
    id: "badge-reading-explorer",
    emoji: "📖",
    name: "Reading Explorer",
    description: "Complete your first story with strong understanding."
  },
  {
    id: "badge-story-collector",
    emoji: "🌟",
    name: "Story Collector",
    description: "Collect story badges from multiple units."
  },
  {
    id: "badge-kindness",
    emoji: "❤️",
    name: "Kindness Champion",
    description: "Show empathy and kindness through choices."
  },
  {
    id: "badge-responsibility",
    emoji: "🏅",
    name: "Responsibility Hero",
    description: "Build consistent positive learning habits."
  },
  {
    id: "badge-ladder-champion",
    emoji: "🏆",
    name: "English Ladder Champion",
    description: "Master each step of the ladder adventure."
  }
];

export const parentMetrics = {
  storiesCompleted: 12,
  readingAccuracy: 86,
  currentLevel: "A1 Unit 2",
  weeklyProgressPercent: 72,
  characterValuesLearned: ["Personal Hygiene", "Sharing", "Respect", "Honesty"],
  earnedBadgeCount: 7
};
