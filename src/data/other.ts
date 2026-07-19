import { Weapon, Movie, Game } from '../types';

export const weapons: Weapon[] = [
  {
    name: 'Yoru (Night)',
    japaneseName: '夜',
    grade: 'Supreme Grade',
    type: 'Sword',
    currentOwner: 'Dracule Mihawk',
    previousOwners: ['Unknown'],
    history: 'One of the twelve Supreme Grade Swords (Saijo O Wazamono), Yoru is a massive, black, cross-shaped sword. In the hands of Dracule Mihawk, it can easily slice through frozen tsunamis, massive galleon ships, and steel armaments.',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Yoru_Infobox.png'
  },
  {
    name: 'Enma',
    japaneseName: '閻魔',
    grade: 'Great Grade',
    type: 'Sword',
    currentOwner: 'Roronoa Zoro',
    previousOwners: ['Kozuki Oden', 'Kozuki Hiyori'],
    history: 'A masterpiece created by Shimotsuki Kozaburo. Enma has a unique demonic attribute: it forcefully drains the user\'s Armament Haki (Ryou), discharging massive, oversized slashes. It is one of the only two swords known to have ever permanently scarred the Emperor Kaido.',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Enma_Infobox.png'
  },
  {
    name: 'Wado Ichimonji (Straight Road of the Harmony)',
    japaneseName: '和道一文字',
    grade: 'Great Grade',
    type: 'Sword',
    currentOwner: 'Roronoa Zoro',
    previousOwners: ['Kuina', 'Koshiro'],
    history: 'A legendary white-hilted sword crafted by Shimotsuki Kozaburo. Originally Kuina\'s sword, Zoro begged Koshiro for it after her death, swearing to carry her dream to the heavens. It is Zoro\'s most treasured sword, which he always holds in his mouth for Santoryu.',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Wado_Ichimonji_Infobox.png'
  },
  {
    name: 'Ace',
    japaneseName: 'エース',
    grade: 'Supreme Grade',
    type: 'Sword',
    currentOwner: 'Gol D. Roger (Deceased)',
    previousOwners: ['Unknown'],
    history: 'A Supreme Grade cutlass wielded by the Pirate King Gol D. Roger. He named his beloved son after this sword. Roger used Ace to execute his signature Divine Departure (Kamusari) attack, infusing it with massive black lightning.',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Ace_Infobox.png'
  }
];

export const movies: Movie[] = [
  {
    title: 'One Piece Film: Red',
    releaseYear: '2022',
    director: 'Goro Taniguchi',
    summary: 'The story centers around Uta, a world-famed singer with an otherworldly voice who is revealed to be the adoptive daughter of Red-Haired Shanks. She plans to trap the world\'s souls in a dream world to end all suffering.',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Movie_15_Poster.png',
    mainVillain: 'Tot Musica (Ancient Demon of Music) / Uta'
  },
  {
    title: 'One Piece: Stampede',
    releaseYear: '2019',
    director: 'Takashi Otsuka',
    summary: 'Set during the Pirate Expo, pirates gather from across the globe to compete in a treasure hunt for a log pose that leads directly to Roger\'s island Laugh Tale. The event is crashed by Douglas Bullet, a terrifying former member of the Roger Pirates.',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Movie_14_Poster.png',
    mainVillain: 'Douglas Bullet (The Demon Heir)'
  },
  {
    title: 'One Piece Film: Gold',
    releaseYear: '2016',
    director: 'Hiroaki Miyamoto',
    summary: 'The Straw Hats visit Gran Tesoro, a colossal golden ship-country independent of the World Government. Its ruler, Guild Tesoro, uses gold-dust to manipulate his guests, prompting a high-stakes heist by the Straw Hats.',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Movie_13_Poster.png',
    mainVillain: 'Gild Tesoro (The Golden Emperor)'
  }
];

export const games: Game[] = [
  {
    title: 'One Piece Odyssey',
    platforms: ['PS4', 'PS5', 'Xbox Series X/S', 'PC'],
    releaseYear: '2023',
    developer: 'ILCA',
    genre: 'Turn-Based JRPG',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/One_Piece_Odyssey_Box_Art.png'
  },
  {
    title: 'One Piece: Pirate Warriors 4',
    platforms: ['PS4', 'Xbox One', 'Nintendo Switch', 'PC'],
    releaseYear: '2020',
    developer: 'Omega Force (Koei Tecmo)',
    genre: 'Musou / Action-Adventure',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/One_Piece_Pirate_Warriors_4_Box_Art.png'
  },
  {
    title: 'One Piece: World Seeker',
    platforms: ['PS4', 'Xbox One', 'PC'],
    releaseYear: '2019',
    developer: 'Ganbarion',
    genre: 'Open-World Action-Adventure',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/One_Piece_World_Seeker_Box_Art.png'
  }
];

export interface HakiType {
  name: string;
  japaneseName: string;
  description: string;
  stages: string[];
  notableUsers: string[];
}

export const hakiTypesList: HakiType[] = [
  {
    name: 'Kenbunshoku Haki (Observation Haki)',
    japaneseName: '見聞色の覇気',
    description: 'Grants the user a sixth sense, allowing them to perceive others\' presence, emotional states, power levels, and intent, even if they are concealed or miles away.',
    stages: [
      'Basic Awareness: Feeling spiritual presences and predicting incoming physical strikes.',
      'Future Sight: Extreme cultivation allowing the user to view literal visions of several seconds into the future (perfected by Katakuri, Luffy, Shanks).'
    ],
    notableUsers: ['Monkey D. Luffy', 'Shanks', 'Charlotte Katakuri', 'Trafalgar Law', 'Sanji']
  },
  {
    name: 'Busoshoku Haki (Armament Haki)',
    japaneseName: '武装色の覇気',
    description: 'Allows the user to project their spiritual energy into an invisible or black-hardened armor, boosting physical defense and strike force, and enabling solid contact with Logia-type bodies.',
    stages: [
      'Hardening: Coating limbs or weapons in a dark, high-density metallic armor.',
      'Emission (Ryou): Channeling Haki outside the body to strike targets without contact.',
      'Internal Destruction: Letting Haki flow directly into a target\'s physical core, shattering items or armor from the inside.'
    ],
    notableUsers: ['Monkey D. Luffy', 'Roronoa Zoro', 'Vinsmoke Sanji', 'Whitebeard', 'Gol D. Roger', 'Akainu']
  },
  {
    name: 'Haoshoku Haki (Conqueror\'s Haki)',
    japaneseName: '覇王色の覇気',
    description: 'The rarest form of Haki, possessed by only one in several million people who have the "qualities of a king." It allows the user\'s spirit to overwhelm others\' minds.',
    stages: [
      'Intimidation: Instantly knocking out thousands of weak-willed enemies with a mental pulse.',
      'Infusion (Coating): The ultimate technique of the strongest warriors. Wrapping weapons or body parts in high-density Conqueror Haki, characterized by thick black lightning crackles. Attacks don\'t even need to touch to deliver country-shattering force.'
    ],
    notableUsers: ['Monkey D. Luffy', 'Roronoa Zoro', 'Shanks', 'Whitebeard', 'Gol D. Roger', 'Kaido']
  }
];

export interface AncientWeapon {
  name: string;
  type: string;
  status: string;
  description: string;
}

export const ancientWeapons: AncientWeapon[] = [
  {
    name: 'Pluton',
    type: 'Massive Battleship of Mass Destruction',
    status: 'Sleeping beneath Mount Fuji in Wano Country',
    description: 'A colossal military warship built in Water 7 during the Void Century. It possesses the catastrophic capability to vaporize entire islands with a single blast. Franky memorized and subsequently burned its construction blueprints.'
  },
  {
    name: 'Poseidon',
    type: 'Living Mermaid Princess',
    status: 'Princess Shirahoshi of Fish-Man Island',
    description: 'Unlike a physical weapon, Poseidon is a biological power inherited by a mermaid princess every few centuries, granting the rare ability to communicate with and command the colossal Sea Kings.'
  },
  {
    name: 'Uranus',
    type: 'Sky-borne Flying Weapon / Celestial Laser',
    status: 'In possession of Im / World Government',
    description: 'An ancient, high-altitude ancient weapon used by Im and fueled by Vegapunk\'s Mother Flame energy. It can obliterate entire islands from the sky, instantly raising the global sea level.'
  }
];

export interface Poneglyph {
  type: string;
  color: string;
  count: string;
  purpose: string;
}

export const poneglyphs: Poneglyph[] = [
  {
    type: 'Historical Poneglyphs',
    color: 'Deep Blue',
    count: 'Approx. 17',
    purpose: 'Record sections of ancient history, including the actions and messages of Joy Boy, and the locations of the Ancient Weapons.'
  },
  {
    type: 'Instructional Poneglyphs',
    color: 'Deep Blue',
    count: 'Approx. 9',
    purpose: 'Provide instructions, directions, and clues to uncover the locations of other historical blocks.'
  },
  {
    type: 'Road Poneglyphs',
    color: 'Crimson Red',
    count: '4 in existence',
    purpose: 'The most crucial blocks. Each block details coordinates pointing to a specific island. When all four coordinates are mapped and intersected, they reveal the precise location of Laugh Tale.'
  }
];
