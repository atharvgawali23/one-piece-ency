import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CharacterSection from './components/CharacterSection';
import CrewSection from './components/CrewSection';
import DevilFruitSection from './components/DevilFruitSection';
import IslandSection from './components/IslandSection';
import ArcSection from './components/ArcSection';
import LoreSection from './components/LoreSection';
import BountySection from './components/BountySection';
import TimelineSection from './components/TimelineSection';
import MediaSection from './components/MediaSection';
import AboutSection from './components/AboutSection';
import { Compass, Sparkles, Skull, Heart } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [selectedCrewId, setSelectedCrewId] = useState<string | null>(null);

  const handleSearchSelect = (type: string, id: string) => {
    if (type === 'character') {
      setSelectedCharacterId(id);
      setCurrentView('characters');
    } else if (type === 'crew') {
      setSelectedCrewId(id);
      setCurrentView('crews');
    } else if (type === 'fruit') {
      setCurrentView('fruits');
    } else if (type === 'island') {
      setCurrentView('islands');
    }
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    // Reset specific sub-selections when shifting view tabs, except when deep-linking
    if (view !== 'characters') setSelectedCharacterId(null);
    if (view !== 'crews') setSelectedCrewId(null);
  };

  // Render the active view component
  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <Home 
            onViewChange={handleViewChange} 
            onSelectCharacter={(id) => { setSelectedCharacterId(id); setCurrentView('characters'); }}
            onSelectCrew={(id) => { setSelectedCrewId(id); setCurrentView('crews'); }}
          />
        );
      case 'characters':
        return (
          <CharacterSection 
            selectedCharacterId={selectedCharacterId} 
            onSelectCharacter={setSelectedCharacterId}
            onSelectCrew={(id) => { setSelectedCrewId(id); setCurrentView('crews'); }}
          />
        );
      case 'crews':
        return (
          <CrewSection 
            selectedCrewId={selectedCrewId} 
            onSelectCrew={setSelectedCrewId} 
            onSelectCharacter={(id) => { setSelectedCharacterId(id); setCurrentView('characters'); }}
          />
        );
      case 'fruits':
        return <DevilFruitSection />;
      case 'islands':
        return <IslandSection />;
      case 'arcs':
        return <ArcSection />;
      case 'bounties':
        return <BountySection />;
      case 'timeline':
        return <TimelineSection />;
      case 'movies':
      case 'games':
        return <MediaSection />;
      case 'weapons':
      case 'haki':
      case 'wg':
      case 'ancient':
      case 'poneglyphs':
      case 'pirates':
      case 'marines':
        return (
          <LoreSection 
            viewId={currentView} 
            onSelectCharacter={(id) => { setSelectedCharacterId(id); setCurrentView('characters'); }}
          />
        );
      case 'about':
        return <AboutSection />;
      default:
        return (
          <Home 
            onViewChange={handleViewChange} 
            onSelectCharacter={(id) => { setSelectedCharacterId(id); setCurrentView('characters'); }}
            onSelectCrew={(id) => { setSelectedCrewId(id); setCurrentView('crews'); }}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col relative overflow-x-hidden antialiased">
      
      {/* Decorative Wave/Pirate Map Background Gradients */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-red-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Navbar Header */}
      <Navbar 
        currentView={currentView} 
        onViewChange={handleViewChange} 
        onSearchSelect={handleSearchSelect} 
      />

      {/* Main Content Stage */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:px-8 z-10">
        {renderContent()}
      </main>

      {/* Footer Tribute Block */}
      <footer className="w-full bg-navy-950/80 border-t border-gold-500/10 py-6 px-4 md:px-8 text-center text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Skull className="w-4 h-4 text-gold-400" />
          <span>One Piece Encyclopedia © 2026. Everything about the Grand Line.</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          <span>for Eiichiro Oda's Masterpiece</span>
        </div>
      </footer>

    </div>
  );
}
