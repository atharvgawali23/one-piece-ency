import { Character } from '../types';

export const characters: Character[] = [
  {
    id: 'luffy',
    name: 'Monkey D. Luffy',
    japaneseName: 'モンキー・D・ルフィ',
    englishName: 'Monkey D. Luffy',
    nickname: 'Straw Hat Luffy (Mugiwara no Rufi)',
    status: 'Alive',
    age: '19 (post-timeskip)',
    birthday: 'May 5th (Children\'s Day)',
    height: '174 cm (5\'8½")',
    bounty: '3,000,000,000 ฿',
    bountyAmount: 3000000000,
    affiliations: ['Straw Hat Pirates', 'Straw Hat Grand Fleet', 'Ninja-Pirate-Mink-Samurai Alliance', 'D. Clan'],
    crew: 'Straw Hat Pirates',
    occupation: 'Captain, Pirate King Candidate, Emperor of the Sea',
    devilFruit: 'Gomu Gomu no Mi / Hito Hito no Mi, Model: Nika',
    hakiTypes: ['Haoshoku (Conqueror\'s)', 'Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Gomu Gomu Hand-to-Hand Martial Arts, Gear Techniques, Infused Advanced Conqueror\'s Haki',
    firstAppearance: {
      manga: 'Chapter 1',
      anime: 'Episode 1',
    },
    voiceActor: {
      japanese: 'Mayumi Tanaka',
      english: 'Colleen Clinkenbeard',
    },
    biography: 'Monkey D. Luffy is the main protagonist of One Piece. Born in Foosha Village, he was inspired by Red-Haired Shanks to become a pirate. At age 7, he accidentally ate the Gomu Gomu no Mi, turning his body into rubber. After training for ten years in Mt. Colubo with his sworn brothers Ace and Sabo, Luffy set sail to gather a crew and find Gold Roger\'s legendary treasure, the One Piece, to achieve ultimate freedom as the Pirate King.',
    personality: 'Luffy is famously carefree, adventurous, and incredibly loyal to his friends. He is driven by a pure desire for absolute freedom, believing the Pirate King is the person with the most freedom on the sea. He has an insatiable appetite, particularly for meat, and often behaves impulsively, though he possesses a profound emotional intelligence and an uncanny ability to rally allies to his side.',
    abilities: [
      'Rubber Body: Immune to lightning, blunt force, bullets, and falling from high altitudes.',
      'Advanced Haki: Master of all three Haki types, including Advanced Conqueror\'s infusion (Ryou) and Future Sight.',
      'Voice of All Things: The rare capability to hear and communicate with ancient beasts and inanimate history.'
    ],
    powers: [
      'Gear 2nd: Pumps blood through blood vessels to dramatically boost speed and physical force.',
      'Gear 3rd: Inflates bones with air for giant-sized structural attacks.',
      'Gear 4th (Boundman/Snakeman): Inflates muscles while coated in Armament Haki, utilizing elasticity for flight and extreme rapid-guided punches.',
      'Gear 5th (Sun God Nika Awakening): Ultimate freedom state. He battles with pure imagination, turns anything he touches into rubber (including ground and lightning), and moves with cartoon-like physics.'
    ],
    relationships: [
      { name: 'Red-Haired Shanks', relation: 'Mentor', role: 'Saved Luffy\'s life and entrusted him with his signature Straw Hat.' },
      { name: 'Monkey D. Garp', relation: 'Grandfather', role: 'Marine Hero who trained Luffy harshly to try to make him a Marine.' },
      { name: 'Portgas D. Ace', relation: 'Sworn Brother', role: 'Son of Gol D. Roger, whose death at Marineford devastated Luffy.' },
      { name: 'Sabo', relation: 'Sworn Brother', role: 'Chief of Staff of the Revolutionary Army.' },
      { name: 'Monkey D. Dragon', relation: 'Father', role: 'The Supreme Commander of the Revolutionary Army.' }
    ],
    trivia: [
      'Luffy is the only pirate known to have successfully broken into AND escaped from all three primary World Government installations: Enies Lobby, Impel Down, and Marineford.',
      'His character was inspired by Akira Toriyama\'s Goku from Dragon Ball.',
      'Luffy\'s favorite food is meat on the bone.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Luffy_Gear_5_Anime.png',
      'https://onepiece.fandom.com/wiki/Special:FilePath/Luffy_Gear_4_Snakeman.png'
    ],
    quotes: [
      "If you don't take risks, you can't create a future!",
      "I don't want to conquer anything. I just think the person with the most freedom on the whole ocean is the Pirate King!",
      "Forgetting is like a wound. The wound may heal but it has already left a scar."
    ],
    timeline: [
      { event: 'Ate the Gomu Gomu no Mi at age 7.', age: '7' },
      { event: 'Set sail from Foosha Village to form the Straw Hat Pirates.', age: '17' },
      { event: 'Invaded Enies Lobby to rescue Nico Robin, declaring war on the World Government.', age: '17' },
      { event: 'Fought in the Summit War of Marineford to save Ace; entered training under Rayleigh.', age: '17' },
      { event: 'Reunited with his crew at Sabaody and set sail for the New World.', age: '19' },
      { event: 'Defeated Kaido on Wano, awakened Gear 5th, and became an Emperor of the Sea.', age: '19' }
    ],
    relatedCharacters: ['zoro', 'sanji', 'nami', 'robin', 'shanks', 'ace', 'whitebeard', 'roger', 'law'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png',
    themeColor: 'from-red-600 to-amber-500'
  },
  {
    id: 'zoro',
    name: 'Roronoa Zoro',
    japaneseName: 'ロロノア・ゾロ',
    englishName: 'Roronoa Zoro',
    nickname: 'Pirate Hunter Zoro (Kaizoku-Gari no Zoro)',
    status: 'Alive',
    age: '21 (post-timeskip)',
    birthday: 'November 11th',
    height: '181 cm (5\'11¼")',
    bounty: '1,111,000,000 ฿',
    bountyAmount: 1111000000,
    affiliations: ['Straw Hat Pirates', 'Ninja-Pirate-Mink-Samurai Alliance'],
    crew: 'Straw Hat Pirates',
    occupation: 'Combatant, Swordsman',
    hakiTypes: ['Haoshoku (Conqueror\'s)', 'Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Santoryu (Three Sword Style), Kyotoryu (Nine Sword Style - Asura)',
    firstAppearance: {
      manga: 'Chapter 3',
      anime: 'Episode 2',
    },
    voiceActor: {
      japanese: 'Kazuya Nakai',
      english: 'Christopher Sabat',
    },
    biography: 'Roronoa Zoro was the first member to join the Straw Hat Pirates. In his youth in Shimotsuki Village, he trained at Koshiro\'s dojo. Following the tragic death of his childhood rival and friend, Kuina, Zoro swore a solemn oath to become the World\'s Greatest Swordsman. He worked as a bounty hunter to survive, earning the moniker "Pirate Hunter" before being rescued from execution by Luffy.',
    personality: 'Zoro is stern, disciplined, and intensely serious, though he harbors a deep, silent warmth for his crew. He strictly respects pirate protocol and Luffy\'s authority, acting as the de-facto vice-captain. He is famously directionally challenged, getting lost even on straight paths. He enjoys training, sleeping, and drinking sake.',
    abilities: [
      'Master Swordsman: Able to cut through solid steel, massive stone ships, and mountainous structures.',
      'Incredible Durability: Survives fatal wounds, famously absorbing all of Luffy\'s pain at Thriller Bark ("Nothing happened").',
      'Advanced Conqueror\'s Infusion: Coils his swords with Haoshoku Haki to pierce through King the Conflagration.'
    ],
    powers: [
      'Santoryu (Three Sword Style): Fights with three swords simultaneously, holding one in his mouth (Kuina\'s Wado Ichimonji).',
      'Ittoryu / Nitoryu: Highly proficient in single and double sword styles for quick-draw and ranged wind-slashes.',
      'Kyotoryu (Nine Sword Style - Asura): Manifests a spiritual illusion of three heads and six arms through pure willpower, tripling his lethality.'
    ],
    relationships: [
      { name: 'Monkey D. Luffy', relation: 'Captain & First Mate', role: 'Zoro\'s first recruit, he is completely loyal and ready to die for Luffy\'s dream.' },
      { name: 'Dracule Mihawk', relation: 'Rival & Teacher', role: 'The current World\'s Greatest Swordsman, who trained Zoro during the timeskip.' },
      { name: 'Kuina', relation: 'Childhood Friend', role: 'Zoro\'s motivation. Her sword Wado Ichimonji remains his most treasured possession.' },
      { name: 'Vinsmoke Sanji', relation: 'Crewmate / Rival', role: 'Constant bickering companion; they push each other to greater heights.' }
    ],
    trivia: [
      'Zoro is always the first to notice dangerous realities and enforce pirate crew discipline (e.g., during Usopp\'s departure).',
      'His bounty is comprised entirely of ones, mimicking his sword-based identity.',
      'He is the only member of the Worst Generation beside Luffy who isn\'t a captain.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Zoro_Kyatori_Anime.png'
    ],
    quotes: [
      "If I die here, then I'm a man who could only go this far.",
      "Nothing happened.",
      "When I decided to follow my dream, I had already discarded my life."
    ],
    timeline: [
      { event: 'Swore oath to Kuina to become the World\'s Greatest Swordsman.', age: '11' },
      { event: 'Joined Monkey D. Luffy after being saved from Marine Captain Morgan.', age: '19' },
      { event: 'Fought Dracule Mihawk on the Baratie, suffering a devastating defeat and promising never to lose again.', age: '19' },
      { event: 'Absorbed Luffy\'s full damage and exhaustion from Kuma to protect the crew at Thriller Bark.', age: '19' },
      { event: 'Bowed to Mihawk to beg for training during the 2-year timeskip.', age: '19' },
      { event: 'Defeated King the Wildfire at Wano, mastering the demonic sword Enma.', age: '21' }
    ],
    relatedCharacters: ['luffy', 'sanji', 'robin', 'mihawk'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png',
    themeColor: 'from-emerald-700 to-green-500'
  },
  {
    id: 'sanji',
    name: 'Vinsmoke Sanji',
    japaneseName: 'ヴィンスモーク・サンジ',
    englishName: 'Vinsmoke Sanji',
    nickname: 'Black Leg Sanji (Kuro Ashi no Sanji)',
    status: 'Alive',
    age: '21 (post-timeskip)',
    birthday: 'March 2nd',
    height: '180 cm (5\'11")',
    bounty: '1,032,000,000 ฿',
    bountyAmount: 1032000000,
    affiliations: ['Straw Hat Pirates', 'Baratie (former)', 'Germa Kingdom (former)'],
    crew: 'Straw Hat Pirates',
    occupation: 'Cook, Combatant',
    hakiTypes: ['Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Black Leg Style (Kick-based combat), Diable Jambe, Ifrit Jambe',
    firstAppearance: {
      manga: 'Chapter 43',
      anime: 'Episode 20',
    },
    voiceActor: {
      japanese: 'Hiroaki Hirata',
      english: 'Eric Vale',
    },
    biography: 'Sanji is the cook of the Straw Hat Pirates and the third-strongest combatant. He is a former prince of the Germa Kingdom\'s royal Vinsmoke family, but fled due to childhood abuse. He was taken in by "Red Leg" Zeff on the Baratie sea restaurant, learning master culinary skills and a signature leg-only martial art. His life-long dream is to locate the "All Blue," a mystical sea where fish from all four oceans coexist.',
    personality: 'Sanji is cool, analytical, and chivalrous. He holds a absolute chivalric code: he will never strike a woman, even at the cost of his life, and refuses to let anyone go hungry. He is highly romantic, easily infatuated by women (particularly Nami and Robin), and is the de facto tactical mastermind of the crew, often executing shadow ops to save everyone.',
    abilities: [
      'Master Chef: Instantly creates top-tier gourmet meals from scraps, possessing extensive knowledge of culinary nutrition.',
      'Germa Genetic Awakening: Enhanced skeletal durability, cellular regeneration, and physical exoskeletons awakened in Wano.',
      'Superior Observation Haki: His specialization, allowing him to perceive women\'s tears and sniper positions from kilometers away.'
    ],
    powers: [
      'Black Leg Style: Martial arts utilizing solely leg strikes, keeping hands pristine for cooking.',
      'Diable Jambe (Devil Leg): Superheats his legs through extreme friction, creating fiery explosive kicks.',
      'Ifrit Jambe: Combines his awakened genetic exoskeleton with Armament Haki, generating blue-hot plasma fire that incinerates the heaviest adversaries.'
    ],
    relationships: [
      { name: 'Red-Leg Zeff', relation: 'Adoptive Father', role: 'Saved Sanji from drowning, shared 85 days of starvation with him, and taught him cooking.' },
      { name: 'Monkey D. Luffy', relation: 'Captain', role: 'Believes Sanji\'s cooking is essential to become the Pirate King. Rescued him from Whole Cake Island.' },
      { name: 'Vinsmoke Judge', relation: 'Biological Father', role: 'Cruel leader of Germa 66 who discarded Sanji as a failure.' },
      { name: 'Roronoa Zoro', relation: 'Rivalry', role: 'Comedic antagonistic partnership. Zoro mockingly calls him "Curly Brows" or "Number 4".' }
    ],
    trivia: [
      'Sanji\'s eyebrows swirl in the clockwise direction, mimicking the shape of a Devil Fruit swirl.',
      'He refuses to use any weapons or his hands in combat because hands are sacred instruments for cooking.',
      'Originally, Oda planned to name him Naruto, but changed it when Kishimoto launched the Naruto manga.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Sanji_Ifrit_Jambe_Anime.png'
    ],
    quotes: [
      "Cooking is a gift from the gods. Spices are a gift from the devil. It seems it was a little too spicy for you.",
      "Men who can't wipe away the tears from a woman's eyes aren't real men.",
      "I will never kick a woman, even if it kills me!"
    ],
    timeline: [
      { event: 'Escaped the Germa Kingdom with the help of his sister Reiju.', age: '8' },
      { event: 'Co-founded Baratie with Zeff after surviving shipwreck starvation.', age: '10' },
      { event: 'Joined Luffy after defending the Baratie against Don Krieg.', age: '19' },
      { event: 'Infiltrated the Puffing Tom train to rescue Robin on the way to Enies Lobby.', age: '19' },
      { event: 'Forced into an arranged marriage with Pudding; rescued by Luffy.', age: '21' },
      { event: 'Fought Queen of the Beasts Pirates, awakening his biological exoskeleton.', age: '21' }
    ],
    relatedCharacters: ['luffy', 'zoro', 'nami', 'robin'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Sanji_Anime_Post_Timeskip_Infobox.png',
    themeColor: 'from-amber-600 to-yellow-500'
  },
  {
    id: 'nami',
    name: 'Nami',
    japaneseName: 'ナミ',
    englishName: 'Nami',
    nickname: 'Cat Burglar Nami (泥棒猫のナミ)',
    status: 'Alive',
    age: '20 (post-timeskip)',
    birthday: 'July 3rd',
    height: '170 cm (5\'7")',
    bounty: '366,000,000 ฿',
    bountyAmount: 366000000,
    affiliations: ['Straw Hat Pirates', 'Arlong Pirates (former)'],
    crew: 'Straw Hat Pirates',
    occupation: 'Navigator',
    hakiTypes: [],
    fightingStyle: 'Weather manipulation (Clima-Tact), Sorcery Clima-Tact (with Zeus)',
    firstAppearance: {
      manga: 'Chapter 8',
      anime: 'Episode 1',
    },
    voiceActor: {
      japanese: 'Akemi Okamura',
      english: 'Luci Christian',
    },
    biography: 'Nami is the highly talented navigator of the Straw Hat Pirates. Raised by adoptive mother Bell-mère alongside her sister Nojiko in Cocoyasi Village, she was enslaved as a cartographer and thief by Arlong the fish-man after he murdered Bell-mère. She secretly amassed 100 million Berries to buy back her village\'s freedom, which Arlong ultimately stole. She joined Luffy permanently after he defeated Arlong, dedicated to drawing a complete map of the entire world.',
    personality: 'Nami is clever, level-headed, and business-minded, often managing the crew\'s finances with an iron fist. She has a deep fear of danger but is incredibly brave when protecting children or her crew. She loves tangerines and money above all else, but values her friends\' lives infinitely more.',
    abilities: [
      'Master Navigator: Can read complex cloud formations, sea temperatures, and barometric pressure, navigating the impossible currents of the Grand Line.',
      'Cartography: Impeccable geographic drawing skill, mapping islands with perfect coordinate alignment.',
      'Stealth & Pickpocketing: Highly skilled thief, capable of stealing keys and purses without detection.'
    ],
    powers: [
      'Clima-Tact: A staff created by Usopp that produces heat, cold, and electric bubbles to generate localized weather.',
      'Perfect Clima-Tact: Upgraded model capable of creating mirages, cloud pathways, and massive lightning strikes.',
      'Zeus-infused Sorcery Clima-Tact: Incorporates Big Mom\'s former soul-homie Zeus into the staff, turning her weapon into a sentient, shape-shifting lightning homie that never misses its target.'
    ],
    relationships: [
      { name: 'Bell-mère', relation: 'Adoptive Mother', role: 'Former Marine who raised Nami and Nojiko on a tangerine farm, sacrificing herself for them.' },
      { name: 'Monkey D. Luffy', relation: 'Captain', role: 'Nami trusts Luffy completely. He placed his Straw Hat on her head when she asked for help against Arlong.' },
      { name: 'Zeus', relation: 'Partner / Homie', role: 'Thundercloud homie who defected from Big Mom to serve Nami as her personal weapon.' },
      { name: 'Usopp', relation: 'Close Friend', role: 'Fellow "weak trio" member who builds and upgrades her weather-controlling staffs.' }
    ],
    trivia: [
      'Nami\'s name means "wave" in Japanese.',
      'She is one of the smartest characters in the East Blue saga, ranking second after Benn Beckman.',
      'Her room is always stocked with tangerines from Bell-mère\'s grove.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Nami_Wano_Outfit.png'
    ],
    quotes: [
      "Life is like a wind, which carries us from one place to another...",
      "Luffy... Help me.",
      "What good is having everything you want, if you can't share it with the ones you love?"
    ],
    timeline: [
      { event: 'Adopted by Bell-mère on an active battlefield.', age: '1' },
      { event: 'Forced to join Arlong Pirates to buy back Cocoyasi Village.', age: '8' },
      { event: 'Luffy defeated Arlong, officially freeing her to join the Straw Hats.', age: '18' },
      { event: 'Acquired Weatheria technology during the 2-year timeskip.', age: '18' },
      { event: 'Stole Zeus from Big Mom during the invasion of Whole Cake Island.', age: '20' },
      { event: 'Stood tall against Ulti on Wano, declaring Luffy will become the Pirate King.', age: '20' }
    ],
    relatedCharacters: ['luffy', 'zoro', 'sanji', 'robin'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Nami_Anime_Post_Timeskip_Infobox.png',
    themeColor: 'from-orange-500 to-yellow-400'
  },
  {
    id: 'robin',
    name: 'Nico Robin',
    japaneseName: 'ニコ・ロビン',
    englishName: 'Nico Robin',
    nickname: 'Devil Child (Akuma no Ko)',
    status: 'Alive',
    age: '30 (post-timeskip)',
    birthday: 'February 6th',
    height: '188 cm (6\'2")',
    bounty: '930,000,000 ฿',
    bountyAmount: 930000000,
    affiliations: ['Straw Hat Pirates', 'Baroque Works (former)', 'Revolutionary Army (guest)'],
    crew: 'Straw Hat Pirates',
    occupation: 'Archaeologist',
    devilFruit: 'Hana Hana no Mi (Flower-Flower Fruit)',
    hakiTypes: ['Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Submission grappling, Joint locks, Gigantesco Mano, Demonio Fleur',
    firstAppearance: {
      manga: 'Chapter 114',
      anime: 'Episode 67',
    },
    voiceActor: {
      japanese: 'Yuriko Yamaguchi',
      english: 'Stephanie Young',
    },
    biography: 'Nico Robin is the archaeologist of the Straw Hat Pirates. Born in Ohara, an island of scholars, she ate the Hana Hana no Mi at a young age. At age 8, she became the sole survivor of the Buster Call that annihilated Ohara for researching the forbidden Void Century. Dubbed the "Devil Child" with a 79 million Berries bounty, she survived 20 years on the run by betraying various pirate crews. She initially joined Luffy as "Miss All Sunday" of Baroque Works, but found true family after the Straw Hats defied the world to save her at Enies Lobby. She is the only person alive capable of reading Poneglyphs.',
    personality: 'Robin is calm, intellectual, and mature, possessing a dark, morbid sense of humor. She often imagines gruesome scenarios with a serene smile. She has a deep love for history, books, and cute things, and is intensely grateful to Luffy and the crew for giving her a reason to live.',
    abilities: [
      'Poneglyph Decryption: The only archaeologist who can translate the ancient Stone blocks, essential to locate Laugh Tale.',
      'Exceptional Intellect: Vast knowledge of world history, politics, and ancient legends.',
      'Tactical Espionage: Decades of survival make her an elite spy and information gatherer.'
    ],
    powers: [
      'Hana Hana no Mi: Allows her to sprout replicas of any part of her body (arms, legs, eyes) on any surface, including other people, like blooming flowers.',
      'Gigantesco Mano: Merges thousands of sprouted arms or legs into giant limbs to crush ships or stomp groups.',
      'Demonio Fleur: Sprout giant wings, horns, and limbs coated in Armament Haki, forming a massive dark demonic avatar that submits enemies with bone-breaking locks.'
    ],
    relationships: [
      { name: 'Nico Olvia', relation: 'Mother', role: 'Ohara scholar who died in the Buster Call trying to protect historical research.' },
      { name: 'Jaguar D. Saul', relation: 'Guardian / Friend', role: 'Giant Marine giant who saved Robin, taught her to laugh in dark times, and survived freezing.' },
      { name: 'Monkey D. Luffy', relation: 'Captain', role: 'Saved her from suicidal despair, telling her: "Say you want to live!"' },
      { name: 'Revolutionary Army / Sabo', relation: 'Allies', role: 'Hosted Robin during the 2-year timeskip, calling her the "Light of Revolution".' }
    ],
    trivia: [
      'Robin is the tallest female member of the Straw Hat crew.',
      'Her favorite food is sandwiches and cakes that go well with black coffee.',
      'She is the only Straw Hat who requested to join the crew rather than being invited by Luffy.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Robin_Demonio_Fleur.png'
    ],
    quotes: [
      "I want to live! Take me out to sea with you!",
      "Fools who do not respect the past are doomed to repeat it.",
      "There is no such thing as being born into this world to be alone."
    ],
    timeline: [
      { event: 'Ate Hana Hana no Mi; became an official Scholar of Ohara.', age: '8' },
      { event: 'Survived the Buster Call of Ohara; became a global fugitive.', age: '8' },
      { event: 'Joined Baroque Works as Crocodile\'s Vice-President, Miss All Sunday.', age: '24' },
      { event: 'Joined the Straw Hats after Baroque Works collapsed.', age: '28' },
      { event: 'Surrendered to Cipher Pol 9; rescued by the Straw Hats at Enies Lobby.', age: '28' },
      { event: 'Defeated Black Maria at Wano using Demonio Fleur.', age: '30' }
    ],
    relatedCharacters: ['luffy', 'zoro', 'sanji', 'nami'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Nico_Robin_Anime_Post_Timeskip_Infobox.png',
    themeColor: 'from-purple-800 to-indigo-600'
  },
  {
    id: 'shanks',
    name: 'Shanks',
    japaneseName: 'シャンクス',
    englishName: 'Shanks',
    nickname: 'Red-Haired Shanks (Akagami no Shankusu)',
    status: 'Alive',
    age: '39',
    birthday: 'March 9th',
    height: '199 cm (6\'6½")',
    bounty: '4,048,900,000 ฿',
    bountyAmount: 4048900000,
    affiliations: ['Red Hair Pirates', 'Roger Pirates (former)', 'Four Emperors', 'Celestial Dragons (theories)'],
    crew: 'Red Hair Pirates',
    occupation: 'Captain, Emperor of the Sea',
    hakiTypes: ['Haoshoku (Conqueror\'s)', 'Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Master Swordsmanship (Gryphon), God-level Conqueror\'s Haki "Observation Killing"',
    firstAppearance: {
      manga: 'Chapter 1',
      anime: 'Episode 4',
    },
    voiceActor: {
      japanese: 'Shūichi Ikeda',
      english: 'Brandon Potter',
    },
    biography: 'Shanks is the chief of the Red Hair Pirates and one of the Four Emperors. Found in a treasure chest at God Valley by Roger, he was raised as an apprentice on Oro Jackson alongside Buggy. After Roger\'s execution, Shanks formed his own crew, rising to become an Emperor. He famously lost his left arm to save a young Luffy in East Blue, leaving him his straw hat as a promise to meet again when Luffy became a great pirate.',
    personality: 'Shanks is extremely laid-back, peace-loving, and loves to party. He rarely fights unless his friends are threatened. He is highly respected by allies and enemies alike, possessing a legendary diplomatic aura that allowed him to stop the Marineford war single-handedly.',
    abilities: [
      'God-Tier Haki: Arguably the strongest Conqueror\'s Haki shown, capable of knocking out Vice-Admirals from miles away and damaging structures.',
      'Observation Killer: Can prevent enemies from seeing the future using Kenbunshoku Haki.',
      'Political Influence: Allowed private meetings with the Five Elders due to his high-standing lineage.'
    ],
    powers: [
      'Gryphon: A master saber infused with black-lightning-grade Advanced Conqueror Haki, capable of blocking Akainu\'s magma fist easily.',
      'Divine Departure (Kamusari): A massive sword slash that releases high-density Haki, instantly knocking out Kid and Killer simultaneously.'
    ],
    relationships: [
      { name: 'Gol D. Roger', relation: 'Captain / Mentor', role: 'Found Shanks as a baby, raised him, and gave him his Straw Hat.' },
      { name: 'Monkey D. Luffy', relation: 'Protégé', role: 'Inspired Luffy\'s pirate journey and sacrificed his left arm for him.' },
      { name: 'Dracule Mihawk', relation: 'Rival & Friend', role: 'Legendary sword duel partners whose clashes shook the Grand Line.' },
      { name: 'Buggy the Clown', relation: 'Sworn Brother', role: 'Fellow Roger apprentice; Buggy holds a comedic grudge against him.' }
    ],
    trivia: [
      'Shanks is the youngest of the original Four Emperors.',
      'Oda has stated that Shanks is the character who resembles himself the most.',
      'He is the only Emperor who does not possess a Devil Fruit.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Shanks_Divine_Departure_Anime.png'
    ],
    quotes: [
      "Listen up... You can pour drinks on me, you can throw food at me... But whether you have a good reason or not... No one hurts my friends!",
      "I've come to end this war!",
      "It's time to go claim the One Piece."
    ],
    timeline: [
      { event: 'Found in a treasure chest by Roger at God Valley.', age: '1' },
      { event: 'Wept as Roger was executed in Loguetown; declined to join Buggy, starting his own crew.', age: '15' },
      { event: 'Sacrificed his arm to save Luffy from a Sea King in Foosha Village.', age: '27' },
      { event: 'Rose to the rank of Emperor of the Sea.', age: '33' },
      { event: 'Intervened to end the Summit War of Marineford.', age: '37' },
      { event: 'Defeated Eustass Kid at Elbaf with a single attack.', age: '39' }
    ],
    relatedCharacters: ['luffy', 'buggy', 'roger', 'whitebeard'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Shanks_Anime_Infobox.png',
    themeColor: 'from-rose-800 to-red-600'
  },
  {
    id: 'ace',
    name: 'Portgas D. Ace',
    japaneseName: 'ポートガス・D・エース',
    englishName: 'Portgas D. Ace',
    nickname: 'Fire Fist Ace (Hiken no Ēsu)',
    status: 'Deceased',
    age: '20 (at death)',
    birthday: 'January 1st',
    height: '185 cm (6\'1")',
    bounty: '550,000,000 ฿',
    bountyAmount: 550000000,
    affiliations: ['Whitebeard Pirates', 'Spade Pirates (former)', 'D. Clan'],
    crew: 'Whitebeard Pirates',
    occupation: '2nd Division Commander, Spade Pirates Captain (former)',
    devilFruit: 'Mera Mera no Mi (Flame-Flame Fruit)',
    hakiTypes: ['Haoshoku (Conqueror\'s)', 'Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Mera Mera pyrokinesis, Fire Fist attacks, Close martial arts',
    firstAppearance: {
      manga: 'Chapter 154',
      anime: 'Episode 91',
    },
    voiceActor: {
      japanese: 'Toshio Furukawa',
      english: 'Travis Willingham',
    },
    biography: 'Portgas D. Ace was the biological son of the Pirate King, Gol D. Roger, and Portgas D. Rouge. Raised by Curly Dadan alongside Luffy and Sabo, he set sail three years before Luffy, founding the Spade Pirates. He later joined the Whitebeard Pirates, becoming the Second Division Commander. His hunt for the traitorous Blackbeard led to his capture, prompting the legendary Summit War. He died at Marineford protecting Luffy from Admiral Akainu.',
    personality: 'Ace was polite, intelligent, and fiercely protective of those he loved. He suffered from severe identity issues due to his father\'s infamy, wondering if he deserved to be born. He loved sleeping while eating and possessed an iron devotion to his captain, Whitebeard.',
    abilities: [
      'Logia intangibility: Can transform his body into pure fire to bypass physical strikes.',
      'Conqueror\'s Haki: Awakened as a child to protect Luffy from Bluejam\'s bandits.',
      'High-Level Survival skills: Trained by Garp and Dadan in the wild.'
    ],
    powers: [
      'Hiken (Fire Fist): Unleashes a colossal wave of fire from his fist, capable of destroying multiple battleships.',
      'Enkai (Flame Commandment) / Hibashira (Fire Pillar): Creates defensive rings of fire that explode upwards into pillars.',
      'Dai Enkai: Entei (Great Flame Commandment: Flame Emperor): Ace\'s ultimate technique. Creates a giant, sun-like ball of fire to throw at his enemies.'
    ],
    relationships: [
      { name: 'Whitebeard', relation: 'Captain & Father Figure', role: 'Gave Ace a home and a father to love. Ace wanted to make Whitebeard the Pirate King.' },
      { name: 'Monkey D. Luffy', relation: 'Sworn Brother', role: 'Vowed to protect Luffy always. Died shielding him from Akainu.' },
      { name: 'Sabo', relation: 'Sworn Brother', role: 'Shared childhood dreams of freedom.' },
      { name: 'Gol D. Roger', relation: 'Biological Father', role: 'Ace hated Roger\'s legacy and took his mother\'s surname.' }
    ],
    trivia: [
      'Ace was born after 20 months in his mother\'s womb through her sheer willpower to hide him from the World Government.',
      'His tattoo "ASCE" has the "S" crossed out, a silent tribute to Sabo, whom he believed dead.',
      'His favorite food was barbecue meat.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Ace_Hiken_Anime.png'
    ],
    quotes: [
      "Thank you... for loving me!",
      "I don't care about living a thousand years. I just need to live through today.",
      "Once I start a fight, I never run away!"
    ],
    timeline: [
      { event: 'Born to Portgas D. Rouge; taken in by Garp.', age: '0' },
      { event: 'Swore brotherhood with Sabo and Luffy.', age: '10' },
      { event: 'Ate Mera Mera no Mi on Sixis Island.', age: '17' },
      { event: 'Defeated by Whitebeard, eventually joining his crew as a beloved son.', age: '18' },
      { event: 'Defeated and captured by Blackbeard on Banaro Island.', age: '20' },
      { event: 'Died at Marineford, thanking Luffy and his crew with a smile.', age: '20' }
    ],
    relatedCharacters: ['luffy', 'whitebeard', 'shanks', 'roger'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Portgas_D._Ace_Anime_Infobox.png',
    themeColor: 'from-orange-600 to-red-500'
  },
  {
    id: 'whitebeard',
    name: 'Edward Newgate',
    japaneseName: 'エドワード・ニューゲート',
    englishName: 'Edward Newgate',
    nickname: 'Whitebeard (Shirohige)',
    status: 'Deceased',
    age: '72 (at death)',
    birthday: 'April 6th',
    height: '666 cm (21\'10")',
    bounty: '5,046,000,000 ฿',
    bountyAmount: 5046000000,
    affiliations: ['Whitebeard Pirates', 'Rocks Pirates (former)', 'Four Emperors'],
    crew: 'Whitebeard Pirates',
    occupation: 'Captain, Emperor of the Sea',
    devilFruit: 'Gura Gura no Mi (Tremor-Tremor Fruit)',
    hakiTypes: ['Haoshoku (Conqueror\'s)', 'Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Gura Gura earthquakes, Naginata "Murakumogiri" slashes, supreme Haki',
    firstAppearance: {
      manga: 'Chapter 234',
      anime: 'Episode 151',
    },
    voiceActor: {
      japanese: 'Kinryu Arimoto',
      english: 'R. Bruce Elliott',
    },
    biography: 'Edward Newgate, known as Whitebeard, was the captain of the Whitebeard Pirates and the "Strongest Man in the World." A former member of the Rocks Pirates, he was Gol D. Roger\'s fiercest rival and closest pirate friend. Unlike other pirates who sought wealth, Whitebeard\'s only dream was to have a "Family," adopting hundreds of outcasts as his "Sons." He died standing up at the Battle of Marineford, enduring hundreds of wounds without ever turning his back.',
    personality: 'Whitebeard was a proud, jovial, and deeply compassionate leader. He treated all crewmates as his sons, protecting them with absolute fury. He was highly honorable and feared no one, maintaining his legendary stature until his final breath.',
    abilities: [
      'Strongest Man in the World: Able to match Gol D. Roger in physical power.',
      'Murakumogiri: A Supreme Grade Naginata capable of channeling devastating earthquakes and Advanced Haki.',
      'Legendary Stamina: Survived half his face blown off, 267 sword wounds, 152 bullet wounds, and 46 cannonball shots at Marineford before dying.'
    ],
    powers: [
      'Gura Gura no Mi: A Logia-class paramecia that allows him to create earthquakes and shockwaves, capable of shattering air, triggering tsunamis, and tilting oceans.'
    ],
    relationships: [
      { name: 'Portgas D. Ace', relation: 'Beloved Son', role: 'Whitebeard wanted to make Ace the next Pirate King. Invaded Marineford to save him.' },
      { name: 'Gol D. Roger', relation: 'Rival & Friend', role: 'Shared drinks and final secrets before Roger\'s death.' },
      { name: 'Marco', relation: 'First Mate / Doctor', role: 'Whitebeard\'s right-hand man and commander of the 1st division.' },
      { name: 'Marshall D. Teach (Blackbeard)', relation: 'Traitorous Son', role: 'Murdered Thatch and stole Whitebeard\'s fruit after his death.' }
    ],
    trivia: [
      'Despite his nickname, Whitebeard did not have a beard, but a large white crescent mustache.',
      'His flag is a Jolly Roger with his mustache and a cross.',
      'Throughout his entire life, Whitebeard never sustained a single scar on his back, proving he never ran from a battle.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Whitebeard_Gura_Gura.png'
    ],
    quotes: [
      "The One Piece... IS REAL!",
      "I am only one man with one heart... Call me a demon, call me a monster... but I cannot be the strongest forever!",
      "Even if we have no blood relation... you are my son!"
    ],
    timeline: [
      { event: 'Orphaned in Sphinx Island; set sail as a mercenary.', age: '15' },
      { event: 'Joined the legendary Rocks Pirates.', age: '24' },
      { event: 'Formed the Whitebeard Pirates to build his own family.', age: '36' },
      { event: 'Clashed with Gol D. Roger in a 3-day duel that ended in a party.', age: '46' },
      { event: 'Declared Fish-Man Island under his protection, freeing it from slavery.', age: '52' },
      { event: 'Invaded Marineford and died in battle, igniting the New Great Pirate Era.', age: '72' }
    ],
    relatedCharacters: ['luffy', 'ace', 'shanks', 'roger'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Edward_Newgate_Anime_Infobox.png',
    themeColor: 'from-blue-900 to-slate-700'
  },
  {
    id: 'roger',
    name: 'Gol D. Roger',
    japaneseName: 'ゴール・D・ロジャー',
    englishName: 'Gol D. Roger',
    nickname: 'Gold Roger / Pirate King (Kaizoku-Ō)',
    status: 'Deceased',
    age: '53 (at death)',
    birthday: 'December 31st',
    height: '274 cm (9\'0")',
    bounty: '5,564,800,000 ฿',
    bountyAmount: 5564800000,
    affiliations: ['Roger Pirates', 'D. Clan'],
    crew: 'Roger Pirates',
    occupation: 'Captain, Pirate King',
    hakiTypes: ['Haoshoku (Conqueror\'s)', 'Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Master Swordsmanship (Ace), Supreme Conqueror Haki slashes',
    firstAppearance: {
      manga: 'Chapter 1',
      anime: 'Episode 1',
    },
    voiceActor: {
      japanese: 'Chikao Ōtsuka / Masane Tsukayama',
      english: 'Sean Hennigan',
    },
    biography: 'Gol D. Roger was the legendary Pirate King, captain of the Roger Pirates, and owner of the legendary treasure One Piece. Born in Loguetown, he set sail and achieved what no other crew had: navigating the entire Grand Line and reaching the final island, Laugh Tale. Afflicted with a fatal illness, Roger disbanded his crew and surrendered to the Marines, using his final execution speech to trigger the "Great Pirate Era" by telling the world to go find his treasure.',
    personality: 'Roger was loud, reckless, and possessed an indomitable spirit. He would turn into a furious demon if anyone threatened his friends, destroying entire nations to protect his crew. He loved adventure and met his death with a grand, iconic grin.',
    abilities: [
      'Pirate King: Unrivaled physical power, speed, and endurance.',
      'Voice of All Things: Able to read Poneglyphs and hear the ancient history of the world without understanding the language.',
      'Ace: A Supreme Grade Cutlass that Roger used to channel his high-density Conqueror Haki.'
    ],
    powers: [
      'Divine Departure (Kamusari): A horizontal sword strike that releases a colossal black-lightning wave of Conqueror Haki, instantly blowing away Kozuki Oden.'
    ],
    relationships: [
      { name: 'Silvers Rayleigh', relation: 'First Mate / Best Friend', role: 'The "Dark King" who joined Roger first and co-led the crew.' },
      { name: 'Red-Haired Shanks', relation: 'Apprentice / Successor', role: 'Raised Shanks on his ship and passed him his straw hat.' },
      { name: 'Monkey D. Garp', relation: 'Rival & Trustee', role: 'Clashed with Roger countlessly, but Roger trusted Garp to raise his unborn son, Ace.' },
      { name: 'Edward Newgate', relation: 'Rival & Friend', role: 'His closest equal on the seas.' }
    ],
    trivia: [
      'Roger\'s bounty of 5,564,800,000 Berries is the highest bounty in pirate history.',
      'The World Government purposefully referred to him as "Gold Roger" to hide his middle initial "D" and keep the Clan of D. a secret.',
      'His son, Ace, was born after his execution.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Roger_Divine_Departure.png'
    ],
    quotes: [
      "My wealth and treasures? If you want it, you can have it! Search for it! I left everything in that place!",
      "I am not going to die, partner...",
      "Inherited Will, the Destiny of Age, and the Dreams of People. As long as people continue to pursue the meaning of Freedom, these things will never cease to exist!"
    ],
    timeline: [
      { event: 'Born in Loguetown.', age: '0' },
      { event: 'Recruited Silvers Rayleigh, starting his legend.', age: '25' },
      { event: 'Allied with Garp to defeat Rocks D. Xebec at God Valley.', age: '32' },
      { event: 'Diagnosed with a terminal illness; recruited Crocus as doctor.', age: '50' },
      { event: 'Recruited Kozuki Oden, deciphered Road Poneglyphs, and reached Laugh Tale.', age: '52' },
      { event: 'Disbanded crew; fathered Ace; executed in Loguetown.', age: '53' }
    ],
    relatedCharacters: ['luffy', 'ace', 'shanks', 'whitebeard'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Gol_D._Roger_Anime_Infobox.png',
    themeColor: 'from-yellow-600 to-red-800'
  },
  {
    id: 'law',
    name: 'Trafalgar D. Water Law',
    japaneseName: 'トラファルガー・D・ワーテル・ロー',
    englishName: 'Trafalgar Law',
    nickname: 'Surgeon of Death (Shi no Gekai)',
    status: 'Alive',
    age: '26',
    birthday: 'October 6th',
    height: '191 cm (6\'3")',
    bounty: '3,000,000,000 ฿',
    bountyAmount: 3000000000,
    affiliations: ['Heart Pirates', 'Donquixote Pirates (former)', 'Shichibukai (former)', 'D. Clan'],
    crew: 'Heart Pirates',
    occupation: 'Captain, Doctor, Former Warlord of the Sea',
    devilFruit: 'Ope Ope no Mi (Op-Op Fruit)',
    hakiTypes: ['Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Spatial manipulation (ROOM), surgical sword attacks (Kikoku), Awakened K-Room',
    firstAppearance: {
      manga: 'Chapter 498',
      anime: 'Episode 392',
    },
    voiceActor: {
      japanese: 'Hiroshi Kamiya',
      english: 'Matthew Mercer',
    },
    biography: 'Trafalgar Law is the captain and doctor of the Heart Pirates. Born in Flevance, the "White City," he was the sole survivor of an amber-lead poisoning epidemic and subsequent massacre. He was taken in by the Donquixote Pirates, where Doflamingo\'s brother, Corazon, sacrificed his life to feed Law the Ope Ope no Mi to cure his illness. Driven by revenge, Law allied with Luffy to destroy Doflamingo\'s underworld empire and solve the mystery of the "Will of D."',
    personality: 'Law is quiet, calculating, and highly tactical. He easily gets annoyed by Luffy\'s childish and reckless behavior. He possesses an intense medical honor and values the lives of his crew.',
    abilities: [
      'Master Surgeon: Highly skilled doctor capable of diagnosing and operating on impossible medical conditions.',
      'Sword Kikoku: A cursed nodachi used to execute precision physical cuts inside his spatial dome.',
      'Will of D: Possesses the secret initial D, marking him as a natural enemy of the Gods.'
    ],
    powers: [
      'ROOM: Creates a translucent sphere where he acts as a surgeon, able to teleport, swap hearts, or dissect targets without blood or pain.',
      'Amputate / Shambles: Slices enemies or teleports items within his ROOM instantly.',
      'Gamma Knife: Creates a energy blade that destroys target internal organs directly.',
      'K-ROOM (Awakening): Coats his sword Kikoku in a ROOM, allowing it to stretch through solid mountains and trigger internal shockwaves (Shock Wille) that bypass external defenses.'
    ],
    relationships: [
      { name: 'Donquixote Rosinante (Corazon)', relation: 'Saviour / Father Figure', role: 'Sacrificed his life to cure Law and save him from Doflamingo.' },
      { name: 'Monkey D. Luffy', relation: 'Alliance Partner', role: 'Formed an alliance at Punk Hazard to take down Doflamingo and Kaido.' },
      { name: 'Donquixote Doflamingo', relation: 'Arch-Enemy', role: 'Cruel Warlord who killed Corazon; Law dedicated his life to destroying him.' },
      { name: 'Bepo', relation: 'First Mate', role: 'Mink polar bear who serves as Law\'s loyal navigator and companion.' }
    ],
    trivia: [
      'Law\'s name is inspired by the Battle of Trafalgar and the Battle of Waterloo.',
      'The Ope Ope no Mi is valued at 5 billion Berries due to its ultimate ability to grant "Perpetual Youth Surgery" at the cost of the user\'s life.',
      'Law dislikes bread and Umeboshi (pickled plums).'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Law_K_Room_Anime.png'
    ],
    quotes: [
      "The weak do not get to decide how they die.",
      "If you don't take a stand now, you will never get your chance. The gears have been broken!",
      "I'm a doctor. I'm not here to kill people, I'm here to save them."
    ],
    timeline: [
      { event: 'Survived the Flevance massacre and joined Doflamingo.', age: '10' },
      { event: 'Saved by Corazon, who fed him the Ope Ope no Mi; wept as Corazon died.', age: '13' },
      { event: 'Founded the Heart Pirates and sailed to Sabaody.', age: '24' },
      { event: 'Saved Luffy\'s life after the Marineford War.', age: '24' },
      { event: 'Became a Warlord after sending 100 pirate hearts to Marines.', age: '25' },
      { event: 'Defeated Big Mom alongside Eustass Kid in Wano, raising his bounty to 3 Billion.', age: '26' }
    ],
    relatedCharacters: ['luffy', 'shanks', 'roger'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.png',
    themeColor: 'from-cyan-800 to-sky-600'
  },
  {
    id: 'buggy',
    name: 'Buggy',
    japaneseName: 'バギー',
    englishName: 'Buggy the Clown',
    nickname: 'The Star Clown (Senryō Dōki)',
    status: 'Alive',
    age: '39',
    birthday: 'August 8th',
    height: '192 cm (6\'3½")',
    bounty: '3,189,000,000 ฿',
    bountyAmount: 3189000000,
    affiliations: ['Cross Guild', 'Buggy\'s Delivery (former)', 'Shichibukai (former)', 'Roger Pirates (former)'],
    crew: 'Cross Guild',
    occupation: 'Co-Leader of Cross Guild, Emperor of the Sea, Former Warlord',
    devilFruit: 'Bara Bara no Mi (Chop-Chop Fruit)',
    hakiTypes: [],
    fightingStyle: 'Bara Bara splits, hidden knives, Buggy Balls, Muggy Balls',
    firstAppearance: {
      manga: 'Chapter 9',
      anime: 'Episode 4',
    },
    voiceActor: {
      japanese: 'Shigeru Chiba',
      english: 'Mike McFarland',
    },
    biography: 'Buggy the Clown is one of the most uniquely successful pirates in the Grand Line. An apprentice on Gol D. Roger\'s ship alongside Shanks, he accidentally ate the Bara Bara no Mi, making him immune to slashing attacks. He spent years as a low-level pirate in East Blue before being arrested and sent to Impel Down. Through sheer luck, misunderstandings, and charisma, he co-led the massive prison break, became a Warlord, and was eventually declared an Emperor of the Sea after co-founding Cross Guild with Mihawk and Crocodile.',
    personality: 'Buggy is cowardly, greedy, vain, and highly opportunistic, though he possesses a strange, explosive charisma. He is easily triggered if anyone mentions his bright red nose, often executing people who laugh at it. Despite his cowardice, he has a hidden ambition to become the Pirate King.',
    abilities: [
      'Slashing Immunity: Absolute physical immunity to cuts, slices, and sword slashes.',
      'Explosive Engineering: Creator of high-destructive Buggy Balls and miniature Muggy Balls.',
      'Accidental Charisma: Uncanny talent to trick world-tier criminals into worshiping him.'
    ],
    powers: [
      'Bara Bara no Mi: A Paramecia fruit that allows him to split his body into floating segments, controlling them telekinetically while keeping his feet anchored to the ground.'
    ],
    relationships: [
      { name: 'Red-Haired Shanks', relation: 'Rival & Sworn Brother', role: 'Fellow Roger apprentice. Buggy blames Shanks for making him swallow his Devil Fruit.' },
      { name: 'Crocodile', relation: 'Business Partner / Oppressor', role: 'Co-founder of Cross Guild who frequently beats Buggy up in private.' },
      { name: 'Dracule Mihawk', relation: 'Business Partner / Oppressor', role: 'World\'s Greatest Swordsman who uses Buggy as a figurehead captain.' },
      { name: 'Gol D. Roger', relation: 'Captain', role: 'Buggy deeply respected Roger, weeping openly at his execution.' }
    ],
    trivia: [
      'Buggy is the first Devil Fruit user defeated by Luffy in the series.',
      'His rise to power is widely considered the greatest case of failing-upwards in anime history.',
      'He is the only Warlord who went on to become an Emperor.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Buggy_Cross_Guild_Wanted.png'
    ],
    quotes: [
      "Let's go claim the treasure of the world! Let's go steal the One Piece!",
      "Who are you calling red nose?!",
      "Flashily join me, boys!"
    ],
    timeline: [
      { event: 'Found by Roger in a treasure chest alongside Shanks.', age: '1' },
      { event: 'Accidentally swallowed the Bara Bara no Mi.', age: '12' },
      { event: 'Fought Luffy in Orange Town, losing his limbs and getting shrunk.', age: '37' },
      { event: 'Arrested and sent to Impel Down; escaped with Luffy.', age: '39' },
      { event: 'Became a Warlord; launched Buggy\'s Delivery mercenary group.', age: '39' },
      { event: 'Formed Cross Guild; named Emperor of the Sea.', age: '39' }
    ],
    relatedCharacters: ['luffy', 'shanks', 'roger'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Buggy_Anime_Post_Timeskip_Infobox.png',
    themeColor: 'from-red-700 to-indigo-500'
  },
  {
    id: 'akainu',
    name: 'Sakazuki (Akainu)',
    japaneseName: 'サカズキ (赤犬)',
    englishName: 'Fleet Admiral Sakazuki',
    nickname: 'Akainu (Red Dog)',
    status: 'Alive',
    age: '55',
    birthday: 'August 16th',
    height: '306 cm (10\'0½")',
    bounty: 'None (Marine)',
    bountyAmount: 0,
    affiliations: ['Marines', 'World Government'],
    crew: 'Marines',
    occupation: 'Fleet Admiral of the Marines, Former Admiral',
    devilFruit: 'Magu Magu no Mi (Magma-Magma Fruit)',
    hakiTypes: ['Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Magma-fused close combat, volcanic eruptions, physical haki blocks',
    firstAppearance: {
      manga: 'Chapter 397',
      anime: 'Episode 278',
    },
    voiceActor: {
      japanese: 'Fumihiko Tachiki',
      english: 'Andrew Love',
    },
    biography: 'Sakazuki, famously known by his alias Akainu, is the current Fleet Admiral of the Marines. An extremist adherent of "Absolute Justice," he believes that any evil or pirate presence must be entirely eliminated without compromise, regardless of civilian collateral. He was promoted from Admiral to Fleet Admiral after a grueling 10-day duel against Kuzan on Punk Hazard. He is responsible for executing Portgas D. Ace and giving Luffy his signature X-shaped chest scar.',
    personality: 'Akainu is cold, ruthless, and absolutely unyielding. He shows zero tolerance for Marine cowardice or desertion, executing soldiers who flee. He is deeply proud of the Marines\' power and loathes the celestial dragons\' interference, though he remains a loyal enforcer of the World Government\'s core authority.',
    abilities: [
      'Supreme Marine Authority: Commands the entire global Marine military fleet.',
      'Incredible Durability: Survived multiple full-force earthquake strikes from Whitebeard, returning to fight all commanders simultaneously.',
      'Advanced Armament Haki: Capable of creating large-scale defensive Haki shields to block devastating shockwaves.'
    ],
    powers: [
      'Magu Magu no Mi: A Logia fruit representing the highest tier of physical heat. His body becomes burning magma, melting swords, ships, and freezing icebergs instantly. His attacks possess the highest offensive power among all Devil Fruits.',
      'Great Eruption (Dai Funka): Turns his fist into a giant magma rock, throwing it like a volcanic blast.',
      'Ryusei Kazan (Meteor Volcano): Shoots hundreds of magma fists into the sky, raining devastating volcanic fire on the entire battlefield.'
    ],
    relationships: [
      { name: 'Kuzan (Aokiji)', relation: 'Former Colleague / Rival', role: 'Fought Sakazuki for 10 days on Punk Hazard; Kuzan lost his leg and defected.' },
      { name: 'Sengoku', relation: 'Predecessor', role: 'Former Fleet Admiral who recommended Kuzan instead of Sakazuki for the promotion.' },
      { name: 'Monkey D. Luffy', relation: 'Primary Target', role: 'Sakazuki targets Luffy as Dragon\'s son, inflicting his chest scar and aiming to execute him.' },
      { name: 'Koby', relation: 'Subordinate / Coward', role: 'Akainu tried to execute Koby at Marineford for pleading to stop the war.' }
    ],
    trivia: [
      'His alias "Akainu" translates to "Red Dog".',
      'His favorite foods are white rice and red pepper.',
      'Oda stated that if Akainu were the protagonist, he would find the One Piece within a single year due to his absolute, terrifying power.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Akainu_Meteor_Volcano.png'
    ],
    quotes: [
      "If we let even one of these criminals escape, our future is doomed! Absolute Justice must prevail!",
      "Evil cannot be tolerated!",
      "You are just a rubber log... fall into ash!"
    ],
    timeline: [
      { event: 'Joined the Marines alongside Borsalino (Kizaru).', age: '23' },
      { event: 'Ordered the destruction of the civilian evacuation ship at Ohara to ensure no scholar escaped.', age: '34' },
      { event: 'Spearheaded the defense of Marineford, manipulating Squard and executing Ace.', age: '53' },
      { event: 'Defeated Kuzan in a 10-day deathmatch on Punk Hazard, permanently altering the island\'s climate.', age: '53' },
      { event: 'Moved Marine Headquarters into the New World to directly challenge the Emperors.', age: '54' }
    ],
    relatedCharacters: ['luffy', 'ace', 'whitebeard'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Sakazuki_Anime_Post_Timeskip_Infobox.png',
    themeColor: 'from-red-900 to-amber-700'
  },
  {
    id: 'kuzan',
    name: 'Kuzan (Aokiji)',
    japaneseName: 'クザン (青雉)',
    englishName: 'Kuzan',
    nickname: 'Aokiji (Blue Pheasant)',
    status: 'Alive',
    age: '49',
    birthday: 'September 21st',
    height: '298 cm (9\'9")',
    bounty: '3,000,000,000 ฿',
    bountyAmount: 3000000000,
    affiliations: ['Blackbeard Pirates', 'Marines (former)', 'SWORD (theories)'],
    crew: 'Blackbeard Pirates',
    occupation: '10th Titanic Captain, Former Marine Admiral',
    devilFruit: 'Hie Hie no Mi (Chilly-Chilly Fruit)',
    hakiTypes: ['Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Freezing generation and touch-freezing, ice constructs, high-tier Marine physical combat',
    firstAppearance: {
      manga: 'Chapter 303',
      anime: 'Episode 225',
    },
    voiceActor: {
      japanese: 'Takehito Koyasu',
      english: 'Jason Douglas',
    },
    biography: 'Kuzan, famously known as Aokiji, is a former Marine Admiral. A calm, relaxed follower of "Lazy Justice," Kuzan represents a more empathetic and moderate viewpoint than his rival Sakazuki. After Sengoku\'s resignation, Kuzan fought Sakazuki on Punk Hazard for 10 days for the position of Fleet Admiral. After losing the duel and his left leg, Kuzan resigned from the Marines. He shocked the world by subsequently joining the Blackbeard Pirates as one of their Ten Titanic Captains.',
    personality: 'Kuzan is extremely relaxed, lazy, and sleepy, yet possesses a deep moral compass. Unlike Sakazuki\'s absolute justice, Kuzan values human life and was willing to let Nico Robin escape Ohara out of respect for Jaguar D. Saul.',
    abilities: [
      'High-level Haki: Extremely proficient in using Armament and Observation Haki.',
      'Sovereign Combat Strength: One of the strongest fighters in the world, capable of dueling Akainu for ten straight days.',
      'Extreme Cold Resistance: Immune to freezing temperatures due to his Devil Fruit.'
    ],
    powers: [
      'Hie Hie no Mi: A Logia fruit allowing him to create, control, and transform his body into ice. He can freeze entire oceans in seconds.',
      'Ice Age: Freezes a massive section of the ocean, lasting for over a week.',
      'Ice Saber: Creates a solid sword of ice by blowing on grass.'
    ],
    relationships: [
      { name: 'Sakazuki (Akainu)', relation: 'Former Colleague / Rival', role: 'Fought for 10 days on Punk Hazard; Kuzan lost his leg and defected.' },
      { name: 'Monkey D. Garp', relation: 'Mentor', role: 'Kuzan was Garp\'s first official apprentice in the Marines.' },
      { name: 'Nico Robin', relation: 'Observer / Friend', role: 'Saved her from Ohara and observed her life, telling her to find her own way.' }
    ],
    trivia: [
      'His design is based on the famous Japanese actor Yusaku Matsuda.',
      'Kuzan rides a bicycle named Ao Chari across the sea by freezing a small path of ice.',
      'His favorite foods are coffee, milk, and liquor.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Kuzan_Ice_Age.png'
    ],
    quotes: [
      "Justice is not simple... It changes shape depending on where you stand.",
      "The thing called \"justice\" changes its shape... depending on what side you are on!",
      "I'm just Kuzan. I'm still who I was."
    ],
    timeline: [
      { event: 'Joined the Marines and became Garp\'s apprentice.', age: '19' },
      { event: 'Let Nico Robin escape Ohara after killing Jaguar D. Saul.', age: '28' },
      { event: 'Fought Akainu for 10 days on Punk Hazard; resigned from Marines.', age: '47' },
      { event: 'Joined the Blackbeard Pirates as a Titanic Captain.', age: '48' }
    ],
    relatedCharacters: ['luffy', 'robin', 'akainu'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Kuzan_Anime_Post_Timeskip_Infobox.png',
    themeColor: 'from-blue-700 to-cyan-900'
  },
  {
    id: 'garp',
    name: 'Monkey D. Garp',
    japaneseName: 'モンキー・D・ガープ',
    englishName: 'Monkey D. Garp',
    nickname: 'Garp the Fist (Genkotsu no Gāpu), Marine Hero',
    status: 'Unknown',
    age: '78',
    birthday: 'May 2nd',
    height: '287 cm (9\'5")',
    bounty: '3,000,000,000 ฿',
    bountyAmount: 3000000000,
    affiliations: ['Marines', 'World Government', 'D. Clan'],
    crew: 'Marines',
    occupation: 'Marine Vice Admiral, Marine Hero, Former Instructor',
    devilFruit: 'None',
    hakiTypes: ['Haoshoku (Conqueror\'s)', 'Busoshoku (Armament)', 'Kenbunshoku (Observation)'],
    fightingStyle: 'Supreme physical hand-to-hand combat, galaxy-splitting Haki-infused fist punches, giant cannonball throwing',
    firstAppearance: {
      manga: 'Chapter 92',
      anime: 'Episode 68',
    },
    voiceActor: {
      japanese: 'Hiroshi Naka',
      english: 'Brian Mathis',
    },
    biography: 'Monkey D. Garp is a legendary Marine Vice Admiral, celebrated globally as the "Marine Hero." He rose to absolute prominence after teaming up with the Pirate King Gol D. Roger to defeat the Rocks Pirates in the God Valley Incident. Despite multiple offers to become an Admiral, Garp declined them all to avoid serving the Celestial Dragons directly. He is the father of Monkey D. Dragon, grandfather of Luffy, and adoptive grandfather of Portgas D. Ace.',
    personality: 'Garp is eccentric, loud, boisterous, and deeply affectionate, though he often expresses his love through "Fists of Love." Like his grandson Luffy, he has an insatiable appetite, loves donuts, and can fall asleep mid-conversation.',
    abilities: [
      'Supreme Conqueror\'s Haki: Highly proficient in advanced Conqueror\'s Haki infusion.',
      'Colossal Strength: Can throw iron cannonballs larger than entire ships with bare hands.',
      'Heroic Reputation: Highly inspiring presence across all Marine forces.'
    ],
    powers: [
      'Galaxy Impact: An advanced Conqueror Haki punch that disintegrates entire city blocks without touching them.',
      'Fist of Love: A physical punch that bypasses Luffy\'s rubber body through raw force and Haki.'
    ],
    relationships: [
      { name: 'Monkey D. Luffy', relation: 'Grandfather', role: 'Trained Luffy aggressively to make him a strong Marine, though Luffy became a pirate.' },
      { name: 'Portgas D. Ace', relation: 'Adoptive Grandfather', role: 'Entrusted by Roger to raise Ace secretly with Curly Dadan.' },
      { name: 'Gol D. Roger', relation: 'Rival & Friend', role: 'Fierce rivals who trusted each other as much as their own crewmates.' },
      { name: 'Kuzan (Aokiji)', relation: 'Former Disciple', role: 'Trained Kuzan as his first official Marine apprentice.' },
      { name: 'Koby', relation: 'Protégé / Apprentice', role: 'Trained Koby to become the "Future of the Marines." Garp raided Hachinosu to save him.' }
    ],
    trivia: [
      'Garp is one of the very few Marines who carry the "Will of D."',
      'His favorite food is rice crackers and curry.',
      'He was the first character shown to bypass Luffy\'s rubber immunities using a punch.'
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Garp_Galaxy_Impact_Anime.png'
    ],
    quotes: [
      "If you want to save the future, you have to be willing to sacrifice your own life!",
      "No matter what kind of pirate you become, I will always love you as my grandson!",
      "Curse you, Roger... why did you have to leave this to me?!"
    ],
    timeline: [
      { event: 'Joined the Marines alongside Sengoku.', age: '18' },
      { event: 'Defeated Rocks D. Xebec at God Valley alongside Roger, becoming the "Marine Hero".', age: '40' },
      { event: 'Entrusted with Ace by Roger; placed him with Dadan.', age: '56' },
      { event: 'Refused to fight Ace at Marineford, but was forced to stand guard; struck down Marco.', age: '76' },
      { event: 'Raided Hachinosu to rescue Koby, clashing with Kuzan and Blackbeard forces.', age: '78' }
    ],
    relatedCharacters: ['luffy', 'ace', 'roger', 'akainu', 'law'],
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Monkey_D._Garp_Anime_Infobox.png',
    themeColor: 'from-blue-600 to-indigo-800'
  }
];
