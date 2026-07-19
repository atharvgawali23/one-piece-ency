import { useState } from 'react';
import { Clock, Compass, Skull, Shield, Search, Milestone } from 'lucide-react';
import { timelineEvents } from '../data/timeline';

export default function TimelineSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [timelineSearch, setTimelineSearch] = useState('');

  const categories = ['All', 'Void Century', 'Great Pirate Era', 'Straw Hat Journey', 'Ancient History'];

  const filteredEvents = timelineEvents.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(timelineSearch.toLowerCase()) || 
                          event.description.toLowerCase().includes(timelineSearch.toLowerCase()) ||
                          event.year.toLowerCase().includes(timelineSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
          Grand Line Historical Timeline
        </h1>
        <p className="text-xs text-slate-400">Traverse thousands of years of recorded lore, from the Void Century to the active New World campaign.</p>
      </div>

      {/* Filter and Search controls */}
      <div className="glass-card border border-gold-500/10 p-5 rounded-xl space-y-4 bg-navy-950/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Search History Log</label>
            <input 
              id="timeline-search"
              type="text" 
              placeholder="e.g. Joy Boy, Roger, Buster Call..."
              value={timelineSearch}
              onChange={(e) => setTimelineSearch(e.target.value)}
              className="w-full text-xs bg-navy-950 border border-gold-500/10 rounded-md px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-400"
            />
          </div>

          {/* Category selection */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Timeline Era</label>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'text-gold-400 bg-gold-400/10 border border-gold-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline view road */}
      <div className="relative border-l border-gold-500/20 pl-6 ml-4 space-y-10">
        {filteredEvents.map((event, idx) => {
          
          let markerColor = 'bg-gold-400';
          let borderTheme = 'border-gold-500/10';

          if (event.category === 'Void Century') {
            markerColor = 'bg-red-500';
            borderTheme = 'border-red-500/15 bg-red-500/5';
          } else if (event.category === 'Ancient History') {
            markerColor = 'bg-amber-500';
            borderTheme = 'border-amber-500/15 bg-amber-500/5';
          } else if (event.category === 'Straw Hat Journey') {
            markerColor = 'bg-blue-400';
            borderTheme = 'border-blue-500/15 bg-blue-500/5';
          }

          return (
            <div key={event.id} className="relative group animate-fadeIn">
              
              {/* Dot marker */}
              <div className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full ${markerColor} border-4 border-navy-950 group-hover:scale-125 transition-transform duration-300`}></div>

              {/* Event card card */}
              <div className={`glass-card border p-5 rounded-xl space-y-3 hover:border-gold-500/30 transition-all ${borderTheme}`}>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-800/40 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-gold-500 bg-gold-500/5 border border-gold-500/20 px-2 py-0.5 rounded">
                      📅 {event.year}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                      {event.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    File Index: {event.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 font-display group-hover:text-gold-400 transition-colors leading-tight">
                  {event.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {event.description}
                </p>

                {/* Important characters tags */}
                {event.importantCharacters && event.importantCharacters.length > 0 && (
                  <div className="pt-2 border-t border-slate-800/40 flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-400">
                    <span>Key Figures Involved:</span>
                    {event.importantCharacters.map((char, index) => (
                      <span key={index} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        {char}
                      </span>
                    ))}
                  </div>
                )}

              </div>

            </div>
          );
        })}

        {/* No Results Fallback */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12 glass-card border border-gold-500/10 rounded-xl space-y-3">
            <Milestone className="w-8 h-8 text-slate-600 mx-auto animate-pulse" />
            <p className="text-sm font-mono text-slate-400">No chronological logs matched the specifies search queries.</p>
          </div>
        )}
      </div>

    </div>
  );
}
