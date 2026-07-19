import { useState, useEffect } from 'react';
import { Compass, Skull, Shield, Swords, Flame, MapPin, Search, ArrowRight, Star, TrendingUp, Anchor, Scroll } from 'lucide-react';
import { characters } from '../data/characters';
import { crews } from '../data/crews';
import { devilFruits } from '../data/devilFruits';
import { islands } from '../data/islands';

interface HomeProps {
  onViewChange: (view: string) => void;
  onSelectCharacter: (id: string) => void;
  onSelectCrew: (id: string) => void;
}

export default function Home({ onViewChange, onSelectCharacter, onSelectCrew }: HomeProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{
    type: 'character' | 'crew' | 'fruit' | 'island';
    id: string;
    name: string;
    category: string;
    image?: string;
  }[]>([]);
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  // Filter out Straw Hats for spotlight
  const strawHats = characters.filter(c => c.crew === 'Straw Hat Pirates');

  useEffect(() => {
    const timer = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % strawHats.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [strawHats.length]);

  // Handle Global Search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: any[] = [];

    // Search Characters
    characters.forEach(c => {
      if (c.name.toLowerCase().includes(query) || c.nickname.toLowerCase().includes(query) || c.englishName.toLowerCase().includes(query)) {
        results.push({
          type: 'character',
          id: c.id,
          name: c.name,
          category: c.nickname || 'Pirate',
          image: c.image
        });
      }
    });

    // Search Crews
    crews.forEach(cr => {
      if (cr.name.toLowerCase().includes(query) || cr.captain.toLowerCase().includes(query)) {
        results.push({
          type: 'crew',
          id: cr.id,
          name: cr.name,
          category: `Captain: ${cr.captain}`
        });
      }
    });

    // Search Fruits
    devilFruits.forEach(df => {
      if (df.name.toLowerCase().includes(query) || df.type.toLowerCase().includes(query)) {
        results.push({
          type: 'fruit',
          id: df.id,
          name: df.name,
          category: `${df.type} Type`,
          image: df.image
        });
      }
    });

    // Search Islands
    islands.forEach(isl => {
      if (isl.name.toLowerCase().includes(query) || isl.climate.toLowerCase().includes(query)) {
        results.push({
          type: 'island',
          id: isl.id,
          name: isl.name,
          category: `${isl.climate} Climate`,
          image: isl.image
        });
      }
    });

    setSearchResults(results.slice(0, 5));
  }, [searchQuery]);

  const handleSearchResultClick = (result: any) => {
    setSearchQuery('');
    setSearchResults([]);
    if (result.type === 'character') {
      onSelectCharacter(result.id);
    } else if (result.type === 'crew') {
      onSelectCrew(result.id);
    } else if (result.type === 'fruit') {
      onViewChange('fruits');
    } else if (result.type === 'island') {
      onViewChange('islands');
    }
  };

  const activeSpotlight = strawHats[spotlightIndex] || strawHats[0];

  return (
    <div className="space-y-12 animate-fadeIn pb-16">
      
      {/* Netflix-Style Cinematic Hero Section */}
      <section id="cinematic-hero" className="relative w-full rounded-2xl overflow-hidden border border-gold-500/10 shadow-2xl bg-navy-950/40">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <img 
            src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1600&auto=format&fit=crop&q=80" 
            alt="Grand Line Ocean background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25 filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/40 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-6 py-16 md:px-12 md:py-24 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 font-mono text-xs tracking-wider animate-pulse">
            <Anchor className="w-3.5 h-3.5" />
            DISCOVER THE LEGEND OF ONE PIECE
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-black text-slate-100 leading-tight tracking-tight">
            Everything About The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-500 text-glow-gold">
              Grand Line
            </span>
          </h1>

          <p className="text-slate-200 text-base md:text-lg max-w-2xl leading-relaxed">
            Welcome to the ultimate pirate archive. Uncover the secrets of Void Century history, track Emperor bounties, analyze Devil Fruit power charts, and traverse the island climates of the New World.
          </p>

          {/* Interactive Search Bar */}
          <div className="relative max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-400" />
              <input
                id="global-search-input"
                type="text"
                placeholder="Search characters, pirate crews, devil fruits, islands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gold-500/20 bg-slate-950 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-sans text-sm md:text-base shadow-lg"
              />
            </div>

            {/* Live Search Suggestions Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 p-2 rounded-xl glass-card border border-gold-400/30 bg-slate-950 shadow-2xl z-20 space-y-1">
                <p className="text-[10px] font-mono text-gold-500/60 uppercase tracking-widest px-3 py-1">Search Results</p>
                {searchResults.map((result) => (
                  <div
                    key={`${result.type}-${result.id}`}
                    onClick={() => handleSearchResultClick(result)}
                    className="flex items-center justify-between p-2.5 hover:bg-gold-400/10 rounded-lg cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      {result.image ? (
                        <img 
                          src={result.image} 
                          alt={result.name}
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 rounded-md object-cover border border-gold-500/20"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-md border border-gold-500/20 flex items-center justify-center bg-navy-900 text-gold-400">
                          <Compass className="w-4 h-4" />
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-semibold text-slate-100 group-hover:text-gold-400 transition-colors">
                          {result.name}
                        </p>
                        <p className="text-[11px] font-mono text-slate-400">
                          {result.category}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gold-500/70 border border-gold-500/20 px-2 py-0.5 rounded uppercase">
                      {result.type}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Core Categories Hub */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button 
              onClick={() => onViewChange('characters')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gold-500 text-navy-950 hover:bg-gold-400 transition-all shadow-md hover:shadow-gold-500/10 cursor-pointer"
            >
              <Skull className="w-4 h-4" /> Explore Characters
            </button>
            <button 
              onClick={() => onViewChange('bounties')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-crimson-600/35 hover:bg-crimson-600/50 text-red-400 border border-red-500/30 transition-all cursor-pointer"
            >
              <Star className="w-4 h-4 text-red-500" /> Wanted Poster Creator
            </button>
            <button 
              onClick={() => onViewChange('timeline')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-gold-500/40 hover:text-gold-400 transition-all cursor-pointer"
            >
              View Great Timeline <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* World Statistics Row */}
      <section id="world-stats" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Registered Characters', value: '1,000+', desc: 'Across 40+ factions', icon: Skull },
          { label: 'Grand Line Islands', value: '45+', desc: 'Detailed weather & cultures', icon: MapPin },
          { label: 'Devil Fruits cataloged', value: '120+', desc: 'All 3 major subclass types', icon: Flame },
          { label: 'Total Recorded Bounty Pool', value: '102.4B ฿', desc: 'Calculated in Beli currency', icon: TrendingUp },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="glass-card border border-gold-500/10 p-5 rounded-xl hover:border-gold-500/30 transition-all flex items-center gap-4 group">
              <div className="p-3 rounded-lg bg-gold-400/5 border border-gold-500/10 group-hover:border-gold-400/30 transition-all">
                <Icon className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">{stat.label}</p>
                <h3 className="text-2xl font-bold font-display text-slate-100">{stat.value}</h3>
                <p className="text-[11px] text-slate-500 leading-tight">{stat.desc}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bento-Grid Features Layout */}
      <section id="bento-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Spot 1: Weekly Character Spotlight (Rotates / Animated) */}
        {activeSpotlight && (
          <div className="lg:col-span-2 glass-card border border-gold-500/10 rounded-2xl p-6 relative overflow-hidden flex flex-col md:flex-row gap-6 hover:border-gold-500/20 transition-all group">
            {/* Spotlight Banner overlay background */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${activeSpotlight.themeColor || 'from-red-600 to-amber-500'} opacity-10 blur-2xl rounded-full`}></div>
            
            {/* Left: Image */}
            <div className="w-full md:w-1/3 h-52 md:h-auto rounded-xl overflow-hidden border border-gold-500/20 relative shrink-0">
              <img 
                src={activeSpotlight.image} 
                alt={activeSpotlight.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-[10px] font-mono text-gold-400 tracking-widest">{activeSpotlight.japaneseName}</p>
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono text-gold-400 border border-gold-400/30 px-2 py-0.5 rounded uppercase tracking-wider">
                  Straw Hat Spotlight
                </span>
                <h2 className="text-2xl font-bold text-slate-100 font-display mt-2 group-hover:text-gold-400 transition-colors">
                  {activeSpotlight.name}
                </h2>
                <p className="text-xs font-mono text-red-400 mt-1">
                  Bounty: <span className="font-sans font-bold">{activeSpotlight.bounty}</span>
                </p>
                <p className="text-xs text-slate-300 line-clamp-3 mt-3 leading-relaxed">
                  {activeSpotlight.biography}
                </p>
              </div>

              {/* Attributes quick summary */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 border-t border-slate-800/60 pt-4">
                <div>
                  <span className="text-slate-500 block">Occupation:</span>
                  <span className="text-slate-200 line-clamp-1">{activeSpotlight.occupation}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Devil Fruit:</span>
                  <span className="text-slate-200 line-clamp-1">{activeSpotlight.devilFruit || 'None'}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-start">
                <button 
                  onClick={() => onSelectCharacter(activeSpotlight.id)}
                  className="inline-flex items-center gap-1.5 text-xs text-gold-400 font-semibold hover:text-gold-300 transition-colors cursor-pointer group/btn"
                >
                  View Full Encyclopedia File 
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Spot 2: One Piece Trivia Quest Card */}
        <div className="glass-card border border-gold-500/10 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-gold-500/20 transition-all bg-gradient-to-b from-navy-950/20 to-navy-950/60">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">CURRENT SAGA SPECIAL</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <h3 className="text-xl font-bold text-slate-100 font-display mt-2">
              The Egghead Saga
            </h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Dr. Vegapunk’s high-tech island is under siege! Read up on the 5 Elders, analyze the Ancient Weapon Uranus, and discover the Seraphims.
            </p>
          </div>

          <div className="border-t border-slate-800/80 pt-4 space-y-2.5">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Compass className="w-4 h-4 text-gold-500" />
              <span>Location: <strong>Egghead Island</strong></span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Shield className="w-4 h-4 text-gold-500" />
              <span>Antagonist: <strong>Five Elders (Gorosei)</strong></span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Swords className="w-4 h-4 text-gold-500" />
              <span>Inciting Event: <strong>Luluco Annihilation</strong></span>
            </div>
          </div>

          <button 
            onClick={() => onViewChange('arcs')}
            className="w-full py-2.5 text-center text-xs font-semibold rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-gold-400 hover:border-gold-400/40 transition-all cursor-pointer"
          >
            Explore Story Arcs
          </button>
        </div>

      </section>

      {/* Featured Lore & Shortcuts */}
      <section id="lore-shortcuts" className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold font-display text-slate-100 tracking-wide">
              Grand Line Mysteries
            </h2>
            <p className="text-xs text-slate-400">Discover the unique lore that shapes the ocean currents</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Haki Mastery',
              desc: 'Learn about the three spiritual energies: Haoshoku, Busoshoku, and Kenbunshoku, and their advanced applications.',
              icon: Compass,
              viewId: 'haki',
              badge: 'Power Guide'
            },
            {
              title: 'The Poneglyphs',
              desc: 'The monolithic, indestructible stones carrying the true history of the Void Century written in ancient script.',
              icon: Scroll,
              viewId: 'poneglyphs',
              badge: 'Historical'
            },
            {
              title: 'Meito Weapons',
              desc: 'Inspect the graded blades of the world, from Supreme Grade swords to cursed demonic steel.',
              icon: Swords,
              viewId: 'weapons',
              badge: 'Weapons'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                onClick={() => onViewChange(item.viewId)}
                className="glass-card border border-gold-500/10 p-5 rounded-xl hover:border-gold-500/35 hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between h-48 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Icon className="w-6 h-6 text-gold-400" />
                    <span className="text-[9px] font-mono text-gold-400 border border-gold-500/20 px-1.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-200 mt-4 group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-gold-500/70 group-hover:text-gold-400 flex items-center gap-1">
                  Study records <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
