import { Skull, Shield, Swords, Award, Anchor, MapPin } from 'lucide-react';
import { crews } from '../data/crews';

interface CrewSectionProps {
  selectedCrewId: string | null;
  onSelectCrew: (id: string | null) => void;
  onSelectCharacter: (id: string) => void;
}

export default function CrewSection({ selectedCrewId, onSelectCrew, onSelectCharacter }: CrewSectionProps) {
  
  const activeCrew = crews.find(cr => cr.id === selectedCrewId);

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
          Pirate Crews & Flags
        </h1>
        <p className="text-xs text-slate-400">Study the infamous armadas and alliances navigating the Grand Line and New World.</p>
      </div>

      {activeCrew ? (
        /* Detailed View for a Single Crew */
        <div className="space-y-8">
          
          {/* Back button */}
          <button 
            onClick={() => onSelectCrew(null)}
            className="px-3 py-1.5 rounded bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-gold-400 hover:border-gold-400/40 transition-colors cursor-pointer"
          >
            ← Back to Crews Directory
          </button>

          {/* Banner Block */}
          <div className="relative rounded-2xl overflow-hidden border border-gold-500/10 shadow-xl bg-navy-950/40">
            <div className="absolute inset-0 z-0">
              {activeCrew.gallery && activeCrew.gallery[0] ? (
                <img 
                  src={activeCrew.gallery[0]} 
                  alt={activeCrew.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-15 filter brightness-50"
                />
              ) : (
                <div className="w-full h-full bg-navy-950"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent"></div>
            </div>

            <div className="relative z-10 p-6 md:p-10 space-y-4">
              <span className="text-[10px] font-mono text-gold-400 border border-gold-400/30 px-2 py-0.5 rounded tracking-wider uppercase">
                Active Armada File
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-slate-100">{activeCrew.name}</h2>
              <p className="text-red-400 font-mono text-sm">
                Accumulated Crew Bounty: <strong className="text-base text-glow-crimson">{activeCrew.bountyTotal}</strong>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Lore Details & Jolly Roger */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card border border-gold-500/10 p-6 rounded-xl space-y-4">
                <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Historical Overview</h3>
                <p className="text-slate-300 leading-relaxed text-xs md:text-sm">{activeCrew.history}</p>
              </div>

              <div className="glass-card border border-gold-500/10 p-6 rounded-xl space-y-4">
                <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Jolly Roger Symbolism</h3>
                <div className="p-4 bg-navy-950/50 border border-gold-500/5 rounded-lg flex items-center gap-4">
                  <div className="text-3xl">🏴‍☠️</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{activeCrew.jollyRoger}</p>
                </div>
              </div>

              <div className="glass-card border border-gold-500/10 p-6 rounded-xl space-y-4">
                <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Core Campaign Battles</h3>
                <ul className="space-y-2">
                  {activeCrew.battles.map((battle, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-slate-300 p-2 rounded bg-navy-950/40 border border-slate-900/80">
                      <Swords className="w-4 h-4 text-red-500" />
                      <span>{battle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Flagship & Members */}
            <div className="space-y-6">
              
              {/* Flagship */}
              <div className="glass-card border border-gold-500/10 p-6 rounded-xl space-y-3">
                <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Flagship Vessel</h3>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Anchor className="w-5 h-5 text-gold-500" />
                  <div>
                    <p className="text-slate-400 font-mono text-[10px]">Active Carrier:</p>
                    <p className="font-bold text-slate-100">{activeCrew.ship}</p>
                  </div>
                </div>
              </div>

              {/* Territories */}
              <div className="glass-card border border-gold-500/10 p-6 rounded-xl space-y-3">
                <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Protected Territories</h3>
                <ul className="space-y-2">
                  {activeCrew.territories.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <MapPin className="w-4 h-4 text-gold-500" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Crew Officers Roster */}
              <div className="glass-card border border-gold-500/10 p-6 rounded-xl space-y-4">
                <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Elite Roster</h3>
                <div className="space-y-2">
                  {activeCrew.members.map((member, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => member.id && onSelectCharacter(member.id)}
                      className={`p-2.5 rounded-lg border flex items-center justify-between text-xs transition-all ${
                        member.id 
                          ? 'bg-navy-950/40 border-gold-500/10 hover:border-gold-400/30 hover:bg-gold-400/5 cursor-pointer' 
                          : 'bg-navy-950/20 border-slate-900/60 text-slate-400'
                      }`}
                    >
                      <div>
                        <p className="font-bold text-slate-200">{member.name}</p>
                        <p className="text-[10px] text-slate-400">{member.role}</p>
                      </div>
                      {member.id && (
                        <span className="text-[10px] font-mono text-gold-500/80">
                          View File →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      ) : (
        /* Grid list of all Crews */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {crews.map((cr) => (
            <div 
              key={cr.id}
              onClick={() => onSelectCrew(cr.id)}
              className="group glass-card border border-gold-500/10 p-6 rounded-xl hover:border-gold-500/30 hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between h-72 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/5 rounded-full blur-xl group-hover:bg-gold-400/10 transition-colors"></div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center bg-navy-950 text-gold-400 group-hover:border-gold-400 transition-colors">
                    <Skull className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-gold-400 transition-colors font-display leading-tight">
                      {cr.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">Captain: {cr.captain}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {cr.history}
                </p>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between text-xs">
                <div className="font-mono text-[10px]">
                  <span className="text-slate-500">BOUNTY: </span>
                  <span className="text-red-400 font-bold">{cr.bountyTotal}</span>
                </div>
                <span className="text-gold-500 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Inspect Crew File →
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
