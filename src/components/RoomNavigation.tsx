import { motion } from 'framer-motion';
import { Home, Utensils, Bath, Bed, Gamepad2, Lock } from 'lucide-react';
import type { RoomType } from '../models/Pet';

interface Props {
  currentRoom: RoomType;
  unlockedRooms: RoomType[];
  onRoomChange: (room: RoomType) => void;
}

interface RoomInfo {
  type: RoomType;
  name: string;
  icon: React.ReactNode;
  unlockLevel: number;
}

const ROOMS: RoomInfo[] = [
  { type: 'living', name: 'Living Room', icon: <Home className="w-5 h-5" />, unlockLevel: 1 },
  { type: 'kitchen', name: 'Kitchen', icon: <Utensils className="w-5 h-5" />, unlockLevel: 2 },
  { type: 'bathroom', name: 'Bathroom', icon: <Bath className="w-5 h-5" />, unlockLevel: 3 },
  { type: 'bedroom', name: 'Bedroom', icon: <Bed className="w-5 h-5" />, unlockLevel: 5 },
  { type: 'playground', name: 'Playground', icon: <Gamepad2 className="w-5 h-5" />, unlockLevel: 4 },
];

export default function RoomNavigation({ currentRoom, unlockedRooms, onRoomChange }: Props) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="text-lg font-bold text-white mb-3">Rooms</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {ROOMS.map((room) => {
          const isUnlocked = unlockedRooms.includes(room.type);
          const isCurrent = currentRoom === room.type;
          
          return (
            <motion.button
              key={room.type}
              onClick={() => isUnlocked && onRoomChange(room.type)}
              disabled={!isUnlocked}
              className={`
                relative flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-xl 
                transition-all duration-200 min-w-[80px]
                ${isCurrent 
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg scale-105' 
                  : isUnlocked
                    ? 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
                    : 'bg-white/5 text-white/30 cursor-not-allowed'
                }
              `}
              whileHover={isUnlocked ? { scale: 1.05 } : {}}
              whileTap={isUnlocked ? { scale: 0.95 } : {}}
            >
              {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock className="w-6 h-6" />
                </div>
              )}
              <div className={!isUnlocked ? 'opacity-30' : ''}>
                {room.icon}
                <span className="text-xs font-medium block mt-1">{room.name}</span>
                {!isUnlocked && (
                  <span className="text-[10px] opacity-70">Lvl {room.unlockLevel}</span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
