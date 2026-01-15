import { motion } from 'framer-motion';
import { Apple, Cookie, Drumstick, Pizza, Bath, Sparkles, Bed, Moon, CircleDot, Disc, Bot } from 'lucide-react';
import type { RoomType, Pet } from '../models/Pet';
import { useState } from 'react';
import RoomBackground from './RoomBackground';
import PetAvatar from './PetAvatar';

interface Props {
  pet: Pet;
  currentRoom: RoomType;
  onInteraction: () => void;
}

interface ActionResult {
  message: string;
  coins?: number;
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
  disabled: boolean;
}

function ActionButton({ icon, label, color, onClick, disabled }: ActionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl
        bg-gradient-to-br ${color} text-white
        shadow-xl transition-all duration-200
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}
      `}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      <div className="w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-semibold">{label}</span>
    </motion.button>
  );
}

export default function RoomView({ pet, currentRoom, onInteraction }: Props) {
  const [feedback, setFeedback] = useState<ActionResult | null>(null);

  const showFeedback = (result: { success: boolean; message: string; coins?: number }) => {
    if (result.success) {
      setFeedback({ message: result.message, coins: result.coins });
      setTimeout(() => setFeedback(null), 3000);
    } else {
      setFeedback({ message: result.message });
      setTimeout(() => setFeedback(null), 2000);
    }
    onInteraction();
  };

  const handleAction = (action: () => { success: boolean; message: string; coins?: number }) => {
    const result = action();
    showFeedback(result);
  };

  const renderLivingRoom = () => (
    <>
      <ActionButton
        icon={<Apple className="w-10 h-10" />}
        label="Apple"
        color="from-green-500 to-emerald-500"
        onClick={() => handleAction(() => pet.feed('basic'))}
        disabled={false}
      />
      {pet.unlocked.foods.includes('premium') && (
        <ActionButton
          icon={<Drumstick className="w-10 h-10" />}
          label="Premium"
          color="from-amber-500 to-orange-500"
          onClick={() => handleAction(() => pet.feed('premium'))}
          disabled={false}
        />
      )}
      <ActionButton
        icon={<CircleDot className="w-10 h-10" />}
        label="Ball"
        color="from-blue-500 to-cyan-500"
        onClick={() => handleAction(() => pet.play('low'))}
        disabled={false}
      />
      <ActionButton
        icon={<Disc className="w-10 h-10" />}
        label="Disc"
        color="from-purple-500 to-pink-500"
        onClick={() => handleAction(() => pet.play('high'))}
        disabled={false}
      />
    </>
  );

  const renderKitchen = () => (
    <>
      <ActionButton
        icon={<Apple className="w-10 h-10" />}
        label="Apple"
        color="from-green-500 to-emerald-500"
        onClick={() => handleAction(() => pet.feed('basic'))}
        disabled={false}
      />
      <ActionButton
        icon={<Cookie className="w-10 h-10" />}
        label="Cookie"
        color="from-amber-500 to-yellow-500"
        onClick={() => handleAction(() => pet.feed('basic'))}
        disabled={false}
      />
      {pet.unlocked.foods.includes('premium') && (
        <>
          <ActionButton
            icon={<Pizza className="w-10 h-10" />}
            label="Pizza"
            color="from-orange-500 to-red-500"
            onClick={() => handleAction(() => pet.feed('premium'))}
            disabled={false}
          />
          <ActionButton
            icon={<Drumstick className="w-10 h-10" />}
            label="Steak"
            color="from-red-500 to-rose-500"
            onClick={() => handleAction(() => pet.feed('premium'))}
            disabled={false}
          />
        </>
      )}
    </>
  );

  const renderBathroom = () => (
    <>
      <ActionButton
        icon={<Bath className="w-10 h-10" />}
        label="Bath"
        color="from-cyan-500 to-blue-500"
        onClick={() => handleAction(() => pet.clean())}
        disabled={false}
      />
      <ActionButton
        icon={<Sparkles className="w-10 h-10" />}
        label="Deep Clean"
        color="from-blue-500 to-purple-500"
        onClick={() => handleAction(() => pet.clean())}
        disabled={false}
      />
    </>
  );

  const renderBedroom = () => (
    <>
      <ActionButton
        icon={<Moon className="w-10 h-10" />}
        label="Nap"
        color="from-indigo-500 to-purple-500"
        onClick={() => handleAction(() => pet.sleep('nap'))}
        disabled={false}
      />
      <ActionButton
        icon={<Bed className="w-10 h-10" />}
        label="Sleep"
        color="from-purple-500 to-pink-500"
        onClick={() => handleAction(() => pet.sleep('sleep'))}
        disabled={false}
      />
    </>
  );

  const renderPlayground = () => (
    <>
      <ActionButton
        icon={<CircleDot className="w-10 h-10" />}
        label="Ball"
        color="from-blue-500 to-cyan-500"
        onClick={() => handleAction(() => pet.play('low'))}
        disabled={false}
      />
      {pet.unlocked.toys.includes('frisbee') && (
        <ActionButton
          icon={<Disc className="w-10 h-10" />}
          label="Frisbee"
          color="from-purple-500 to-pink-500"
          onClick={() => handleAction(() => pet.play('medium'))}
          disabled={false}
        />
      )}
      {pet.unlocked.toys.includes('robot') && (
        <ActionButton
          icon={<Bot className="w-10 h-10" />}
          label="Robot"
          color="from-pink-500 to-rose-500"
          onClick={() => handleAction(() => pet.play('high'))}
          disabled={false}
        />
      )}
    </>
  );

  const getRoomTitle = () => {
    const titles: Record<RoomType, string> = {
      living: 'Living Room',
      kitchen: 'Kitchen',
      bathroom: 'Bathroom',
      bedroom: 'Bedroom',
      playground: 'Playground',
    };
    return titles[currentRoom];
  };

  const renderRoom = () => {
    switch (currentRoom) {
      case 'living':
        return renderLivingRoom();
      case 'kitchen':
        return renderKitchen();
      case 'bathroom':
        return renderBathroom();
      case 'bedroom':
        return renderBedroom();
      case 'playground':
        return renderPlayground();
      default:
        return null;
    }
  };

  const status = pet.getStatus();

  return (
    <motion.div
      className="relative bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      {/* Room Background */}
      <RoomBackground room={currentRoom} />
      
      {/* Room Title */}
      <div className="relative z-10 pt-6 pb-4">
        <h2 className="text-3xl font-bold text-white text-center drop-shadow-lg">
          {getRoomTitle()}
        </h2>
        <p className="text-white/70 text-center mt-1">Click buttons to interact with {pet.name}!</p>
      </div>

      {/* Pet Display Area */}
      <div className="relative z-10 flex items-center justify-center py-12">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-48 h-48 flex items-center justify-center">
            <PetAvatar type={pet.type} mood={status.mood} level={pet.stats.level} />
          </div>
          
          {/* Pet Name */}
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 text-gray-900 font-bold px-6 py-2 rounded-full shadow-lg text-lg whitespace-nowrap"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {pet.name}
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Items Bar */}
      <div className="relative z-20 bg-black/20 backdrop-blur-sm border-t border-white/20 p-6 mt-8">
        <div className="flex flex-wrap justify-center gap-4">
          {renderRoom()}
        </div>
      </div>

      {/* Feedback Message */}
      {feedback && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute top-24 left-1/2 transform -translate-x-1/2 z-30 px-6 py-3 rounded-full text-center shadow-2xl ${
            feedback.coins ? 'bg-green-500 border-2 border-green-300' : 'bg-blue-500 border-2 border-blue-300'
          }`}
        >
          <p className="text-white font-bold">{feedback.message}</p>
          {feedback.coins && (
            <p className="text-yellow-200 text-sm mt-1">💰 +{feedback.coins} coins!</p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
