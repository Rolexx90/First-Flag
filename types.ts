export enum ChallengeDifficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
}

export interface User {
  id: number;
  name: string;
  email?: string; // Optional for non-Google sign-in
  avatarUrl?: string; // For profile pictures
  score: number;
  solvedChallenges: number[];
}

export interface Challenge {
  id: number;
  title: string;
  category: string;
  difficulty: ChallengeDifficulty;
  description: string;
  question: string;
  points: number;
  flagFormat: string;
  correctFlag: string;
  topicSuggestion: string;
  approach: string;
  solution: string; // For post-solve write-ups
  tools: string[];
  files?: string[];
  furtherReading?: { title: string; url: string }[];
}

export interface LearningResource {
  title: string;
  category: string;
  description: string;
  link: string;
}

export interface NewsSource {
  name:string;
  description: string;
  link: string;
}

export interface LeaderboardEntry {
  rank: number;
  user: {
    name: string;
    avatarUrl?: string;
  };
  score: number;
}

export interface ChatMessage {
  id: string;
  user: {
    id: number;
    name: string;
    avatarUrl?: string;
  };
  text: string;
  timestamp: string;
}
