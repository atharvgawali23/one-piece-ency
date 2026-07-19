import { useState } from 'react';
import { Film, Gamepad2, Info, Calendar, Award, Star } from 'lucide-react';
import { movies, games } from '../data/other';

export default function MediaSection() {
  const [mediaType, setMediaType] = useState<'movies' | 'games'>('movies');

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-glow-gold text-gold-400 tracking-wide">
          One Piece Media Archive
        </h1>
        <p className="text-xs text-slate-400">Explore the theatrical movies and console video game adaptations of the Grand Line.</p>
      </div>

      {/* Media Switcher */}
      <div className="flex border-b border-gold-500/10 gap-2">
        <button
          onClick={() => setMediaType('movies')}
          className={`px-4 py-2.5 text-xs font-semibold font-mono transition-all cursor-pointer flex items-center gap-2 ${
            mediaType === 'movies'
              ? 'text-gold-400 border-b-2 border-gold-400 bg-gold-400/5'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Film className="w-4 h-4 text-gold-400" />
          Theatrical Movies
        </button>
        <button
          onClick={() => setMediaType('games')}
          className={`px-4 py-2.5 text-xs font-semibold font-mono transition-all cursor-pointer flex items-center gap-2 ${
            mediaType === 'games'
              ? 'text-gold-400 border-b-2 border-gold-400 bg-gold-400/5'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Gamepad2 className="w-4 h-4 text-gold-400" />
          Console Video Games
        </button>
      </div>

      {/* Media Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* MOVIES LIST */}
        {mediaType === 'movies' && movies.map((movie, idx) => (
          <div key={idx} className="glass-card border border-gold-500/10 rounded-xl overflow-hidden flex flex-col justify-between hover:border-gold-500/25 transition-all group">
            <div className="h-44 relative bg-navy-950 overflow-hidden shrink-0 border-b border-slate-800/60">
              <img 
                src={movie.image} 
                alt={movie.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-mono bg-navy-950/80 border border-gold-500/20 text-gold-400">
                🎥 THEATRICAL
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gold-500 bg-gold-500/10 border border-gold-500/25 px-2 py-0.5 rounded">
                  Released: {movie.releaseYear}
                </span>
                <h3 className="text-base font-bold text-slate-100 font-display group-hover:text-gold-400 transition-colors">
                  {movie.title}
                </h3>
                <p className="text-[11px] text-slate-400 font-mono">Director: {movie.director}</p>
                <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3 pt-1">
                  {movie.summary}
                </p>
              </div>

              <div className="border-t border-slate-800/60 pt-3 flex items-center gap-1.5 text-[11px] font-mono text-red-400">
                <Award className="w-4 h-4 text-red-500" />
                <span>Primary Foe: <strong>{movie.mainVillain}</strong></span>
              </div>
            </div>
          </div>
        ))}

        {/* GAMES LIST */}
        {mediaType === 'games' && games.map((game, idx) => (
          <div key={idx} className="glass-card border border-gold-500/10 rounded-xl overflow-hidden flex flex-col justify-between hover:border-gold-500/25 transition-all group">
            <div className="h-44 relative bg-navy-950 overflow-hidden shrink-0 border-b border-slate-800/60">
              <img 
                src={game.image} 
                alt={game.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-mono bg-navy-950/80 border border-gold-500/20 text-gold-400">
                🎮 GAMEPLAY
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gold-500 bg-gold-500/10 border border-gold-500/25 px-2 py-0.5 rounded">
                  Released: {game.releaseYear}
                </span>
                <h3 className="text-base font-bold text-slate-100 font-display group-hover:text-gold-400 transition-colors">
                  {game.title}
                </h3>
                <p className="text-[11px] text-slate-400 font-mono">Developer: {game.developer} | Genre: {game.genre}</p>
              </div>

              <div className="border-t border-slate-800/60 pt-3 flex flex-wrap items-center gap-1 text-[10px] font-mono text-slate-400">
                <span>Available on:</span>
                {game.platforms.map((platform, i) => (
                  <span key={i} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
