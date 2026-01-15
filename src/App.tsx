import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, AlertCircle } from 'lucide-react';
import { Pet, type PetType, type PetData, type RoomType } from './models/Pet';
import PetSelector from './components/PetSelector';
import StatsPanel from './components/StatsPanel';
import RoomNavigation from './components/RoomNavigation';
import RoomView from './components/RoomView';

const STORAGE_KEY = 'etherpet-save';

interface SaveData {
  name: string;
  type: PetType;
  data: PetData;
  createdAt: number;
}

function App() {
  const [pet, setPet] = useState<Pet | null>(null);

  // Load pet from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const saveData: SaveData = JSON.parse(saved);
        const loadedPet = Pet.fromJSON(saveData.name, saveData.type, saveData.data);
        setPet(loadedPet);
      } catch (error) {
        console.error('Failed to load pet:', error);
      }
    }
  }, []);

  // Save pet to localStorage whenever it changes
  useEffect(() => {
    if (pet) {
      const saveData: SaveData = {
        name: pet.name,
        type: pet.type,
        data: pet.toJSON(),
        createdAt: pet.createdAt,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    }
  }, [pet]);

  // Update pet stats periodically
  useEffect(() => {
    if (!pet) return;

    const interval = setInterval(() => {
      setPet((current) => {
        if (!current) return null;
        current.update();
        // Force re-render by creating new reference
        return Pet.fromJSON(current.name, current.type, current.toJSON());
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [pet]);

  const handleCreatePet = (name: string, type: PetType) => {
    const newPet = new Pet(name, type);
    setPet(newPet);
  };

  const handleResetPet = () => {
    if (confirm('Are you sure you want to reset your pet? This cannot be undone!')) {
      localStorage.removeItem(STORAGE_KEY);
      setPet(null);
    }
  };

  const handleInteraction = () => {
    setPet((current) => {
      if (!current) return null;
      // Force re-render
      return Pet.fromJSON(current.name, current.type, current.toJSON());
    });
  };

  const handleRoomChange = (room: RoomType) => {
    if (!pet) return;
    const result = pet.changeRoom(room);
    if (result.success) {
      handleInteraction();
    } else {
      alert(result.message);
    }
  };

  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-space-900 via-space-800 to-space-900">
        <PetSelector onSelect={handleCreatePet} />
      </div>
    );
  }

  const status = pet.getStatus();

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-900 via-space-800 to-space-900 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.header
          className="text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
            EtherPets
          </h1>
          <p className="text-white/70">Your cosmic companion awaits</p>
        </motion.header>

        {/* Room Navigation */}
        <div className="max-w-6xl mx-auto mb-6">
          <RoomNavigation
            currentRoom={pet.currentRoom}
            unlockedRooms={pet.unlocked.rooms}
            onRoomChange={handleRoomChange}
          />
        </div>

        {/* Status Warning */}
        {status.needsAttention.length > 0 && (
          <motion.div
            className="max-w-6xl mx-auto mb-6 bg-red-500/20 backdrop-blur-md border border-red-500/30 rounded-xl p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 text-white">
              <AlertCircle className="w-5 h-5" />
              <span className="font-medium">Needs attention:</span>
              <span>{status.needsAttention.join(', ')}</span>
            </div>
          </motion.div>
        )}

        {/* Main layout - Single unified view */}
        <div className="max-w-7xl mx-auto">
          {/* Top: Stats Panel */}
          <div className="mb-6">
            <StatsPanel stats={pet.stats} />
          </div>

          {/* Main Game Area - Pet + Room Background + Interactive Items */}
          <div className="relative">
            <RoomView
              pet={pet}
              currentRoom={pet.currentRoom}
              onInteraction={handleInteraction}
            />
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          className="mt-12 text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={handleResetPet}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors border border-white/20 flex items-center gap-2 mx-auto"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Pet
          </button>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/60">
            <a
              href="https://github.com/heysebitas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/90 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              heysebitas
            </a>
            <a
              href="https://ghw.mlh.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/90 transition-colors"
            >
              MLH Global Hack Week
            </a>
          </div>
          
          <p className="text-xs text-white/40">
            Made with ❤️ for MLH Global Hack Week January 2026
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
