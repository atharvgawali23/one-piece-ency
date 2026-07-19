import { useState } from 'react';
import { Compass, Shield, Swords, Scroll, Landmark, Award, Skull, ChevronRight, HelpCircle, Star, Sparkles, UserCheck } from 'lucide-react';
import { weapons } from '../data/other';
import { characters } from '../data/characters';

interface LoreSectionProps {
  viewId: string; // 'weapons' | 'haki' | 'wg' | 'ancient' | 'poneglyphs' | 'pirates' | 'marines'
  onSelectCharacter: (id: string) => void;
}

export default function LoreSection({ viewId, onSelectCharacter }: LoreSectionProps) {
  
  // 1. Haki Personality Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useState<any | null>(null);

  // 2. Poneglyph translator state
  const [translationInput, setTranslationInput] = useState('');
  const [decipheredText, setDecipheredText] = useState('');

  // Personality quiz data
  const quizQuestions = [
    {
      q: "If a massive Marine Armada surrounds your ship, what is your initial instinct?",
      options: [
        { text: "Glittering Conqueror: Release a wave of sheer willpower to knock them unconscious instantly.", type: "Conqueror" },
        { text: "Iron Shield: Harden your fists with invisible armor and smash through their front line.", type: "Armament" },
        { text: "Silent Ghost: Sense their emotional paths and slip away through the gaps in their formation.", type: "Observation" }
      ]
    },
    {
      q: "What defines the ultimate concept of 'Power' to you?",
      options: [
        { text: "Absolute Domination: The absolute right to rule and lead with unstoppable ambition.", type: "Conqueror" },
        { text: "Indestructible Body: The physical force to bypass any defense and endure any impact.", type: "Armament" },
        { text: "Omniscience: The ability to predict danger before it materializes, seeing the future.", type: "Observation" }
      ]
    },
    {
      q: "Pick a legendary mentor whose training philosophy speaks to you:",
      options: [
        { text: "Silvers Rayleigh: Training in a wild beast jungle to cultivate natural supreme aura.", type: "Conqueror" },
        { text: "Hyogoro the Flower: Channeling internal spiritual flow (Ryou) through your arms.", type: "Armament" },
        { text: "Charlotte Katakuri: Total calm and meditation to attain absolute focus.", type: "Observation" }
      ]
    }
  ];

  const handleQuizAnswer = (type: string) => {
    const updatedAnswers = [...answers, type];
    setAnswers(updatedAnswers);

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results
      const counts = updatedAnswers.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      let maxType = "Observation";
      let maxCount = 0;
      for (const k in counts) {
        const v = counts[k];
        if (v > maxCount) {
          maxCount = v;
          maxType = k;
        }
      }

      let resultProfile = {
        name: "Observation Haki (Kenbunshoku)",
        jp: "見聞色の覇気",
        desc: "You possess exceptional sensory awareness. By tuning into the spiritual breath of the universe, you can sense the presence, strength, and emotions of others. Advanced users like Luffy and Katakuri can even peer seconds into the future, rendering traditional physical attacks obsolete.",
        icon: Compass,
        color: "text-blue-400 border-blue-500/20 bg-blue-500/5"
      };

      if (maxType === "Conqueror") {
        resultProfile = {
          name: "Conqueror's Haki (Haoshoku)",
          jp: "覇王色の覇気",
          desc: "You are one in a million. Born with the quality of a King, your spirit is so commanding that you can overpower the minds of lesser beings. In advanced stages, you can infuse this royal aura directly into physical slashes and punches, cracking the very heavens as a legendary Emperor of the sea.",
          icon: Skull,
          color: "text-red-400 border-red-500/20 bg-red-500/5"
        };
      } else if (maxType === "Armament") {
        resultProfile = {
          name: "Armament Haki (Busoshoku)",
          jp: "武装色の覇気",
          desc: "You channel raw physical and spiritual willpower as an invisible steel shield. This grants unparalleled offensive and defensive force. In the New World, this is the ultimate weapon to bypass the fluid invulnerability of Logia Devil Fruit users. Advanced users can project this force outward as devastating shockwaves (Ryou).",
          icon: Shield,
          color: "text-amber-400 border-amber-500/20 bg-amber-500/5"
        };
      }

      setQuizResult(resultProfile);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizResult(null);
  };

  // Poneglyph Decipher translator
  const handleDecipherInput = (text: string) => {
    setTranslationInput(text);
    // Convert to mysterious One Piece glyph runes
    const glyphs = "𓃠𓃡𓃢𓃣𓃤𓃥𓃦𓃧𓃨𓃩𓃪𓃫𓃬𓃭𓃮𓃯𓃰𓃱𓃲𓃳𓃴𓃵𓃶𓃷𓃸𓃹𓃺𓃻𓃼𓃽𓃾𓃿𓄀𓄁𓄂𓄃𓄄𓄅𓄆𓄇𓄈𓄉𓄊𓄋𓄌𓄍𓄎𓄏𓄐𓄑𓄒𓄓𓄔𓄕𓄖𓄗𓄘𓄙𓄚𓄛𓄜𓄝𓄞𓄟𓄠𓄡𓄢𓄣𓄤𓄥";
    let output = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const glyphIndex = charCode % glyphs.length;
      output += glyphs[glyphIndex] + " ";
    }
    setDecipheredText(output);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* 1. WEAPONS LORE SECTION */}
      {viewId === 'weapons' && (
        <div className="space-y-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
              The Graded Meito Swords
            </h1>
            <p className="text-xs text-slate-400">Examine the mythical craftsmanship of the legendary blacksmiths, rated by structural grade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weapons.map((w, idx) => (
              <div key={idx} className="glass-card border border-gold-500/10 rounded-xl overflow-hidden flex flex-col sm:flex-row hover:border-gold-500/25 transition-all group">
                <div className="w-full sm:w-1/3 h-48 sm:h-auto relative bg-navy-950">
                  <img 
                    src={w.image} 
                    alt={w.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-mono bg-navy-950/80 border border-gold-500/20 text-gold-400 uppercase">
                    {w.type}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-red-400 uppercase border border-red-500/20 bg-red-500/5 px-2 py-0.5 rounded">
                      {w.grade}
                    </span>
                    <h3 className="text-lg font-bold text-slate-100 font-display mt-2 group-hover:text-gold-400 transition-colors">
                      {w.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">{w.japaneseName}</p>
                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-sans line-clamp-3">
                      {w.history}
                    </p>
                  </div>

                  <div className="border-t border-slate-800/80 pt-3 text-[11px] font-mono text-slate-400 flex justify-between items-center">
                    <span>Owner: <strong>{w.currentOwner}</strong></span>
                    <span className="text-slate-500 text-[10px]">Previous: {w.previousOwners[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. HAKI MASTERY LORE */}
      {viewId === 'haki' && (
        <div className="space-y-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
              The Three Spiritual Energies: Haki Guide
            </h1>
            <p className="text-xs text-slate-400">Deepen your understanding of spiritual power, and find your own spiritual affinity.</p>
          </div>

          {/* Haki Info block cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Kenbunshoku (Observation)",
                jp: "見聞色",
                desc: "Heightens individual senses. Allows sensing life force, presence, emotional changes, and combat trajectory. Advanced application: Future Sight (Katakuri, Luffy).",
                icon: Compass,
                color: "text-blue-400 border-blue-500/10 bg-blue-500/5"
              },
              {
                title: "Busoshoku (Armament)",
                jp: "武装色",
                desc: "Converts willpower into standard spiritual armor, boosting strike defense and bypassing fluid Logia protection. Advanced: Flowing Armament/Ryou (Hyogoro).",
                icon: Shield,
                color: "text-amber-400 border-amber-500/10 bg-amber-500/5"
              },
              {
                title: "Haoshoku (Conqueror's)",
                jp: "覇王色",
                desc: "An extremely rare aura possessed by only one in a million who have royal potential. Knocks out weak-willed minds. Advanced: Conqueror's Infusion.",
                icon: Skull,
                color: "text-red-400 border-red-500/10 bg-red-500/5"
              }
            ].map((haki, idx) => {
              const Icon = haki.icon;
              return (
                <div key={idx} className={`p-5 rounded-xl border ${haki.color} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <Icon className="w-6 h-6" />
                    <span className="text-[10px] font-mono uppercase tracking-widest bg-navy-950 px-2 py-0.5 rounded border border-slate-800">
                      {haki.jp}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100 font-display">{haki.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{haki.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Interactive Haki Quiz section */}
          <div className="glass-card border border-gold-500/15 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-navy-950/20 to-navy-950/60 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-gold-400/5 border border-gold-500/25">
                <Sparkles className="w-6 h-6 text-gold-400 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-slate-100">Spiritual Affinity Assessment</h3>
                <p className="text-xs text-slate-400">Discover which branch of Haki your soul naturally resonates with.</p>
              </div>
            </div>

            {!quizStarted ? (
              <div className="text-center py-6 space-y-4">
                <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Luffy awakened his Haki through grueling combat and pure emotional triggers. Rayleigh teaches us that everyone has Haki, but we must find our focal path. Take our short, high-fidelity assessment to align your aura!
                </p>
                <button 
                  onClick={() => setQuizStarted(true)}
                  className="px-6 py-2.5 rounded-lg bg-gold-500 text-navy-950 font-semibold text-xs hover:bg-gold-400 transition-colors cursor-pointer"
                >
                  Initiate Spiritual Calibration
                </button>
              </div>
            ) : quizResult ? (
              /* Quiz Result Panel */
              <div className={`p-6 rounded-xl border ${quizResult.color} animate-fadeIn space-y-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <quizResult.icon className="w-6 h-6 text-gold-400" />
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">{quizResult.jp}</p>
                      <h4 className="text-base font-bold text-slate-100 font-display">{quizResult.name}</h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-gold-500 bg-gold-500/15 border border-gold-500/30 px-2 py-0.5 rounded">
                    MATCH CONFIRMED
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{quizResult.desc}</p>
                
                <div className="pt-2">
                  <button 
                    onClick={resetQuiz}
                    className="px-4 py-2 rounded bg-slate-900 border border-slate-800 text-xs text-gold-400 font-mono hover:text-gold-300 cursor-pointer"
                  >
                    Recalibrate Aura
                  </button>
                </div>
              </div>
            ) : (
              /* Quiz Question Block */
              <div className="space-y-4 animate-fadeIn">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>SPIRITUAL ALIGNMENT</span>
                  <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                </div>

                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gold-500 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>

                <h4 className="text-sm font-bold text-slate-100 font-display leading-snug">
                  {quizQuestions[currentQuestion].q}
                </h4>

                <div className="space-y-2 pt-2">
                  {quizQuestions[currentQuestion].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuizAnswer(opt.type)}
                      className="w-full text-left text-xs text-slate-300 p-3 rounded-lg border border-gold-500/10 hover:border-gold-400/30 hover:bg-gold-400/5 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span>{opt.text}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      )}

      {/* 3. WORLD GOVERNMENT */}
      {viewId === 'wg' && (
        <div className="space-y-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
              The World Government Hierarchy
            </h1>
            <p className="text-xs text-slate-400">Study the structured central power complex of absolute authority ruling from Mariejois.</p>
          </div>

          {/* WG Diagram structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Crown: Imu & Gorosei */}
            <div className="glass-card border border-gold-500/10 p-5 rounded-xl space-y-4 md:col-span-3">
              <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Supreme Command (The Void Throne)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-red-950/20 border border-red-500/20">
                  <p className="text-[10px] font-mono text-red-400 uppercase">Secret Sovereign</p>
                  <h4 className="text-base font-bold text-slate-100 font-display">Imu-sama</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-sans">
                    The mysterious ruler who sits upon the Empty Throne of Mariejois, which is supposed to represent equal democracy. In truth, Imu commands the Five Elders and holds the authority to erase entire countries from history.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-navy-950/40 border border-slate-800">
                  <p className="text-[10px] font-mono text-gold-400 uppercase">The Five Elders (Gorosei)</p>
                  <h4 className="text-base font-bold text-slate-100 font-display">Council of Warrior Gods</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-sans">
                    The highest public authority. Comprised of five immortal nobles, each carrying a "Warrior God" title (e.g. Saint Jaygarcia Saturn of Science/Defense). They possess terrifying mythological beast/yokai transformations.
                  </p>
                </div>
              </div>
            </div>

            {/* Shield: Holy Knights & Cipher Pol */}
            <div className="glass-card border border-gold-500/10 p-5 rounded-xl space-y-4">
              <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Holy Knights & CP0</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                <strong>God’s Holy Knights:</strong> The high-tier judicial combatants of the Celestial Dragons. <br /><br />
                <strong>Cipher Pol (CP0):</strong> The elite intelligence wing working directly for the Celestial Dragons, led by deadly agents like Rob Lucci.
              </p>
            </div>

            {/* Sword: Marine Headquarters */}
            <div className="glass-card border border-gold-500/10 p-5 rounded-xl space-y-4 md:col-span-2">
              <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Marine Military Force</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                The massive military wing that enforces "Absolute Justice" across the ocean. Led by the Fleet Admiral (currently Akainu) and the three Admiral juggernauts (Kizaru, Fujitora, Ryokugyu). They operate giant strongholds like Marineford and execute the absolute scorched-earth campaign: the Buster Call.
              </p>
              <div className="pt-2 flex justify-start">
                <button 
                  onClick={() => {}} 
                  className="text-xs text-gold-400 font-semibold hover:text-gold-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  See Marine Roster details below →
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 4. ANCIENT WEAPONS */}
      {viewId === 'ancient' && (
        <div className="space-y-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
              The Three Ancient Weapons
            </h1>
            <p className="text-xs text-slate-400">Study the legendary planet-destroying weapons manufactured during the ancient Void Century.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Pluton",
                title: "The Colossal Battleship",
                desc: "An ancient, heavily armed battleship capable of destroying entire islands in a single salvo. Its blueprints were guarded for generations by the shipwrights of Water 7 (Tom, Franky) to build a countermeasure if needed. The actual Pluton lies submerged deep beneath the submerged ruins of ancient Wano.",
                status: "Locked / Submerged beneath Wano",
                icon: Shield,
                color: "border-amber-500/15"
              },
              {
                name: "Poseidon",
                title: "The Sovereign of Sea Kings",
                desc: "Not a mechanical warship, but a living biological power. Once every 800 years, a Mermaid princess is born with the capability to communicate with and command the colossal Sea Kings. The current Poseidon is Princess Shirahoshi of the Ryugu Kingdom.",
                status: "Active / Princess Shirahoshi (Fish-man Island)",
                icon: Compass,
                color: "border-blue-500/15"
              },
              {
                name: "Uranus",
                title: "The Sky-Sovereign Destroyer",
                desc: "An ominous, air-based destruction weapon capable of obliteration from the sky. It was recently utilized by Imu-sama, powered by York’s artificial Mother Flame energy source, to completely delete the island of Lulusia from maps, leaving nothing but a massive sinking sinkhole.",
                status: "Active / Held by Imu-sama (Mariejois)",
                icon: Skull,
                color: "border-red-500/15"
              }
            ].map((weapon, idx) => {
              const Icon = weapon.icon;
              return (
                <div key={idx} className={`glass-card border ${weapon.color} p-6 rounded-xl space-y-4 flex flex-col justify-between h-[340px]`}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Icon className="w-6 h-6 text-gold-400" />
                      <span className="text-[9px] font-mono text-gold-500 bg-gold-500/5 border border-gold-500/20 px-2 py-0.5 rounded">
                        ANCIENT WEAPON
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 font-display">{weapon.name}</h3>
                    <p className="text-xs font-mono text-slate-400 leading-none">{weapon.title}</p>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{weapon.desc}</p>
                  </div>
                  
                  <div className="border-t border-slate-800 pt-3 text-[10px] font-mono text-slate-400">
                    <span className="text-slate-500 block">Current Status:</span>
                    <span className="font-bold text-slate-200 mt-1 block">{weapon.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. PONEGLYPHS */}
      {viewId === 'poneglyphs' && (
        <div className="space-y-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
              The Indestructible Poneglyphs
            </h1>
            <p className="text-xs text-slate-400">Uncover the stone documents carved by the Kozuki clan carrying true Void Century history.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Description card */}
            <div className="glass-card border border-gold-500/10 p-6 rounded-xl space-y-4 md:col-span-2">
              <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">System of Monoliths</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Poneglyphs are indestructible stone monoliths spread across the world, written in an ancient phonetic script. They are classified into three types: <br /><br />
                <strong>1. Road Poneglyphs (Red Stones - 4 Total):</strong> Deciphering all four yields four oceanic coordinate points. Intersecting them on maps reveals the coordinates of the legendary final island: <strong>Laugh Tale</strong>. <br /><br />
                <strong>2. Historical Poneglyphs (Blue Stones - 9 Selected):</strong> Carries fragments of Void Century records, ancient kingdom plans, and the history of the world. Comprising them together reveals the <strong>Rio Poneglyph</strong>. <br /><br />
                <strong>3. Instructional Poneglyphs:</strong> Points readers toward the locations of other stones or the Ancient Weapons (Pluton, Poseidon).
              </p>
            </div>

            {/* Translation guide */}
            <div className="glass-card border border-gold-500/10 p-6 rounded-xl space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">The Archeologists</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  The scholars of Ohara deciphered the stones, which resulted in their complete annihilation. Currently, only <strong>Nico Robin</strong> of the Straw Hat crew holds the training and lineage to read the ancient phonetic script.
                </p>
              </div>
              <div className="p-3 rounded bg-red-950/20 border border-red-500/15 text-[11px] font-mono text-red-400 leading-normal">
                ⚠️ Translating Poneglyphs is classified as a Supreme Crime by the World Government, punishable by Buster Call.
              </div>
            </div>

          </div>

          {/* Decipher Interactive translation block */}
          <div className="glass-card border border-gold-500/15 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-navy-950/20 to-navy-950/60 space-y-4">
            <h3 className="text-lg font-bold font-display text-slate-100">Kozuki Clan Translation Chambers</h3>
            <p className="text-xs text-slate-400">Type a secret phrase below to scribe it as indestructible ancient phonetic glyph symbols.</p>
            
            <div className="space-y-3">
              <input 
                id="poneglyph-translator"
                type="text"
                placeholder="Type your pirate name or coordinates..."
                value={translationInput}
                onChange={(e) => handleDecipherInput(e.target.value)}
                className="w-full text-xs bg-navy-950 border border-gold-500/10 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-gold-400"
              />

              {decipheredText && (
                <div className="p-5 rounded-lg border border-gold-500/20 bg-navy-950/80 animate-fadeIn space-y-2">
                  <p className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Scribed Ancient Script</p>
                  <p className="text-2xl md:text-3xl text-gold-400 font-mono tracking-widest leading-loose break-words py-2 select-all">
                    {decipheredText}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-none">Indestructible basalt stone template generated.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      )}

      {/* 6. PIRATE FACTIONS DIRECTORY */}
      {viewId === 'pirates' && (
        <div className="space-y-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
              The Legendary Pirates
            </h1>
            <p className="text-xs text-slate-400">Inspect the detailed records of legendary crew captains and candidates for the Pirate King.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.filter(c => c.crew !== 'Marines' && c.bountyAmount > 1000000000).map((pirate) => (
              <div 
                key={pirate.id}
                onClick={() => onSelectCharacter(pirate.id)}
                className="group glass-card border border-gold-500/10 rounded-xl overflow-hidden hover:border-gold-500/30 hover:-translate-y-1 transition-all cursor-pointer flex flex-col h-[300px]"
              >
                <div className="h-40 bg-navy-950 overflow-hidden relative border-b border-slate-800">
                  <img 
                    src={pirate.image} 
                    alt={pirate.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-mono bg-navy-950/80 border border-gold-500/20 text-gold-400">
                    🏴‍☠️ Pirate Crew: {pirate.crew ? pirate.crew.split(' ')[0] : 'Legend'}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-gold-400 transition-all font-display">
                      {pirate.name}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400 line-clamp-1 italic mt-0.5">{pirate.nickname}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-red-400 pt-3 border-t border-slate-800">
                    <span>Beli Wanted:</span>
                    <span className="font-bold text-glow-crimson">{pirate.bounty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. MARINE FACTIONS DIRECTORY */}
      {viewId === 'marines' && (
        <div className="space-y-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
              The Navy Marine Force
            </h1>
            <p className="text-xs text-slate-400">Explore the records of Marine Admirals and officers executing absolute maritime justice.</p>
          </div>

          {/* Justice philosophies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-gold-500/10 bg-navy-950/20">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Core Doctrine</span>
              <h3 className="text-sm font-bold text-slate-100 font-display mt-1">Thorough Absolute Justice (Settei Seigi)</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Adhered to strictly by Fleet Admiral Akainu. Dictates that any form of evil, rebellion, or curiosity into forbidden history must be completely eradicated—even if it means sacrificing civilian ships or entire islands.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-gold-500/10 bg-navy-950/20">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Alternative Doctrine</span>
              <h3 className="text-sm font-bold text-slate-100 font-display mt-1">Moral / Blind Justice</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Practiced by Admiral Fujitora, Garp, and Coby. Believes that justice should serve to protect the weak and human life, rather than blindly following the totalitarian orders of the Five Elders and Celestial Dragons.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {characters.filter(c => c.crew === 'Marines' || c.affiliations.some(a => a.includes('Marine'))).map((marine) => (
              <div 
                key={marine.id}
                onClick={() => onSelectCharacter(marine.id)}
                className="group glass-card border border-gold-500/10 rounded-xl overflow-hidden hover:border-gold-500/30 hover:-translate-y-1 transition-all cursor-pointer flex flex-col h-[300px]"
              >
                <div className="h-40 bg-navy-950 overflow-hidden relative border-b border-slate-800">
                  <img 
                    src={marine.image} 
                    alt={marine.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-mono bg-navy-950/80 border border-gold-500/20 text-gold-400 uppercase">
                    ⚓ Marines
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-gold-400 transition-all font-display">
                      {marine.name}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400 line-clamp-1 italic mt-0.5">{marine.nickname}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-3 border-t border-slate-800">
                    <span>Rank / Office:</span>
                    <span className="font-bold text-gold-400">{marine.occupation.split(',')[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
