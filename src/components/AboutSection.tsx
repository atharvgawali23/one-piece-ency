import { Award, Star, BookOpen, Compass, Heart, Anchor, Skull } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="space-y-12 animate-fadeIn pb-16">
      
      {/* Header Banner */}
      <section className="relative rounded-2xl overflow-hidden border border-gold-500/10 shadow-2xl bg-navy-950/40 p-8 md:p-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&auto=format&fit=crop&q=80" 
            alt="One Piece Tribute background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-10 filter sepia brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="text-[10px] font-mono text-gold-400 border border-gold-400/30 bg-navy-950/80 px-2.5 py-0.5 rounded uppercase tracking-wider">
            AUTHOR DEDICATION & TRILOGY STATS
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-slate-100">
            A Tribute to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-500 text-glow-gold font-serif">
              Eiichiro Oda
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Since July 1997, Eiichiro Oda has dedicated his life to illustrating the grandest adventure in modern literature. Spanning over 1,100 manga chapters, 1,100 anime episodes, and dozens of feature films, the journey to find the One Piece is a testament to imagination, friendship, and relentless determination.
          </p>
        </div>
      </section>

      {/* Series Guinness World Records & Circulation Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Guinness World Record",
            stat: "Most Copies Published",
            desc: "Recognized officially for the most copies published for the same comic book series by a single author, surpassing over 516 million printings globally.",
            icon: Award
          },
          {
            title: "Decades-Long Serialization",
            stat: "28+ Years Continuous",
            desc: "Serialized continuously in Weekly Shōnen Jump since July 1997. Oda maintains one of the most grueling work schedules in comic book history.",
            icon: BookOpen
          },
          {
            title: "Cultural Phenomenon",
            stat: "Global Influence",
            desc: "Inspired an international Netflix live-action adaptation, multiple theme parks, monuments across Kumamoto, and holds millions of dedicated fans globally.",
            icon: Star
          }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="glass-card border border-gold-500/10 p-6 rounded-xl space-y-4 hover:border-gold-500/25 transition-colors">
              <div className="p-2.5 rounded bg-gold-400/5 border border-gold-500/20 w-fit">
                <Icon className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block">{item.title}</span>
                <h3 className="text-lg font-bold text-slate-100 font-display mt-1">{item.stat}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Narrative Themes */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="glass-card border border-gold-500/10 p-6 md:p-8 rounded-xl space-y-4">
          <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Core Thematic Pillars</h3>
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
            <p>
              <strong>1. The Desire for Inherited Will:</strong> The concept that dreams are never truly lost when we pass. A person's will is inherited by the next generation, living on through the fires of legacy. As Dr. Hiriluk famously proclaimed: <em>"When does a man die? Only when he is forgotten!"</em>
            </p>
            <p>
              <strong>2. Absolute Freedom vs. Systemic Authority:</strong> To Luffy, being the Pirate King does not mean conquering or ruling anything. It means being the person with the most absolute freedom on the sea. This sets him in direct, eternal opposition to the totalitarian World Government.
            </p>
            <p>
              <strong>3. Boundless Friendship (Nakama):</strong> A pirate is only as strong as their trust in their crew. Luffy’s crew is built not on fear or subservience, but on absolute loyalty and shared dreams.
            </p>
          </div>
        </div>

        <div className="glass-card border border-gold-500/10 p-6 md:p-8 rounded-xl space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Encyclopedia Statistics</h3>
            <div className="space-y-3 pt-2 text-xs font-mono text-slate-400">
              <div className="flex justify-between">
                <span>Total Characters Cataloged:</span>
                <span className="font-bold text-gold-400">1,000+</span>
              </div>
              <div className="flex justify-between">
                <span>Islands Traversed:</span>
                <span className="font-bold text-gold-400">45+</span>
              </div>
              <div className="flex justify-between">
                <span>Active Factions Represented:</span>
                <span className="font-bold text-gold-400">40+</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Word count of records:</span>
                <span className="font-bold text-gold-400">30,000+ words</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-navy-950/80 border border-gold-500/15 flex items-center gap-3 text-xs leading-relaxed text-slate-300">
            <Anchor className="w-5 h-5 text-gold-400 shrink-0" />
            <span>This encyclopedia acts as a complete Wikipedia-style tribute, compiled for researchers, veterans, and rookie pirates setting sail into the Grand Line.</span>
          </div>
        </div>

      </section>

    </div>
  );
}
