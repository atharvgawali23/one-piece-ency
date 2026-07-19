import React, { useState, useRef } from 'react';
import { Award, Compass, Skull, Shield, Upload, Download, RefreshCw, Plus, Minus } from 'lucide-react';
import { characters } from '../data/characters';

export default function BountySection() {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'creator'>('leaderboard');

  // Creator state
  const [posterName, setPosterName] = useState('LUFFY D. CODER');
  const [posterAlias, setPosterAlias] = useState('AI STRAW HAT');
  const [bountyValue, setBountyValue] = useState(500000000);
  const [posterTag, setPosterTag] = useState('DEAD OR ALIVE');
  const [posterCrew, setPosterCrew] = useState('Straw Hat Pirates');
  const [customImage, setCustomImage] = useState<string>('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Leaderboard sorting
  const sortedBounties = [...characters]
    .filter(c => c.bountyAmount > 0)
    .sort((a, b) => b.bountyAmount - a.bountyAmount);

  // Quick Action Buttons for Bounty amount
  const adjustBounty = (amount: number) => {
    setBountyValue(prev => Math.max(0, prev + amount));
  };

  // Image Upload handler (Drag and Drop / Select)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setCustomImage(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setCustomImage(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(e.dataTransfer.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const downloadPoster = () => {
    window.print();
  };

  const formatBeli = (num: number) => {
    return new Intl.NumberFormat().format(num) + ' -';
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
          Beli Bounty Headquarters
        </h1>
        <p className="text-xs text-slate-400">Track the highest-priced targets on the seas, or draft your own official wanted scroll.</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gold-500/10 gap-2">
        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`px-4 py-2.5 text-xs font-semibold font-mono transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'leaderboard'
              ? 'text-gold-400 border-b-2 border-gold-400 bg-gold-400/5'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Award className="w-4 h-4 text-gold-500" />
          Beli Leaderboard
        </button>
        <button
          onClick={() => setActiveTab('creator')}
          className={`px-4 py-2.5 text-xs font-semibold font-mono transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'creator'
              ? 'text-red-400 border-b-2 border-red-500 bg-red-500/5'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Skull className="w-4 h-4 text-red-500" />
          Wanted Poster Creator
        </button>
      </div>

      {/* TAB 1: LEADERBOARD */}
      {activeTab === 'leaderboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Top 3 Spotlight Posters */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedBounties.slice(0, 3).map((c, index) => {
              const medals = ['🥇 1st Emperor', '🥈 2nd Emperor', '🥉 3rd Emperor'];
              return (
                <div key={c.id} className="glass-card border border-gold-500/20 p-5 rounded-2xl flex flex-col justify-between space-y-4 bg-gradient-to-b from-navy-950/40 to-navy-950/60 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/5 rounded-full blur-xl"></div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">
                      {medals[index]}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Wanted</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-slate-800 shrink-0 bg-navy-950">
                      <img 
                        src={c.image} 
                        alt={c.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-display text-slate-100">{c.name}</h4>
                      <p className="text-[10px] font-mono text-slate-400 italic mt-0.5 line-clamp-1">{c.nickname}</p>
                      <p className="text-[11px] text-slate-500 font-sans mt-1">{c.crew}</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-500">Wanted Bounty:</span>
                    <span className="text-sm font-bold text-red-400 text-glow-crimson font-sans">
                      {c.bounty}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed List */}
          <div className="lg:col-span-3 glass-card border border-gold-500/10 rounded-2xl overflow-hidden">
            <div className="p-4 bg-navy-950/40 border-b border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-wider grid grid-cols-12 gap-2">
              <span className="col-span-1 text-center">Rank</span>
              <span className="col-span-5 md:col-span-6">Pirate Record / Affiliation</span>
              <span className="col-span-3 text-center">Status</span>
              <span className="col-span-3 text-right">Beli Bounty</span>
            </div>

            <div className="divide-y divide-slate-800/60 text-xs">
              {sortedBounties.map((c, index) => (
                <div key={c.id} className="p-4 hover:bg-gold-400/5 transition-colors grid grid-cols-12 items-center gap-2">
                  <span className="col-span-1 text-center font-mono font-bold text-slate-400">
                    #{index + 1}
                  </span>
                  <div className="col-span-5 md:col-span-6 flex items-center gap-3">
                    <img 
                      src={c.image} 
                      alt={c.name}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-md object-cover border border-slate-800 shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-slate-200">{c.name}</p>
                      <p className="text-[10px] text-slate-400 line-clamp-1">{c.crew || 'Standalone figure'}</p>
                    </div>
                  </div>
                  <span className="col-span-3 text-center">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase ${c.status === 'Alive' ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/20' : 'bg-red-950/40 text-red-400 border border-red-500/20'}`}>
                      {c.status}
                    </span>
                  </span>
                  <span className="col-span-3 text-right font-mono font-bold text-red-400 text-glow-crimson font-sans">
                    {c.bounty}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: POSTER CREATOR */}
      {activeTab === 'creator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card border border-gold-500/10 p-5 rounded-xl space-y-4">
              <h3 className="text-sm font-mono text-gold-400 uppercase tracking-widest border-b border-gold-500/10 pb-1 font-bold">Draft Custom Poster</h3>

              {/* Character Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Pirate Name</label>
                <input 
                  id="poster-name-input"
                  type="text" 
                  value={posterName}
                  onChange={(e) => setPosterName(e.target.value.toUpperCase())}
                  className="w-full text-xs bg-navy-950 border border-gold-500/10 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:border-gold-400"
                />
              </div>

              {/* Alias / Nickname */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Alias / Title</label>
                <input 
                  id="poster-alias-input"
                  type="text" 
                  value={posterAlias}
                  onChange={(e) => setPosterAlias(e.target.value.toUpperCase())}
                  className="w-full text-xs bg-navy-950 border border-gold-500/10 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:border-gold-400"
                />
              </div>

              {/* Tag style */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Poster Tag</label>
                <select
                  id="poster-tag-select"
                  value={posterTag}
                  onChange={(e) => setPosterTag(e.target.value)}
                  className="w-full text-xs bg-navy-950 border border-gold-500/10 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:border-gold-400"
                >
                  <option value="DEAD OR ALIVE">DEAD OR ALIVE</option>
                  <option value="ONLY ALIVE">ONLY ALIVE (Celestial command)</option>
                  <option value="ONLY DEAD">ONLY DEAD</option>
                </select>
              </div>

              {/* Interactive Bounty Incrementors */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Beli Bounty (฿)</label>
                <div className="flex items-center gap-2">
                  <input 
                    id="poster-bounty-input"
                    type="number" 
                    value={bountyValue}
                    onChange={(e) => setBountyValue(Math.max(0, parseInt(e.target.value) || 0))}
                    className="flex-1 text-xs bg-navy-950 border border-gold-500/10 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:border-gold-400 font-mono"
                  />
                </div>
                {/* Fast Action Buttons */}
                <div className="grid grid-cols-4 gap-1.5 pt-1.5 font-mono text-[9px]">
                  <button 
                    onClick={() => adjustBounty(50000000)}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center gap-0.5 cursor-pointer"
                  >
                    +50M
                  </button>
                  <button 
                    onClick={() => adjustBounty(200000000)}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center gap-0.5 cursor-pointer"
                  >
                    +200M
                  </button>
                  <button 
                    onClick={() => adjustBounty(1000000000)}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center gap-0.5 cursor-pointer"
                  >
                    +1B
                  </button>
                  <button 
                    onClick={() => setBountyValue(30000000)}
                    className="p-1 rounded bg-red-950/40 hover:bg-red-900/30 text-red-400 border border-red-500/20 flex items-center justify-center cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* File Image Upload */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Poster portrait</label>
                <div 
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={triggerFileSelect}
                  className="border border-dashed border-gold-500/30 rounded-lg p-4 text-center cursor-pointer hover:border-gold-400 hover:bg-gold-400/5 transition-all space-y-1 group"
                >
                  <Upload className="w-5 h-5 text-gold-400 mx-auto animate-bounce group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] font-mono text-slate-300 font-semibold">Drag image here or click to upload</p>
                  <p className="text-[9px] text-slate-500">Supports PNG, JPG, or GIF</p>
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2">
                <button
                  onClick={downloadPoster}
                  className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/20 cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Download / Print Custom Poster
                </button>
              </div>

            </div>
          </div>

          {/* Large High-Fidelity Pirate wanted Poster Preview */}
          <div className="lg:col-span-7 flex justify-center items-center">
            
            {/* Poster parchment board */}
            <div 
              id="pirate-wanted-scroll"
              className="w-full max-w-[380px] aspect-[1/1.45] bg-[#E8D4B0] border-[12px] border-[#D1B17A] rounded-md shadow-2xl p-5 text-[#302213] relative overflow-hidden flex flex-col justify-between select-none border-double"
            >
              
              {/* Top Watermark details / Lines */}
              <div className="text-center font-serif tracking-widest text-[11px] font-extrabold uppercase text-[#47331D]/80 border-b-2 border-[#47331D]/30 pb-0.5">
                Marine Headquarters
              </div>

              {/* Main "WANTED" stamp text */}
              <div className="text-center font-display text-4xl md:text-5xl font-black tracking-[0.2em] text-[#302213] leading-none mt-2 font-serif">
                WANTED
              </div>

              {/* Portrait container with custom rustic filter */}
              <div className="w-full aspect-square bg-[#302213] border-[6px] border-[#302213] rounded shadow-lg overflow-hidden relative group mt-1.5 shrink-0">
                <img 
                  src={customImage} 
                  alt="Wanted target photo"
                  className="w-full h-full object-cover filter sepia contrast-125 brightness-90 grayscale-[10%]"
                />
                
                {/* Vintage grunge cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Dead or Alive stamp */}
              <div className="text-center font-serif text-[12px] font-black tracking-widest uppercase text-[#302213] mt-2 border-b-2 border-[#47331D]/30 pb-1">
                {posterTag}
              </div>

              {/* Name stamp */}
              <div className="text-center font-serif space-y-1 py-1 shrink-0">
                <h2 className="text-xl md:text-2xl font-black tracking-widest text-[#302213] uppercase truncate font-serif leading-none">
                  {posterName}
                </h2>
                {posterAlias && (
                  <p className="text-[10px] font-bold text-[#47331D]/70 tracking-widest truncate">
                    "{posterAlias}"
                  </p>
                )}
              </div>

              {/* Bounty amount footer */}
              <div className="text-center font-serif border-t-2 border-[#47331D]/30 pt-2 flex items-center justify-center gap-1.5 shrink-0">
                <span className="text-xl font-extrabold text-[#302213] font-serif tracking-wide">฿</span>
                <span className="text-2xl font-black text-[#302213] font-serif tracking-wider">
                  {formatBeli(bountyValue)}
                </span>
              </div>

              {/* Tiny footer credit lines */}
              <div className="text-[7px] font-serif text-[#47331D]/60 tracking-widest text-center mt-1.5 leading-none">
                MARIN HQ. SENDS RECOMPENSE. DECRYPTED CODES SECURE.
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
