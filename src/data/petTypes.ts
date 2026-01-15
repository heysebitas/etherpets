import type { PetType } from '../models/Pet';

export interface PetData {
  type: PetType;
  displayName: string;
  description: string;
  emoji: string;
  colors: {
    primary: string;
    secondary: string;
    glow: string;
  };
}

export const PET_TYPES: Record<PetType, PetData> = {
  nebula: {
    type: 'nebula',
    displayName: 'Nebula',
    description: 'A swirling cosmic cloud of stardust and dreams',
    emoji: '🌌',
    colors: {
      primary: 'from-purple-500 via-pink-500 to-purple-600',
      secondary: 'from-purple-400 to-pink-400',
      glow: '#a855f7',
    },
  },
  stardust: {
    type: 'stardust',
    displayName: 'Stardust',
    description: 'A shimmering star sprite made of pure light',
    emoji: '✨',
    colors: {
      primary: 'from-yellow-400 via-amber-400 to-yellow-500',
      secondary: 'from-yellow-300 to-amber-300',
      glow: '#fbbf24',
    },
  },
  cosmos: {
    type: 'cosmos',
    displayName: 'Cosmos',
    description: 'A mysterious planetary being from distant worlds',
    emoji: '🪐',
    colors: {
      primary: 'from-blue-500 via-cyan-500 to-blue-600',
      secondary: 'from-blue-400 to-cyan-400',
      glow: '#3b82f6',
    },
  },
  nova: {
    type: 'nova',
    displayName: 'Nova',
    description: 'An explosive supernova spirit full of energy',
    emoji: '💥',
    colors: {
      primary: 'from-red-500 via-orange-500 to-pink-500',
      secondary: 'from-red-400 to-orange-400',
      glow: '#ef4444',
    },
  },
};
