import { motion } from 'framer-motion';
import { Heart, Droplet, Zap, Smile, UtensilsCrossed, Coins } from 'lucide-react';
import type { PetStats } from '../models/Pet';

interface Props {
  stats: PetStats;
}

interface StatBarProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

function StatBar({ label, value, icon, color, glowColor }: StatBarProps) {
  const getColor = () => {
    if (value >= 70) return color;
    if (value >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white flex items-center gap-2">
          {icon}
          {label}
        </span>
        <span className="text-sm font-bold text-white">{Math.round(value)}%</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          className={`h-full ${getColor()} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            boxShadow: value >= 70 ? `0 0 10px ${glowColor}` : 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function StatsPanel({ stats }: Props) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 space-y-4 shadow-xl border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Header with Level and Coins */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">
          Level {stats.level}
        </h3>
        <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-1.5 rounded-full border border-yellow-500/30">
          <Coins className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-bold text-yellow-400">{stats.coins}</span>
        </div>
      </div>
      
      <StatBar
        label="Hunger"
        value={stats.hunger}
        icon={<UtensilsCrossed className="w-4 h-4" />}
        color="bg-green-500"
        glowColor="#10b981"
      />
      
      <StatBar
        label="Happiness"
        value={stats.happiness}
        icon={<Smile className="w-4 h-4" />}
        color="bg-pink-500"
        glowColor="#ec4899"
      />
      
      <StatBar
        label="Energy"
        value={stats.energy}
        icon={<Zap className="w-4 h-4" />}
        color="bg-blue-500"
        glowColor="#3b82f6"
      />

      <StatBar
        label="Hygiene"
        value={stats.hygiene}
        icon={<Droplet className="w-4 h-4" />}
        color="bg-cyan-500"
        glowColor="#06b6d4"
      />

      <StatBar
        label="Health"
        value={stats.health}
        icon={<Heart className="w-4 h-4" />}
        color="bg-red-500"
        glowColor="#ef4444"
      />

      {/* XP Bar */}
      <div className="pt-4 border-t border-white/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-white">
            Experience
          </span>
          <span className="text-xs text-white/70">
            {stats.experience} / {stats.level * 100} XP
          </span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(stats.experience / (stats.level * 100)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
