export interface Character {
  id: string;
  name: string;
  japaneseName: string;
  englishName: string;
  nickname: string;
  status: 'Alive' | 'Deceased' | 'Unknown';
  age: string;
  birthday: string;
  height: string;
  bounty: string; // e.g., "4,570,000,000" or "None"
  bountyAmount: number; // for sorting
  affiliations: string[];
  crew: string;
  occupation: string;
  devilFruit?: string;
  hakiTypes: string[];
  fightingStyle: string;
  firstAppearance: {
    manga: string;
    anime: string;
  };
  voiceActor: {
    japanese: string;
    english: string;
  };
  biography: string;
  personality: string;
  abilities: string[];
  powers: string[];
  relationships: {
    name: string;
    relation: string;
    role: string;
  }[];
  trivia: string[];
  gallery: string[];
  quotes: string[];
  timeline: {
    event: string;
    age?: string;
  }[];
  relatedCharacters: string[]; // Character IDs
  image: string;
  themeColor: string; // hex or Tailwind color class for cards
}

export interface Crew {
  id: string;
  name: string;
  captain: string; // Character ID or Name
  ship: string;
  jollyRoger: string; // Image/SVG path or emoji
  territories: string[];
  history: string;
  battles: string[];
  members: {
    name: string;
    role: string;
    id?: string;
  }[];
  gallery: string[];
  bountyTotal: string;
}

export interface DevilFruit {
  id: string;
  name: string;
  japaneseName: string;
  type: 'Paramecia' | 'Zoan' | 'Ancient Zoan' | 'Mythical Zoan' | 'Logia';
  user: string; // Character name or ID
  appearance: string;
  strengths: string[];
  weaknesses: string[];
  awakening: string;
  techniques: {
    name: string;
    description: string;
  }[];
  animeAppearances: string;
  mangaAppearances: string;
  image: string;
}

export interface Arc {
  id: string;
  name: string;
  saga: string;
  summary: string;
  mainCharacters: string[]; // Character IDs
  villains: string[]; // Names/IDs
  battles: string[];
  episodes: string;
  chapters: string;
  locations: string[]; // Island IDs/Names
  keyEvents: string[];
  timeline: string;
  image: string;
}

export interface Island {
  id: string;
  name: string;
  overview: string;
  mapUrl: string; // coordinates or visual description
  population: string;
  government: string;
  climate: string;
  history: string;
  arc: string; // Arc ID or Name
  importantCharacters: string[]; // Character IDs
  trivia: string[];
  image: string;
}

export interface TimelineEvent {
  id: string;
  year: string; // e.g. "Over 5000 years ago", "12 years ago", "Age 1520"
  title: string;
  description: string;
  category: 'Void Century' | 'Great Pirate Era' | 'Straw Hat Journey' | 'Ancient History';
  importantCharacters: string[];
}

export interface Weapon {
  name: string;
  japaneseName: string;
  grade: 'Supreme Grade' | 'Great Grade' | 'Skillful Grade' | 'Grade' | 'Ungraded';
  type: 'Sword' | 'Spear' | 'Claw' | 'Sling' | 'Staff' | 'Other';
  currentOwner: string;
  previousOwners: string[];
  history: string;
  image: string;
}

export interface Movie {
  title: string;
  releaseYear: string;
  director: string;
  summary: string;
  image: string;
  mainVillain: string;
}

export interface Game {
  title: string;
  platforms: string[];
  releaseYear: string;
  developer: string;
  genre: string;
  image: string;
}
