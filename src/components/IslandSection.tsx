import { useState } from 'react';
import { MapPin, Globe, Compass, Landmark, Users, Thermometer, Info } from 'lucide-react';
import { islands } from '../data/islands';

export default function IslandSection() {
  const [selectedIslandId, setSelectedIslandId] = useState<string | null>(islands[0]?.id || null);

  const activeIsland = islands.find(isl => isl.id === selectedIslandId);

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
          Grand Line Islands & Territories
        </h1>
        <p className="text-xs text-slate-400">Traverse the geography, climates, and social hierarchies of the legendary ports across the seas.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Island Directory Cards */}
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          {islands.map((isl) => (
            <div
              key={isl.id}
              onClick={() => setSelectedIslandId(isl.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 relative overflow-hidden group ${
                selectedIslandId === isl.id
                  ? 'bg-gold-500/5 border-gold-400 shadow-lg'
                  : 'glass-card border-gold-500/10 hover:border-gold-500/25 bg-navy-950/20'
              }`}
            >
              <div className="w-14 h-14 rounded-lg overflow-hidden border border-gold-500/10 shrink-0">
                <img 
                  src={isl.image} 
                  alt={isl.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100 font-display group-hover:text-gold-400 transition-colors">
                  {isl.name}
                </h3>
                <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  ⛅ {isl.climate.split(',')[0]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Immersive Travel Log Panel */}
        <div className="lg:col-span-2">
          {activeIsland ? (
            <div className="glass-card border border-gold-500/15 p-6 md:p-8 rounded-2xl space-y-6 bg-gradient-to-b from-navy-950/40 to-navy-950/60 animate-fadeIn">
              
              {/* Photo & Name */}
              <div className="relative h-60 md:h-80 rounded-xl overflow-hidden border border-gold-500/10 shadow-lg">
                <img 
                  src={activeIsland.image} 
                  alt={activeIsland.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-gold-400 border border-gold-400/30 bg-navy-950/80 px-2 py-0.5 rounded uppercase">
                      Log Pose Tracked
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold font-display text-slate-100 mt-1">{activeIsland.name}</h2>
                  </div>
                  <div className="text-xs font-mono text-slate-300 bg-navy-950/80 px-2.5 py-1 rounded border border-slate-800">
                    📍 {activeIsland.mapUrl}
                  </div>
                </div>
              </div>

              {/* Geographic Overview */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Travel Log Log-Pose</h4>
                <p className="text-slate-300 leading-relaxed text-xs md:text-sm">{activeIsland.overview}</p>
              </div>

              {/* Climate, Population, Gov stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-b border-slate-800/80 py-4">
                <div className="flex items-center gap-3 text-xs">
                  <Thermometer className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">Climate System</span>
                    <span className="font-semibold text-slate-200">{activeIsland.climate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Users className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">Population</span>
                    <span className="font-semibold text-slate-200">{activeIsland.population}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Landmark className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">Government Structure</span>
                    <span className="font-semibold text-slate-200">{activeIsland.government}</span>
                  </div>
                </div>
              </div>

              {/* Historical Log */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Recorded Chronicles</h4>
                <p className="text-slate-300 leading-relaxed text-xs md:text-sm">{activeIsland.history}</p>
              </div>

              {/* Island Trivia */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Geographical Anomalies</h4>
                <ul className="space-y-2">
                  {activeIsland.trivia.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                      <span className="text-gold-400 mt-1">✦</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ) : (
            <div className="glass-card border border-gold-500/10 p-6 rounded-xl text-center py-20 bg-navy-950/20">
              <Globe className="w-10 h-10 text-slate-600 mx-auto animate-spin" />
              <p className="text-sm font-mono text-slate-400 mt-4">Select an island from the Log Pose directory to view coordinates, histories, climate logs, and trivia.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
