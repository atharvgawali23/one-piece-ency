import { useState } from 'react';
import { BookOpen, Award, Flame, Swords, Film, Calendar } from 'lucide-react';
import { arcs } from '../data/arcs';

export default function ArcSection() {
  const [selectedArcId, setSelectedArcId] = useState<string | null>(arcs[0]?.id || null);

  const activeArc = arcs.find(a => a.id === selectedArcId);

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
          Story Arcs & Sagas
        </h1>
        <p className="text-xs text-slate-400">Review the official structural sagas of Luffy’s journey from East Blue to the Future Island.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Sagas List */}
        <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
          {arcs.map((arc) => (
            <div
              key={arc.id}
              onClick={() => setSelectedArcId(arc.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-40 relative overflow-hidden group ${
                selectedArcId === arc.id
                  ? 'bg-gold-500/5 border-gold-400 shadow-lg'
                  : 'glass-card border-gold-500/10 hover:border-gold-500/25 bg-navy-950/20'
              }`}
            >
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-gold-400 border border-gold-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                  {arc.saga}
                </span>
                <h3 className="text-base font-bold text-slate-100 font-display group-hover:text-gold-400 transition-colors mt-2">
                  {arc.name}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400">
                <span>🎬 {arc.episodes} Episodes</span>
                <span>📖 {arc.chapters} Chapters</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Detailed Arc Wiki Log */}
        <div className="lg:col-span-2">
          {activeArc ? (
            <div className="glass-card border border-gold-500/15 p-6 md:p-8 rounded-2xl space-y-6 bg-gradient-to-b from-navy-950/40 to-navy-950/60 animate-fadeIn">
              
              {/* Banner */}
              <div className="relative h-48 md:h-64 rounded-xl overflow-hidden border border-gold-500/10 shadow-lg">
                <img 
                  src={activeArc.image} 
                  alt={activeArc.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-mono text-gold-400 border border-gold-400/30 bg-navy-950/80 px-2 py-0.5 rounded uppercase">
                    {activeArc.saga} Saga
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-slate-100 mt-1">{activeArc.name}</h2>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1 font-bold">Campaign Summary</h4>
                <p className="text-slate-300 leading-relaxed text-xs md:text-sm">{activeArc.summary}</p>
              </div>

              {/* Sagas Stats Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-800/80 py-4 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-gold-500" />
                  <span>Anime Length: <strong>{activeArc.episodes} Episodes</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-gold-500" />
                  <span>Manga Length: <strong>{activeArc.chapters} Chapters</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold-500" />
                  <span>Timeline Era: <strong>{activeArc.timeline}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-500" />
                  <span>Primary Antagonists: <strong className="text-red-400">{activeArc.villains.join(', ')}</strong></span>
                </div>
              </div>

              {/* Key Events */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1 font-bold">Key Incidents & Milestones</h4>
                <ul className="space-y-2">
                  {activeArc.keyEvents.map((event, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span className="text-red-500 mt-1">⚡</span>
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Locations visited */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1 font-bold">Theaters of War (Locations)</h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeArc.locations.map((loc, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-gold-400 uppercase">
                      🗺️ {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Important Battles */}
              {activeArc.battles && activeArc.battles.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1 font-bold">Climactic Showdowns</h4>
                  <ul className="space-y-1.5 pl-2">
                    {activeArc.battles.map((battle, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                        <Swords className="w-4 h-4 text-red-400" />
                        <span>{battle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          ) : (
            <div className="glass-card border border-gold-500/10 p-6 rounded-xl text-center py-20 bg-navy-950/20 animate-pulse">
              <BookOpen className="w-8 h-8 text-slate-600 mx-auto" />
              <p className="text-xs font-mono text-slate-400 mt-4">Select a saga or story arc to inspect milestones, chapters, locations, and major antagonist showdowns.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
