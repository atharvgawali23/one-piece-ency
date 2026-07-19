import { useState } from 'react';
import { Flame, Star, Shield, HelpCircle, Activity } from 'lucide-react';
import { devilFruits } from '../data/devilFruits';

export default function DevilFruitSection() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedFruitId, setSelectedFruitId] = useState<string | null>(null);

  const activeFruit = devilFruits.find(df => df.id === selectedFruitId);

  const fruitTypes = ['All', 'Paramecia', 'Zoan', 'Mythical Zoan', 'Logia'];

  const filteredFruits = devilFruits.filter(df => {
    if (selectedType === 'All') return true;
    return df.type.toLowerCase().includes(selectedType.toLowerCase());
  });

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
          Devil Fruits Repository
        </h1>
        <p className="text-xs text-slate-400">Analyze the fruits of the sea, categorized by their structural properties and combat capabilities.</p>
      </div>

      {/* Type Selector Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gold-500/10 pb-4">
        {fruitTypes.map(type => (
          <button
            key={type}
            onClick={() => { setSelectedType(type); setSelectedFruitId(null); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all cursor-pointer ${
              selectedType === type
                ? 'text-gold-400 bg-gold-400/10 border border-gold-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Fruits Grid Directory */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredFruits.map((df) => (
            <div
              key={df.id}
              onClick={() => setSelectedFruitId(df.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-48 relative overflow-hidden group ${
                selectedFruitId === df.id
                  ? 'bg-gold-500/5 border-gold-400 shadow-lg shadow-gold-500/5'
                  : 'glass-card border-gold-500/10 hover:border-gold-500/25 bg-navy-950/20'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-purple-400 border border-purple-500/25 px-2 py-0.5 rounded uppercase">
                    {df.type}
                  </span>
                  <Flame className={`w-4 h-4 ${selectedFruitId === df.id ? 'text-gold-400' : 'text-purple-400 group-hover:scale-110 transition-transform'}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-gold-400 transition-colors font-display">
                    {df.name}
                  </h3>
                  <p className="text-[10px] font-mono text-slate-400 italic">{df.japaneseName}</p>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  Active User: <strong className="text-slate-200">{df.user}</strong>
                </p>
              </div>

              <div className="text-[11px] font-mono text-gold-500/70 group-hover:text-gold-400 flex items-center gap-1 mt-2">
                Inspect abilities & techniques →
              </div>
            </div>
          ))}
        </div>

        {/* Right: Detailed Analysis Panel */}
        <div className="space-y-6">
          {activeFruit ? (
            <div className="glass-card border border-gold-500/20 p-6 rounded-xl space-y-6 bg-gradient-to-b from-navy-950/40 to-navy-950/60 animate-fadeIn">
              
              <div className="space-y-2 border-b border-gold-500/10 pb-4">
                <span className="text-[10px] font-mono text-purple-400 border border-purple-500/20 px-2.5 py-0.5 rounded uppercase">
                  {activeFruit.type} Type
                </span>
                <h2 className="text-xl font-bold font-display text-slate-100 mt-2">{activeFruit.name}</h2>
                <p className="text-xs font-mono text-slate-400">Current Wielder: <strong className="text-gold-400 font-sans">{activeFruit.user}</strong></p>
              </div>

              {/* Strengths */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-gold-400" /> Active Strengths
                </h4>
                <ul className="space-y-1.5 pl-2">
                  {activeFruit.strengths.map((s, idx) => (
                    <li key={idx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-1.5">
                      <span className="text-gold-500 mt-1">✦</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="space-y-2 border-t border-slate-800/60 pt-4">
                <h4 className="text-xs font-mono text-red-400 uppercase tracking-widest flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-red-400" /> Natural Weaknesses
                </h4>
                <ul className="space-y-1.5 pl-2">
                  {activeFruit.weaknesses.map((w, idx) => (
                    <li key={idx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-1.5">
                      <span className="text-red-500 mt-1">✦</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awakening */}
              {activeFruit.awakening && (
                <div className="space-y-2 border-t border-slate-800/60 pt-4">
                  <h4 className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-purple-400" /> Awakened Form
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed pl-2">
                    {activeFruit.awakening}
                  </p>
                </div>
              )}

              {/* Techniques list */}
              {activeFruit.techniques && activeFruit.techniques.length > 0 && (
                <div className="space-y-3 border-t border-slate-800/60 pt-4">
                  <h4 className="text-xs font-mono text-gold-400 uppercase tracking-widest">Wielder Techniques</h4>
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {activeFruit.techniques.map((tech, idx) => (
                      <div key={idx} className="p-2 rounded bg-navy-950/60 border border-slate-800/80">
                        <p className="text-xs font-bold text-slate-200">{tech.name}</p>
                        <p className="text-[11px] text-slate-400 mt-1 leading-normal">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div className="glass-card border border-gold-500/10 p-6 rounded-xl text-center py-12 space-y-3 bg-navy-950/20">
              <HelpCircle className="w-8 h-8 text-slate-600 mx-auto animate-pulse" />
              <h3 className="text-sm font-semibold text-slate-300">Select a Devil Fruit</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                Click any of the Devil Fruits in the left catalog to read their powers, weaknesses, awakening triggers, and combat techniques.
              </p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
