import { motion } from 'framer-motion';
import { Pet } from '../models/Pet';
import { PET_TYPES } from '../data/petTypes';
import PetAvatar from './PetAvatar';

interface Props {
  pet: Pet;
}

export default function PetDisplay({ pet }: Props) {
  const petData = PET_TYPES[pet.type];
  const status = pet.getStatus();
  const scale = 1 + (pet.stats.level - 1) * 0.1; // Grows with level

  return (
    <div className="relative">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 -m-8 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: petData.colors.glow }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main pet container */}
      <motion.div
        className="relative z-10"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ scale }}
      >
        {/* Particles */}
        <div className="absolute inset-0 -m-12">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: petData.colors.glow,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -30],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        {/* Pet body */}
        <motion.div
          className="relative flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pet avatar */}
          <div className="relative">
            <PetAvatar type={pet.type} mood={status.mood} level={pet.stats.level} />
          </div>

          {/* Level badge */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 font-bold px-4 py-1 rounded-full shadow-lg text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Level {pet.stats.level}
          </motion.div>
        </motion.div>

        {/* Pet name */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">{pet.name}</h2>
          <p className="text-sm text-white/80 mt-1">{petData.displayName}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
