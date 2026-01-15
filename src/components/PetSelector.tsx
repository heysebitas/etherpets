import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { PetType } from '../models/Pet';
import { PET_TYPES } from '../data/petTypes';
import PetAvatar from './PetAvatar';

interface Props {
  onSelect: (name: string, type: PetType) => void;
}

export default function PetSelector({ onSelect }: Props) {
  const [name, setName] = useState('');
  const [selectedType, setSelectedType] = useState<PetType | null>(null);

  const handleCreate = () => {
    if (name.trim() && selectedType) {
      onSelect(name.trim(), selectedType);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative max-w-3xl w-full bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-6xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            EtherPets
          </h1>
          <p className="text-white/80 text-xl">Adopt your cosmic companion</p>
        </motion.div>

        <div className="space-y-8">
          {/* Name input */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-white font-semibold mb-3 text-lg">
              Name your pet
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a name..."
              className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white text-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm transition-all"
              maxLength={20}
            />
          </motion.div>

          {/* Pet type selection */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-white font-semibold mb-4 text-lg">
              Choose your EtherPet
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.values(PET_TYPES).map((petData) => (
                <motion.button
                  key={petData.type}
                  onClick={() => setSelectedType(petData.type)}
                  className={`relative p-6 rounded-2xl border-2 transition-all ${
                    selectedType === petData.type
                      ? 'border-white bg-white/20 shadow-2xl'
                      : 'border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50'
                  }`}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {selectedType === petData.type && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl blur-2xl opacity-60"
                      style={{ backgroundColor: petData.colors.glow }}
                      layoutId="selection"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <PetAvatar type={petData.type} mood="happy" level={1} />
                    </div>
                    <div className="text-white font-semibold text-base">
                      {petData.displayName}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Selected pet description */}
          {selectedType && (
            <motion.div
              className="p-5 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-white/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-white text-base text-center leading-relaxed">
                {PET_TYPES[selectedType].description}
              </p>
            </motion.div>
          )}

          {/* Create button */}
          <motion.button
            onClick={handleCreate}
            disabled={!name.trim() || !selectedType}
            className={`relative w-full py-5 rounded-xl font-bold text-xl transition-all overflow-hidden ${
              name.trim() && selectedType
                ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white shadow-2xl'
                : 'bg-white/10 text-white/40 cursor-not-allowed'
            }`}
            whileHover={name.trim() && selectedType ? { scale: 1.02, y: -2 } : {}}
            whileTap={name.trim() && selectedType ? { scale: 0.98 } : {}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {name.trim() && selectedType && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            )}
            <span className="relative flex items-center justify-center gap-2">
              Create My Pet! 
              <Sparkles className="w-6 h-6" />
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
