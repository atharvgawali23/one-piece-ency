import { Crew } from '../types';

export const crews: Crew[] = [
  {
    id: 'strawhats',
    name: 'Straw Hat Pirates (Mugiwara no Ichimi)',
    captain: 'Monkey D. Luffy',
    ship: 'Thousand Sunny (previously Going Merry)',
    jollyRoger: '💀 Straw Hat Skull: A traditional skull and crossbones wearing Luffy\'s signature straw hat.',
    territories: ['Fish-Man Island', 'Wano Country', 'Sphinx Island (de-facto)'],
    history: 'Founded in East Blue by Monkey D. Luffy, the Straw Hats are one of the most infamous and rapidly rising crews in the world. Consisting of exactly ten elite members, each representing a key specialization (e.g., navigator, doctor, archaeologist), they have defeated multiple Warlords, invaded all three judicial Marine strongholds, defeated the Emperor Kaido, and declared war on the entire World Government.',
    battles: [
      'Arlong Park Siege (vs. Arlong Pirates)',
      'Alabasta Civil War (vs. Baroque Works)',
      'Enies Lobby Raid (vs. CP9)',
      'Summit War of Marineford (Luffy only)',
      'Raid on Onigashima (vs. Beasts Pirates & Big Mom Alliance)'
    ],
    members: [
      { id: 'luffy', name: 'Monkey D. Luffy', role: 'Captain' },
      { id: 'zoro', name: 'Roronoa Zoro', role: 'First Mate / Swordsman' },
      { id: 'nami', name: 'Nami', role: 'Navigator' },
      { id: 'usopp', name: 'Usopp', role: 'Sniper' },
      { id: 'sanji', name: 'Vinsmoke Sanji', role: 'Chef' },
      { id: 'chopper', name: 'Tony Tony Chopper', role: 'Doctor' },
      { id: 'robin', name: 'Nico Robin', role: 'Archaeologist' },
      { id: 'franky', name: 'Franky', role: 'Shipwright' },
      { id: 'brook', name: 'Brook', role: 'Musician' },
      { id: 'jinbe', name: 'Jinbe', role: 'Helmsman' }
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Straw_Hat_Pirates_Jolly_Roger.png'
    ],
    bountyTotal: '8,816,001,000 ฿'
  },
  {
    id: 'redhair',
    name: 'Red Hair Pirates (Akagami Kaizokudan)',
    captain: 'Shanks',
    ship: 'Red Force',
    jollyRoger: '💀 Red Scar Skull: A skull with two crossed swords, featuring a red three-line scar over the left eye.',
    territories: ['Elbaf (Giant Warrior Kingdom)', 'Ruins of Kid\'s Territory', 'Various East Blue islands'],
    history: 'Formed by Shanks after the execution of Gol D. Roger, the Red Hair Pirates are famed for being the most balanced and impenetrable crew on the seas. They have no Devil Fruit users among their top officers, relying entirely on supreme Haki and coordination. They represent the ultimate model of pirate brotherhood.',
    battles: [
      'Paramount War Intervention (Stopped Marineford War)',
      'Defense of Elbaf (vs. Kid Pirates)'
    ],
    members: [
      { id: 'shanks', name: 'Shanks', role: 'Captain' },
      { name: 'Benn Beckman', role: 'First Mate / Chief Officer' },
      { name: 'Lucky Roux', role: 'Combatant / Cook' },
      { name: 'Yasopp', role: 'Sniper' },
      { name: 'Limejuice', role: 'Officer' },
      { name: 'Bonk Punch', role: 'Musician' },
      { name: 'Monster', role: 'Musician (Monkey)' }
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Red_Hair_Pirates_Jolly_Roger.png'
    ],
    bountyTotal: 'Over 10,000,000,000 ฿'
  },
  {
    id: 'whitebeard',
    name: 'Whitebeard Pirates (Shirohige Kaizokudan)',
    captain: 'Edward Newgate',
    ship: 'Moby Dick (destroyed)',
    jollyRoger: '💀 Crescent Mustache: A grinning skull sporting Whitebeard\'s crescent mustache, set against a violet cross.',
    territories: ['Fish-Man Island (former)', 'Sphinx Island', 'Foodvalten'],
    history: 'A massive armada divided into 16 divisions, the Whitebeard Pirates were the most feared crew during the Golden Era. To Whitebeard, the crew was his family, and he loved all members as his children. Following Whitebeard and Ace\'s tragic deaths at Marineford, the remnant crew fought the Blackbeard Pirates in the Payback War, eventually disbanding.',
    battles: [
      'Battle of the Edd War (with Roger vs. Shiki)',
      'Legendary 3-Day Clash (vs. Roger Pirates)',
      'Summit War of Marineford (vs. Marine Headquarters & Shichibukai)',
      'The Payback War (vs. Blackbeard Pirates)'
    ],
    members: [
      { id: 'whitebeard', name: 'Edward Newgate', role: 'Captain (Deceased)' },
      { name: 'Marco the Phoenix', role: '1st Division Commander / Doctor' },
      { id: 'ace', name: 'Portgas D. Ace', role: '2nd Division Commander (Deceased)' },
      { name: 'Jozu', role: '3rd Division Commander' },
      { name: 'Vista', role: '5th Division Commander (Swordsman)' },
      { name: 'Thatch', role: '4th Division Commander (Deceased)' }
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Whitebeard_Pirates_Jolly_Roger.png'
    ],
    bountyTotal: 'Estimated over 15,000,000,000 ฿'
  },
  {
    id: 'blackbeard',
    name: 'Blackbeard Pirates (Kurohige Kaizokudan)',
    captain: 'Marshall D. Teach',
    ship: 'Saber of Xebec',
    jollyRoger: '💀 Three Skulls Flag: Three merged weeping skulls representing Blackbeard\'s strange "multiple bodies" biology.',
    territories: ['Hachinosu (Pirate Island)', 'Various underworld sectors'],
    history: 'Founded by Marshall D. Teach after murdering his crewmate Thatch on the Moby Dick. They initially consisted of five members but recruited the most terrifying Level 6 prisoners of Impel Down and former Admiral Kuzan. Famed for actively hunting and stealing powerful Devil Fruits.',
    battles: [
      'Duel on Banaro Island (vs. Portgas D. Ace)',
      'Invasion of Impel Down',
      'Summit War Assassination (vs. Whitebeard)',
      'Payback War (vs. Whitebeard Remnants)',
      'Seizure of Hachinosu (vs. Marines / SWORD)'
    ],
    members: [
      { name: 'Marshall D. Teach (Blackbeard)', role: 'Admiral' },
      { name: 'Kuzan (Aokiji)', role: '10th Titanic Captain (Former Admiral)' },
      { name: 'Jesus Burgess', role: '1st Titanic Captain' },
      { name: 'Shiryu of the Rain', role: '2nd Titanic Captain (Ex-Impel Down Warden)' },
      { name: 'Van Augur', role: '3rd Titanic Captain (Sniper)' },
      { name: 'Laffitte', role: '5th Titanic Captain (Chief of Staff)' }
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Blackbeard_Pirates_Jolly_Roger.png'
    ],
    bountyTotal: 'Over 11,500,000,000 ฿'
  },
  {
    id: 'roger',
    name: 'Roger Pirates (Rojā Kaizokudan)',
    captain: 'Gol D. Roger',
    ship: 'Oro Jackson',
    jollyRoger: '💀 Mustache Skull: A laughing skull with Gol D. Roger\'s curved black mustache.',
    territories: ['None (sought adventure, not dominion)'],
    history: 'The legendary crew that completed the conquest of the Grand Line. Reaching the final island, Laugh Tale, they uncovered the truth of the Void Century, the Ancient Weapons, and the mysterious treasure. Roger disbanded the crew shortly before surrendering to his death.',
    battles: [
      'God Valley Incident (vs. Rocks Pirates)',
      'Edd War (vs. Golden Lion Shiki Armada)',
      'Legendary Island Duel (vs. Whitebeard Pirates)'
    ],
    members: [
      { id: 'roger', name: 'Gol D. Roger', role: 'Captain (Deceased)' },
      { name: 'Silvers Rayleigh (Dark King)', role: 'First Mate / Vice-Captain' },
      { name: 'Scopper Gaban', role: 'Left-Hand Man' },
      { name: 'Crocus', role: 'Ship Doctor' },
      { id: 'shanks', name: 'Shanks', role: 'Apprentice' },
      { id: 'buggy', name: 'Buggy the Clown', role: 'Apprentice' },
      { name: 'Kozuki Oden', role: 'Archaeologist (Deceased)' }
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Roger_Pirates_Jolly_Roger.png'
    ],
    bountyTotal: 'Historical Peak: Over 20,000,000,000 ฿'
  },
  {
    id: 'crossguild',
    name: 'Cross Guild (Kurosu Girudo)',
    captain: 'Buggy (Figurehead) / Crocodile & Mihawk (True Leaders)',
    ship: 'Big Top (Re-styled as Buggy’s head)',
    jollyRoger: '💀 Crossed Sabers: A grinning clown skull framed by a large red collar and two heavy crossed pirate swords.',
    territories: ['Empress Island', 'Buggy\'s Delivery bases'],
    history: 'A revolutionary syndicate formed after the dissolution of the Warlords (Shichibukai). Crocodile and Dracule Mihawk originally formed the union to fund themselves, but due to a comical graphic-design error by Buggy\'s subordinates, Buggy was depicted as the supreme leader. Cross Guild is famous for placing bounties on Marines, turning the tables on the World Government.',
    battles: [
      'Marine Bounty Hunt Declarations'
    ],
    members: [
      { id: 'buggy', name: 'Buggy', role: 'Figurehead Leader / Emperor' },
      { name: 'Sir Crocodile', role: 'Co-Founder (Sand-Sand Fruit user)' },
      { name: 'Dracule Mihawk', role: 'Co-Founder (World\'s Greatest Swordsman)' },
      { name: 'Mr. 3 (Galdino)', role: 'Officer' },
      { name: 'Alvida', role: 'Officer' },
      { name: 'Cabaji', role: 'Chief of Staff' }
    ],
    gallery: [
      'https://onepiece.fandom.com/wiki/Special:FilePath/Cross_Guild_Jolly_Roger.png'
    ],
    bountyTotal: '8,848,000,000 ฿'
  }
];
