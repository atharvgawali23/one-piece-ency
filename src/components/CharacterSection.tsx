import { useState, useEffect } from 'react';
import { Skull, Heart, Award, Sparkles, User, Shield, Flame, BookOpen, MessageSquare, ListCollapse, X, Info } from 'lucide-react';
import { characters } from '../data/characters';
import { Character } from '../types';

interface CharacterSectionProps {
  selectedCharacterId: string | null;
  onSelectCharacter: (id: string | null) => void;
  onSelectCrew?: (id: string) => void;
}

export default function CharacterSection({ selectedCharacterId, onSelectCharacter, onSelectCrew }: CharacterSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCrew, setSelectedCrew] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedHaki, setSelectedHaki] = useState('All');
  const [sortBy, setSortBy] = useState<'name' | 'bountyDesc' | 'bountyAsc'>('bountyDesc');
  const [activeTab, setActiveTab] = useState<'bio' | 'powers' | 'relations' | 'trivia' | 'timeline'>('bio');

  // Find selected character
  const activeCharacter = characters.find(c => c.id === selectedCharacterId);

  // Sync selected tab on character change
  useEffect(() => {
    setActiveTab('bio');
  }, [selectedCharacterId]);

  // List of all crews for filter dropdown
  const allCrews = ['All', ...Array.from(new Set(characters.map(c => c.crew).filter(Boolean)))];

  // Filter and Sort characters
  const filteredCharacters = characters.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.englishName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCrew = selectedCrew === 'All' || c.crew === selectedCrew;
    
    const matchesStatus = selectedStatus === 'All' || c.status === selectedStatus;
    
    const matchesHaki = selectedHaki === 'All' || c.hakiTypes.some(h => h.includes(selectedHaki));

    return matchesSearch && matchesCrew && matchesStatus && matchesHaki;
  }).sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'bountyDesc') {
      return b.bountyAmount - a.bountyAmount;
    } else {
      return a.bountyAmount - b.bountyAmount;
    }
  });

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
          Grand Line Character Files
        </h1>
        <p className="text-xs text-slate-400">Search and filter through the active figures, pirates, and Marines of the Grand Line.</p>
      </div>

      {/* Filters Control Panel */}
      <div className="glass-card border border-gold-500/10 p-5 rounded-xl space-y-4 bg-navy-950/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Search */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Search Name/Alias</label>
            <input 
              id="character-search"
              type="text" 
              placeholder="e.g. Luffy, Swordsman..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-navy-950 border border-gold-500/10 rounded-md px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-400"
            />
          </div>

          {/* Affiliation / Crew */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Affiliation Crew</label>
            <select
              id="character-crew-filter"
              value={selectedCrew}
              onChange={(e) => setSelectedCrew(e.target.value)}
              className="w-full text-xs bg-navy-950 border border-gold-500/10 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:border-gold-400"
            >
              {allCrews.map(cr => (
                <option key={cr} value={cr}>{cr}</option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Status</label>
            <select
              id="character-status-filter"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full text-xs bg-navy-950 border border-gold-500/10 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:border-gold-400"
            >
              <option value="All">All Statuses</option>
              <option value="Alive">Alive</option>
              <option value="Deceased">Deceased</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>

          {/* Haki */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Haki Type</label>
            <select
              id="character-haki-filter"
              value={selectedHaki}
              onChange={(e) => setSelectedHaki(e.target.value)}
              className="w-full text-xs bg-navy-950 border border-gold-500/10 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:border-gold-400"
            >
              <option value="All">All Haki Types</option>
              <option value="Conqueror">Haoshoku (Conqueror's)</option>
              <option value="Armament">Busoshoku (Armament)</option>
              <option value="Observation">Kenbunshoku (Observation)</option>
            </select>
          </div>

        </div>

        {/* Sort and results status */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-2 border-t border-slate-800/40 text-[11px] font-mono text-slate-400 gap-2">
          <div>
            Showing <strong className="text-gold-400">{filteredCharacters.length}</strong> figures
          </div>
          <div className="flex items-center gap-2">
            <span>Sort by:</span>
            <button 
              onClick={() => setSortBy('bountyDesc')}
              className={`px-2 py-1 rounded transition-colors ${sortBy === 'bountyDesc' ? 'text-gold-400 bg-gold-400/10 border border-gold-500/20' : 'hover:text-slate-200'}`}
            >
              Highest Bounty
            </button>
            <button 
              onClick={() => setSortBy('bountyAsc')}
              className={`px-2 py-1 rounded transition-colors ${sortBy === 'bountyAsc' ? 'text-gold-400 bg-gold-400/10 border border-gold-500/20' : 'hover:text-slate-200'}`}
            >
              Lowest Bounty
            </button>
            <button 
              onClick={() => setSortBy('name')}
              className={`px-2 py-1 rounded transition-colors ${sortBy === 'name' ? 'text-gold-400 bg-gold-400/10 border border-gold-500/20' : 'hover:text-slate-200'}`}
            >
              A-Z Alphabetical
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Characters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCharacters.map((c) => (
          <div 
            key={c.id}
            onClick={() => onSelectCharacter(c.id)}
            className="group glass-card border border-gold-500/10 rounded-xl overflow-hidden hover:border-gold-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-[370px] relative"
          >
            {/* Background gradient block based on theme color */}
            <div className={`absolute top-0 inset-x-0 h-20 bg-gradient-to-b ${c.themeColor || 'from-blue-600 to-navy-950'} opacity-10`}></div>

            {/* Character Image */}
            <div className="w-full h-44 relative bg-navy-950 overflow-hidden shrink-0 border-b border-slate-800/60">
              <img 
                src={c.image} 
                alt={c.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase font-semibold bg-navy-950/80 border border-gold-500/20 text-gold-400">
                {c.status}
              </div>
              {(() => {
                let crewBadgeColor = "bg-black/80 border border-slate-800 text-slate-300";
                const crewLower = (c.crew || "").toLowerCase();
                if (crewLower.includes("marine") || crewLower.includes("navy")) {
                  crewBadgeColor = "bg-blue-950/90 border border-blue-500/30 text-blue-300";
                } else if (crewLower.includes("straw hat")) {
                  crewBadgeColor = "bg-red-950/90 border border-red-500/30 text-red-300";
                } else if (crewLower.includes("red hair")) {
                  crewBadgeColor = "bg-rose-950/90 border border-rose-500/30 text-rose-300";
                } else if (crewLower.includes("whitebeard")) {
                  crewBadgeColor = "bg-slate-900/90 border border-slate-600/30 text-slate-300";
                } else if (crewLower.includes("blackbeard")) {
                  crewBadgeColor = "bg-indigo-950/90 border border-indigo-500/30 text-indigo-300";
                } else if (crewLower.includes("roger")) {
                  crewBadgeColor = "bg-amber-950/90 border border-amber-500/30 text-amber-300";
                } else if (crewLower.includes("heart")) {
                  crewBadgeColor = "bg-teal-950/90 border border-teal-500/30 text-teal-300";
                } else if (crewLower.includes("cross guild")) {
                  crewBadgeColor = "bg-fuchsia-950/90 border border-fuchsia-500/30 text-fuchsia-300";
                }
                return (
                  <div className={`absolute bottom-2 left-2 px-2 py-0.5 rounded text-[9px] font-mono ${crewBadgeColor}`}>
                    {c.crew || 'Independent'}
                  </div>
                );
              })()}
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-gold-400 transition-colors font-display leading-tight">
                  {c.name}
                </h3>
                <p className="text-[10px] font-mono text-slate-400 italic line-clamp-1 mt-0.5">
                  {c.nickname}
                </p>

                {/* Affiliations list */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {c.affiliations.slice(0, 3).map((aff, index) => {
                    let badgeColor = "bg-slate-950/80 text-slate-400 border-slate-800";
                    if (aff.toLowerCase().includes("marine") || aff.toLowerCase().includes("navy")) {
                      badgeColor = "bg-blue-950/80 text-blue-400 border-blue-500/20";
                    } else if (aff.toLowerCase().includes("straw hat")) {
                      badgeColor = "bg-red-950/80 text-red-400 border-red-500/20";
                    } else if (aff.toLowerCase().includes("revolutionary")) {
                      badgeColor = "bg-emerald-950/80 text-emerald-400 border-emerald-500/20";
                    } else if (aff.toLowerCase().includes("emperor") || aff.toLowerCase().includes("yonko")) {
                      badgeColor = "bg-amber-950/80 text-amber-400 border-amber-500/20";
                    } else if (aff.toLowerCase().includes("warlord") || aff.toLowerCase().includes("shichibukai")) {
                      badgeColor = "bg-purple-950/80 text-purple-400 border-purple-500/20";
                    } else if (aff.toLowerCase().includes("world government")) {
                      badgeColor = "bg-zinc-950/80 text-zinc-400 border-zinc-500/20";
                    } else if (aff.toLowerCase().includes("whitebeard")) {
                      badgeColor = "bg-slate-900/80 text-slate-300 border-slate-700/20";
                    } else if (aff.toLowerCase().includes("roger")) {
                      badgeColor = "bg-yellow-950/80 text-yellow-400 border-yellow-500/20";
                    } else if (aff.toLowerCase().includes("heart")) {
                      badgeColor = "bg-teal-950/80 text-teal-400 border-teal-500/20";
                    } else if (aff.toLowerCase().includes("cross guild")) {
                      badgeColor = "bg-fuchsia-950/80 text-fuchsia-400 border-fuchsia-500/20";
                    } else if (aff.toLowerCase().includes("blackbeard")) {
                      badgeColor = "bg-violet-950/80 text-violet-400 border-violet-500/20";
                    }
                    return (
                      <span key={index} className={`text-[8.5px] font-mono px-1.5 py-0.5 rounded border leading-none ${badgeColor}`}>
                        {aff}
                      </span>
                    );
                  })}
                </div>

                <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                  {c.occupation}
                </p>
              </div>

              {/* Bounty Display */}
              <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">Wanted Bounty:</span>
                <span className="text-xs font-bold font-mono text-red-400 text-glow-crimson">
                  {c.bounty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Fallback */}
      {filteredCharacters.length === 0 && (
        <div className="text-center py-12 glass-card border border-gold-500/10 rounded-xl space-y-3">
          <Skull className="w-10 h-10 text-slate-600 mx-auto animate-bounce" />
          <p className="text-sm font-mono text-slate-400">No figures matched the specified filters.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCrew('All'); setSelectedStatus('All'); setSelectedHaki('All'); }}
            className="text-xs text-gold-400 underline hover:text-gold-300 cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Wikipedia-style Dossier Modal Overlay */}
      {activeCharacter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-5xl h-[85vh] md:h-[80vh] glass-card border border-gold-400/40 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => onSelectCharacter(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-navy-950/80 border border-gold-500/20 text-slate-400 hover:text-gold-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Photo & Quick Stats Summary */}
            <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gold-500/15 bg-navy-950/40 overflow-y-auto flex flex-col">
              <div className="w-full h-64 md:h-80 relative bg-navy-950">
                <img 
                  src={activeCharacter.image} 
                  alt={activeCharacter.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-navy-950 to-transparent">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest font-bold">
                    {activeCharacter.japaneseName}
                  </span>
                  <h2 className="text-xl font-bold font-display text-slate-100">{activeCharacter.name}</h2>
                </div>
              </div>

              {/* Quick Dossier Meta Info list */}
              <div className="p-5 flex-1 space-y-4 text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Bounty Poster</span>
                  <div className="p-2.5 rounded bg-red-950/20 border border-red-500/20 flex items-center justify-between text-red-400 font-mono font-bold">
                    <span>Wanted Beli:</span>
                    <span className="text-glow-crimson">{activeCharacter.bounty}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-slate-300 font-sans border-t border-slate-800/80 pt-3">
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">Status</span>
                    <span className="font-semibold text-slate-200">{activeCharacter.status}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">Age</span>
                    <span className="font-semibold text-slate-200">{activeCharacter.age}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">Birthday</span>
                    <span className="font-semibold text-slate-200">{activeCharacter.birthday}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">Height</span>
                    <span className="font-semibold text-slate-200">{activeCharacter.height}</span>
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-3 space-y-2">
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">First Appeared</span>
                    <span className="text-slate-200 font-sans leading-none block mt-0.5">Manga: {activeCharacter.firstAppearance.manga}</span>
                    <span className="text-slate-200 font-sans leading-none block">Anime: {activeCharacter.firstAppearance.anime}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">Voice Actors</span>
                    <span className="text-slate-200 font-sans block mt-0.5">Japanese: {activeCharacter.voiceActor.japanese}</span>
                    <span className="text-slate-200 font-sans block">English: {activeCharacter.voiceActor.english}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Wikipedia detailed Tabs */}
            <div className="flex-1 flex flex-col overflow-hidden bg-navy-950/20">
              
              {/* Tab Selector bar */}
              <div className="flex overflow-x-auto border-b border-gold-500/10 p-2 shrink-0 gap-1 scrollbar-none">
                {[
                  { id: 'bio', label: 'Biography', icon: User },
                  { id: 'powers', label: 'Powers & Styles', icon: Flame },
                  { id: 'relations', label: 'Relationships', icon: Heart },
                  { id: 'timeline', label: 'Chronicle', icon: Award },
                  { id: 'trivia', label: 'Trivia & Quotes', icon: MessageSquare }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'text-gold-400 bg-gold-400/10 border border-gold-500/20'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/20'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Contents (Scrollable) */}
              <div className="flex-1 p-6 overflow-y-auto space-y-6 text-sm">
                
                {/* 1. Bio & Personality tab */}
                {activeTab === 'bio' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-2">
                      <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Historical Dossier</h4>
                      <p className="text-slate-300 leading-relaxed text-xs md:text-sm">{activeCharacter.biography}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Personality Profile</h4>
                      <p className="text-slate-300 leading-relaxed text-xs md:text-sm">{activeCharacter.personality}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-800/80 pt-4">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-slate-500 uppercase block">Active & Former Affiliations</span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeCharacter.affiliations.map((aff, i) => {
                            let badgeColor = "bg-slate-900/60 text-slate-300 border-slate-700/30";
                            if (aff.toLowerCase().includes("marine") || aff.toLowerCase().includes("navy")) {
                              badgeColor = "bg-blue-950/80 text-blue-400 border-blue-500/20";
                            } else if (aff.toLowerCase().includes("straw hat")) {
                              badgeColor = "bg-red-950/80 text-red-400 border-red-500/20";
                            } else if (aff.toLowerCase().includes("revolutionary")) {
                              badgeColor = "bg-emerald-950/80 text-emerald-400 border-emerald-500/20";
                            } else if (aff.toLowerCase().includes("emperor") || aff.toLowerCase().includes("yonko")) {
                              badgeColor = "bg-amber-950/80 text-amber-400 border-amber-500/20";
                            } else if (aff.toLowerCase().includes("warlord") || aff.toLowerCase().includes("shichibukai")) {
                              badgeColor = "bg-purple-950/80 text-purple-400 border-purple-500/20";
                            } else if (aff.toLowerCase().includes("world government")) {
                              badgeColor = "bg-zinc-950/80 text-zinc-400 border-zinc-500/20";
                            } else if (aff.toLowerCase().includes("whitebeard")) {
                              badgeColor = "bg-slate-900/80 text-slate-300 border-slate-700/20";
                            } else if (aff.toLowerCase().includes("roger")) {
                              badgeColor = "bg-yellow-950/80 text-yellow-400 border-yellow-500/20";
                            } else if (aff.toLowerCase().includes("heart")) {
                              badgeColor = "bg-teal-950/80 text-teal-400 border-teal-500/20";
                            } else if (aff.toLowerCase().includes("cross guild")) {
                              badgeColor = "bg-fuchsia-950/80 text-fuchsia-400 border-fuchsia-500/20";
                            } else if (aff.toLowerCase().includes("blackbeard")) {
                              badgeColor = "bg-violet-950/80 text-violet-400 border-violet-500/20";
                            }
                            return (
                              <span key={i} className={`text-[10px] font-mono px-2 py-0.5 rounded border ${badgeColor}`}>
                                {aff}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-slate-500 uppercase block">Primary Occupation / Rank</span>
                        <p className="text-slate-200 font-semibold text-xs md:text-sm">{activeCharacter.occupation}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Powers and Fighting Styles */}
                {activeTab === 'powers' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-3">
                      <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Fighting Style</h4>
                      <div className="p-3 bg-navy-950/40 border border-gold-500/5 rounded-lg text-xs text-slate-300 leading-relaxed font-mono">
                        {activeCharacter.fightingStyle}
                      </div>
                    </div>

                    {activeCharacter.devilFruit && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-mono text-purple-400 uppercase tracking-widest border-b border-purple-500/10 pb-1">Devil Fruit Mastery</h4>
                        <p className="text-slate-200 font-semibold text-xs md:text-sm">Fruit: <strong className="text-glow-gold text-gold-400">{activeCharacter.devilFruit}</strong></p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Special Abilities</h4>
                      <ul className="space-y-2">
                        {activeCharacter.abilities.map((ability, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <span className="text-gold-400 mt-1">✦</span>
                            <span>{ability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {activeCharacter.powers && activeCharacter.powers.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Signature Techniques</h4>
                        <ul className="space-y-2">
                          {activeCharacter.powers.map((power, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                              <span className="text-red-400 mt-1">⚡</span>
                              <span>{power}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="space-y-2">
                      <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Haki Levels</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeCharacter.hakiTypes.map((h, i) => (
                          <span key={i} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-gold-400 uppercase">
                            🛡️ {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Relationships map */}
                {activeTab === 'relations' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Relationship Records</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeCharacter.relationships.map((rel, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-navy-950/40 border border-slate-800/80 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-200">{rel.name}</span>
                              <span className="text-[10px] font-mono text-gold-500 bg-gold-500/10 px-1.5 py-0.5 rounded">
                                {rel.relation}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                              {rel.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Chronicle/Timeline */}
                {activeTab === 'timeline' && (
                  <div className="space-y-6 animate-fadeIn">
                    <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Chronicle Milestones</h4>
                    <div className="relative border-l border-gold-500/20 pl-4 ml-2 space-y-6">
                      {activeCharacter.timeline.map((event, idx) => (
                        <div key={idx} className="relative group">
                          {/* Dot marker */}
                          <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-400 border border-navy-950 group-hover:scale-125 transition-transform"></div>
                          <div>
                            <span className="text-[10px] font-mono text-gold-500 bg-gold-500/10 border border-gold-500/20 px-2 py-0.5 rounded">
                              Age: {event.age || 'Unknown'}
                            </span>
                            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                              {event.event}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Trivia & Quotes */}
                {activeTab === 'trivia' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-4">
                      <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Memorable Proclamations</h4>
                      <div className="space-y-3">
                        {activeCharacter.quotes.map((q, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-navy-950/50 border-l-2 border-red-500 text-slate-300 text-xs italic leading-relaxed">
                            "{q}"
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1">Trivia Logs</h4>
                      <ul className="space-y-2">
                        {activeCharacter.trivia.map((t, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                            <span className="text-gold-400 mt-1">✦</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

              </div>
              
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
