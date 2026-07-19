import { DevilFruit } from '../types';

export const devilFruits: DevilFruit[] = [
  {
    id: 'gomugomu',
    name: 'Gomu Gomu no Mi / Hito Hito no Mi, Model: Nika',
    japaneseName: 'ヒトヒトの実 モデル：ニカ',
    type: 'Mythical Zoan',
    user: 'Monkey D. Luffy',
    appearance: 'A violet, round melon-like fruit with spiral swirls on its outer skin and a curly stem.',
    strengths: [
      'Gives the user\'s body the properties of absolute rubber, rendering them immune to electric shock, bullet fire, and heavy physical impacts.',
      'Grants unparalleled structural elasticity, allowing limbs to stretch infinitely.',
      'Upon Awakening (Gear 5th), grants the user absolute freedom of action, enabling them to alter the physical properties of their environment and manipulate matter as if it were cartoonish rubber.'
    ],
    weaknesses: [
      'Standard sea water submergences and Seastone cuffs drain all physical energy.',
      'Highly vulnerable to slashing and stabbing weapons.',
      'Extreme physical exhaustion and high metabolic resource depletion when utilizing high gear levels.'
    ],
    awakening: 'Sun God Nika Awakening: The user\'s heart beats in the rhythmic cadence of the "Drums of Liberation." The user\'s hair turns pure white, their eyes glow with golden rings, and they acquire the ability to manipulate reality and environments through pure, uninhibited imagination.',
    techniques: [
      { name: 'Gomu Gomu no Red Hawk', description: 'Infuses a stretched arm with Armament Haki and high speed, triggering a friction-based explosion that burns underwater.' },
      { name: 'Gomu Gomu no Kong Gun', description: 'Compresses a fist into a Gear 4th fore-arm and releases a devastating, jet-propulsion impact.' },
      { name: 'Gomu Gomu no Bajrang Gun', description: 'Inflates the fist to the physical size of a massive island, infusing it with Advanced Conqueror\'s Haki to punch through land and sky.' }
    ],
    animeAppearances: 'Episode 1 onwards',
    mangaAppearances: 'Chapter 1 onwards',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Gomu_Gomu_no_Mi_Infobox.png'
  },
  {
    id: 'meramera',
    name: 'Mera Mera no Mi (Flame-Flame Fruit)',
    japaneseName: 'メラメラの実',
    type: 'Logia',
    user: 'Sabo (previously Portgas D. Ace)',
    appearance: 'A fiery round orange fruit covered in flame-shaped swirls, featuring a curly green stem with T-shaped T-swirls.',
    strengths: [
      'Allows the user to transform their physical body into pure fire, letting normal physical attacks pass through them harmlessly.',
      'Enables the creation, control, and manipulation of high-density fire blasts, fire walls, and fire-arrows.',
      'Drastically increases warmth and grants immunity to cold climates.'
    ],
    weaknesses: [
      'Inferior in elemental superiority to the Magu Magu no Mi (Magma-Magma Fruit), which can burn even fire.',
      'Standard Logia elemental vulnerabilities (Armament Haki strikes bypass intangibility).'
    ],
    awakening: 'Unknown / Unrevealed in canon, though theoretical awakening would allow permanent transformation of local terrains into volcanic fire-fields.',
    techniques: [
      { name: 'Hiken (Fire Fist)', description: 'Transforms the fist into a massive stream of expanding fire, capable of incinerating entire fleets of ships.' },
      { name: 'Higan (Fire Gun)', description: 'Points index and middle fingers like guns, shooting rapid, bullet-like sparks of fire.' },
      { name: 'Dai Enkai: Entei (Flame Emperor)', description: 'Gathers a colossal spiraling sphere of fire that resembles a small sun, throwing it down to crush massive geographical targets.' }
    ],
    animeAppearances: 'Episode 94 (Ace), Episode 663 (Sabo)',
    mangaAppearances: 'Chapter 154 (Ace), Chapter 731 (Sabo)',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Mera_Mera_no_Mi_Infobox.png'
  },
  {
    id: 'guragura',
    name: 'Gura Gura no Mi (Tremor-Tremor Fruit)',
    japaneseName: 'グラグラの実',
    type: 'Paramecia',
    user: 'Marshall D. Teach (previously Edward Newgate)',
    appearance: 'A light-blue, pear-shaped fruit with spiral swirls resembling breaking cracks along its skin, topped with a wavy silver stem.',
    strengths: [
      'Enables the user to generate colossal localized earthquakes, vibrations, and shockwaves through any medium (land, sea, air).',
      'Capable of breaking the very atmosphere, tilting oceans, and creating giant tsunamis.',
      'Widely feared as the Devil Fruit with the physical capacity to destroy the entire world.'
    ],
    weaknesses: [
      'Vibrations are not selective; shockwaves can harm the user\'s own allies and ships if not precisely controlled.',
      'Requires enormous physical strength to activate and contain.'
    ],
    awakening: 'Unconfirmed, but allows high concentration of vibration energy into localized weapons, amplifying strike force exponentially.',
    techniques: [
      { name: 'Kaiken (Sea Earthquake)', description: 'Shatters the air with a punch, creating massive, underwater seismic cracks that trigger colossal double-tsunamis.' },
      { name: 'Kabuto (Helmet Shockwave)', description: 'Concentrates a spherical bubble of seismic vibration around the fist, delivering a devastating point-blank rupture to the head of a target.' },
      { name: 'Shimakoshi (Island Tilting)', description: 'Grabs hold of the air itself and pulls down, physically tilting the ocean and the target island.' }
    ],
    animeAppearances: 'Episode 151 (Whitebeard), Episode 486 (Blackbeard)',
    mangaAppearances: 'Chapter 234 (Whitebeard), Chapter 577 (Blackbeard)',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Gura_Gura_no_Mi_Infobox.png'
  },
  {
    id: 'opeope',
    name: 'Ope Ope no Mi (Op-Op Fruit)',
    japaneseName: 'オペオペの実',
    type: 'Paramecia',
    user: 'Trafalgar D. Water Law',
    appearance: 'A distinct, crimson heart-shaped fruit with spiral patterns, featuring a curly yellow stem.',
    strengths: [
      'Allows the user to create a spherical space called "ROOM" where they can telekinetically slice, swap, and manipulate anything inside.',
      'Allows surgical operations that bypass physical tissue, curing terminal poisons and diseases.',
      'Grants the ability to perform the "Perpetual Youth Surgery," granting a single target eternal life.'
    ],
    weaknesses: [
      'Creating and maintaining the "ROOM" drains the user\'s physical stamina directly.',
      'Performing the Perpetual Youth Surgery kills the fruit user.',
      'Requires extensive medical knowledge to execute advanced surgical techniques.'
    ],
    awakening: 'K-ROOM / R-ROOM: The user can attach a specialized ROOM directly to their weapon, enabling the blade to stretch through solid mountains and trigger internal seismic shockwaves directly inside the target.',
    techniques: [
      { name: 'Shambles', description: 'Swaps the physical locations of any two items or people inside the active ROOM instantly.' },
      { name: 'Radio Knife', description: 'Slices a target with high-frequency energy cuts, preventing them from re-attaching their body parts for a short duration.' },
      { name: 'Shock Wille', description: 'An awakened technique that sends an electric, high-density shockwave directly into a target\'s organs, bypassing heavy armor or scales.' }
    ],
    animeAppearances: 'Episode 392 onwards',
    mangaAppearances: 'Chapter 498 onwards',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Ope_Ope_no_Mi_Infobox.png'
  },
  {
    id: 'phoenix',
    name: 'Tori Tori no Mi, Model: Phoenix',
    japaneseName: 'トリトリの実 モデル：フェニックス',
    type: 'Mythical Zoan',
    user: 'Marco',
    appearance: 'A spherical, golden-yellow pineapple-like fruit covered in cyan flame-like spiral swirls, with a leafy blue crown.',
    strengths: [
      'Allows the user to transform into a magnificent phoenix of blue flames, flying with high speed.',
      'The "Blue Flames of Resurrection" grant instant, near-infinite physical regeneration, healing any wound as long as stamina exists.',
      'Enables the user to heal others\' wounds with their fiery energy.'
    ],
    weaknesses: [
      'The blue flames do not possess the heat of natural fire, meaning they cannot be used to burn enemies.',
      'Regeneration has a hard physical limit; once stamina is depleted, the user will sustain natural wounds.'
    ],
    awakening: 'Unknown, but grants an absolute aura of regeneration, boosting the stamina and health of everyone in the surrounding area.',
    techniques: [
      { name: 'Feng Huang Seal', description: 'Unleashes a powerful shockwave of blue flame from the claws of the phoenix.' },
      { name: 'Blue Flames of Resurrection', description: 'Wraps the body in cyan fires, instantly reconstructing limbs, bone structures, and organs.' }
    ],
    animeAppearances: 'Episode 409 onwards',
    mangaAppearances: 'Chapter 553 onwards',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Tori_Tori_no_Mi,_Model_Phoenix_Infobox.png'
  },
  {
    id: 'magumagu',
    name: 'Magu Magu no Mi (Magma-Magma Fruit)',
    japaneseName: 'マグマグの実',
    type: 'Logia',
    user: 'Sakazuki (Akainu)',
    appearance: 'A dark red melon-like fruit composed of rocky, volcanic plates that look like cooling lava, featuring spiral steam plumes.',
    strengths: [
      'Transforms the user\'s body into pure molten magma, vaporizing steel swords and melting icebergs.',
      'Possesses the absolute highest offensive physical damage tier among all Devil Fruits, burning through natural fire.',
      'Allows volcanic projection, launching rainfalls of burning stone.'
    ],
    weaknesses: [
      'Heavy physical attacks bypass intangibility if infused with highly advanced Armament Haki.',
      'Slow and heavy physical movement, though offset by volcanic flight.'
    ],
    awakening: 'Unconfirmed, but responsible for permanently changing half of Punk Hazard into a volcanic hellscape of active magma craters and high heat.',
    techniques: [
      { name: 'Dai Funka (Great Eruption)', description: 'Launches a colossally large fist of burning magma, resembling a volcanic volcanic eruption.' },
      { name: 'Ryusei Kazan (Meteor Volcano)', description: 'Launches hundreds of magma-fists into the sky, raining down massive destructive fire on entire islands.' }
    ],
    animeAppearances: 'Episode 278 onwards',
    mangaAppearances: 'Chapter 397 onwards',
    image: 'https://onepiece.fandom.com/wiki/Special:FilePath/Magu_Magu_no_Mi_Infobox.png'
  }
];
