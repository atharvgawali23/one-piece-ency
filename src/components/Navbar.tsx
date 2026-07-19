import { useState } from 'react';
import { 
  Menu, X, Search, Compass, Skull, Shield, Swords, 
  MapPin, Scroll, BookOpen, Clock, Flame, Award, 
  Video, Gamepad2, Info, Landmark, HelpCircle 
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  onSearchSelect: (type: string, id: string) => void;
}

export default function Navbar({ currentView, onViewChange, onSearchSelect }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleLinkClick = (view: string) => {
    onViewChange(view);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navGroups = {
    encyclopedia: [
      { id: 'characters', label: 'Characters', icon: Skull },
      { id: 'crews', label: 'Crews & Flags', icon: Award },
      { id: 'fruits', label: 'Devil Fruits', icon: Flame },
      { id: 'islands', label: 'Islands', icon: MapPin },
      { id: 'arcs', label: 'Story Arcs & Sagas', icon: BookOpen },
    ],
    worldLore: [
      { id: 'weapons', label: 'Meito Weapons', icon: Swords },
      { id: 'haki', label: 'Haki Mastery', icon: Compass },
      { id: 'wg', label: 'World Government', icon: Landmark },
      { id: 'ancient', label: 'Ancient Weapons', icon: Shield },
      { id: 'poneglyphs', label: 'Poneglyphs', icon: Scroll },
    ],
    factions: [
      { id: 'pirates', label: 'Legendary Pirates', icon: Skull },
      { id: 'marines', label: 'Navy Marines', icon: Shield },
    ],
    media: [
      { id: 'movies', label: 'Movies Archive', icon: Video },
      { id: 'games', label: 'Video Games', icon: Gamepad2 },
    ]
  };

  return (
    <nav id="sticky-navbar" className="sticky top-0 z-50 w-full glass-card border-b border-gold-500/10 backdrop-blur-md px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => handleLinkClick('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full border border-gold-400/40 flex items-center justify-center bg-navy-950/80 group-hover:border-gold-400 transition-colors">
            <Compass className="w-6 h-6 text-gold-400 animate-pulse group-hover:text-gold-500" />
          </div>
          <div>
            <h1 className="font-display text-lg md:text-xl font-bold text-glow-gold text-gold-400 tracking-wider">
              ONE PIECE
            </h1>
            <p className="text-[10px] font-mono text-slate-400 tracking-widest leading-none">
              ENCYCLOPEDIA
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Home */}
          <button
            onClick={() => handleLinkClick('home')}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              currentView === 'home' 
                ? 'text-gold-400 bg-gold-400/10' 
                : 'text-slate-300 hover:text-gold-400 hover:bg-slate-800/40'
            }`}
          >
            Home
          </button>

          {/* Encyclopedia Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'encyclopedia' ? null : 'encyclopedia')}
              onMouseEnter={() => setActiveDropdown('encyclopedia')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-1 ${
                ['characters', 'crews', 'fruits', 'islands', 'arcs'].includes(currentView)
                  ? 'text-gold-400 bg-gold-400/10'
                  : 'text-slate-300 hover:text-gold-400 hover:bg-slate-800/40'
              }`}
            >
              Encyclopedia
              <span className="text-[10px] opacity-60">▼</span>
            </button>
            <div 
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute left-0 mt-1 w-56 glass-card border border-gold-500/20 rounded-lg p-2 shadow-2xl scale-0 group-hover:scale-100 origin-top-left transition-transform duration-200"
            >
              {navGroups.encyclopedia.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-gold-400 hover:bg-gold-400/5 rounded-md flex items-center gap-3 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gold-400" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Factions Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'factions' ? null : 'factions')}
              onMouseEnter={() => setActiveDropdown('factions')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-1 ${
                ['pirates', 'marines'].includes(currentView)
                  ? 'text-gold-400 bg-gold-400/10'
                  : 'text-slate-300 hover:text-gold-400 hover:bg-slate-800/40'
              }`}
            >
              Factions
              <span className="text-[10px] opacity-60">▼</span>
            </button>
            <div 
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute left-0 mt-1 w-48 glass-card border border-gold-500/20 rounded-lg p-2 shadow-2xl scale-0 group-hover:scale-100 origin-top-left transition-transform duration-200"
            >
              {navGroups.factions.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-gold-400 hover:bg-gold-400/5 rounded-md flex items-center gap-3 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gold-400" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* World Lore Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'worldLore' ? null : 'worldLore')}
              onMouseEnter={() => setActiveDropdown('worldLore')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-1 ${
                ['weapons', 'haki', 'wg', 'ancient', 'poneglyphs'].includes(currentView)
                  ? 'text-gold-400 bg-gold-400/10'
                  : 'text-slate-300 hover:text-gold-400 hover:bg-slate-800/40'
              }`}
            >
              Grand Line Lore
              <span className="text-[10px] opacity-60">▼</span>
            </button>
            <div 
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute left-0 mt-1 w-56 glass-card border border-gold-500/20 rounded-lg p-2 shadow-2xl scale-0 group-hover:scale-100 origin-top-left transition-transform duration-200"
            >
              {navGroups.worldLore.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-gold-400 hover:bg-gold-400/5 rounded-md flex items-center gap-3 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gold-400" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Bounties */}
          <button
            onClick={() => handleLinkClick('bounties')}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-2 ${
              currentView === 'bounties'
                ? 'text-glow-crimson text-red-500 bg-red-500/10 border border-red-500/20'
                : 'text-slate-300 hover:text-red-400 hover:bg-red-500/5'
            }`}
          >
            <Award className="w-4 h-4" />
            Bounties
          </button>

          {/* Timeline */}
          <button
            onClick={() => handleLinkClick('timeline')}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-2 ${
              currentView === 'timeline'
                ? 'text-gold-400 bg-gold-400/10'
                : 'text-slate-300 hover:text-gold-400 hover:bg-slate-800/40'
            }`}
          >
            <Clock className="w-4 h-4" />
            Timeline
          </button>

          {/* Media & Entertainment */}
          <div className="relative group">
            <button
              onMouseEnter={() => setActiveDropdown('media')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-1 ${
                ['movies', 'games'].includes(currentView)
                  ? 'text-gold-400 bg-gold-400/10'
                  : 'text-slate-300 hover:text-gold-400 hover:bg-slate-800/40'
              }`}
            >
              Media
              <span className="text-[10px] opacity-60">▼</span>
            </button>
            <div 
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute right-0 mt-1 w-48 glass-card border border-gold-500/20 rounded-lg p-2 shadow-2xl scale-0 group-hover:scale-100 origin-top-right transition-transform duration-200"
            >
              {navGroups.media.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-gold-400 hover:bg-gold-400/5 rounded-md flex items-center gap-3 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gold-400" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* About */}
          <button
            onClick={() => handleLinkClick('about')}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              currentView === 'about'
                ? 'text-gold-400 bg-gold-400/10'
                : 'text-slate-300 hover:text-gold-400 hover:bg-slate-800/40'
            }`}
          >
            About
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-gold-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 glass-card border border-gold-500/20 rounded-xl space-y-3 max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => handleLinkClick('home')}
            className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:text-gold-400 hover:bg-gold-400/5 rounded-md"
          >
            Home
          </button>
          
          <div className="border-t border-slate-800 py-2">
            <p className="text-[10px] font-mono text-gold-500/60 uppercase tracking-widest px-3 mb-1">Encyclopedia</p>
            {navGroups.encyclopedia.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="w-full text-left px-5 py-1.5 text-xs text-slate-300 hover:text-gold-400 flex items-center gap-2"
              >
                <item.icon className="w-3.5 h-3.5 text-gold-500/80" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-800 py-2">
            <p className="text-[10px] font-mono text-gold-500/60 uppercase tracking-widest px-3 mb-1">Grand Line Lore</p>
            {navGroups.worldLore.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="w-full text-left px-5 py-1.5 text-xs text-slate-300 hover:text-gold-400 flex items-center gap-2"
              >
                <item.icon className="w-3.5 h-3.5 text-gold-500/80" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-800 py-2">
            <p className="text-[10px] font-mono text-gold-500/60 uppercase tracking-widest px-3 mb-1">Factions</p>
            {navGroups.factions.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="w-full text-left px-5 py-1.5 text-xs text-slate-300 hover:text-gold-400 flex items-center gap-2"
              >
                <item.icon className="w-3.5 h-3.5 text-gold-500/80" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-800 py-2">
            <p className="text-[10px] font-mono text-red-400 uppercase tracking-widest px-3 mb-1">Live Updates</p>
            <button
              onClick={() => handleLinkClick('bounties')}
              className="w-full text-left px-5 py-1.5 text-xs text-red-400 hover:text-red-500 flex items-center gap-2"
            >
              <Award className="w-3.5 h-3.5" />
              Bounty Leaderboard
            </button>
            <button
              onClick={() => handleLinkClick('timeline')}
              className="w-full text-left px-5 py-1.5 text-xs text-slate-300 hover:text-gold-400 flex items-center gap-2"
            >
              <Clock className="w-3.5 h-3.5 text-gold-500/80" />
              Grand Timeline
            </button>
          </div>

          <div className="border-t border-slate-800 py-2">
            <p className="text-[10px] font-mono text-gold-500/60 uppercase tracking-widest px-3 mb-1">Media</p>
            {navGroups.media.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="w-full text-left px-5 py-1.5 text-xs text-slate-300 hover:text-gold-400 flex items-center gap-2"
              >
                <item.icon className="w-3.5 h-3.5 text-gold-500/80" />
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleLinkClick('about')}
            className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:text-gold-400 hover:bg-gold-400/5 rounded-md"
          >
            About & Tribute
          </button>
        </div>
      )}
    </nav>
  );
}
