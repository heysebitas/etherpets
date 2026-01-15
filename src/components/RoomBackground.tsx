import { motion } from 'framer-motion';
import type { RoomType } from '../models/Pet';

interface Props {
  room: RoomType;
}

export default function RoomBackground({ room }: Props) {
  const renderLivingRoom = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floor with pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-full h-8 border-b border-purple-300/30"
              style={{ bottom: `${i * 8}%` }}
            />
          ))}
        </div>
      </div>
      
      {/* Wall decorations */}
      <div className="absolute top-20 left-20 w-16 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg border-4 border-amber-600 shadow-xl opacity-80" />
      
      {/* Furniture - Large Sofa */}
      <motion.div
        className="absolute bottom-8 left-12 w-40 h-20 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-t-3xl shadow-2xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute -top-5 left-6 w-28 h-8 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-t-full" />
        {/* Cushions */}
        <div className="absolute top-2 left-8 w-10 h-10 bg-pink-400 rounded-lg opacity-80" />
        <div className="absolute top-2 right-8 w-10 h-10 bg-cyan-400 rounded-lg opacity-80" />
      </motion.div>
      
      {/* Coffee Table */}
      <motion.div
        className="absolute bottom-8 left-56 w-24 h-3 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full shadow-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="absolute -top-2 left-2 w-4 h-4 bg-red-400 rounded-full shadow-lg" />
        <div className="absolute -top-3 right-4 w-6 h-6 bg-blue-300 rounded-lg shadow-lg" />
      </motion.div>
      
      {/* Bookshelf */}
      <motion.div
        className="absolute bottom-16 right-56 w-20 h-32 bg-gradient-to-br from-amber-800 to-amber-950 rounded-lg shadow-2xl"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute left-1 right-1 h-7 border-b border-amber-600" style={{ top: `${i * 25 + 10}%` }}>
            {[...Array(3 + Math.floor(Math.random() * 2))].map((_, j) => (
              <div
                key={j}
                className="absolute w-2 h-6 rounded-sm"
                style={{
                  left: `${j * 20 + 5}%`,
                  backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
                }}
              />
            ))}
          </div>
        ))}
      </motion.div>
      
      {/* Window */}
      <motion.div
        className="absolute top-8 right-12 w-32 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg border-4 border-white/30 shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/40" />
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/40" />
        {/* Stars outside */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </motion.div>
      
      {/* TV */}
      <motion.div
        className="absolute top-24 left-16 w-28 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 shadow-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="absolute inset-1 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
      
      {/* Plant */}
      <motion.div
        className="absolute bottom-8 right-32 w-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-4 bg-gradient-to-br from-red-700 to-red-900 rounded-full" />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-8 bg-green-500 rounded-full"
            style={{
              left: `${Math.random() * 40}%`,
              bottom: `${8 + Math.random() * 20}px`,
            }}
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2 + Math.random(), repeat: Infinity }}
          />
        ))}
      </motion.div>
      
      {/* Lamp */}
      <motion.div
        className="absolute top-32 right-80 w-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-16 bg-gray-600" />
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-8 h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full" />
        <motion.div
          className="absolute top-16 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-200/40 rounded-full blur-md"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );

  const renderKitchen = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floor tiles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, row) =>
          [...Array(16)].map((_, col) => (
            <div
              key={`${row}-${col}`}
              className={`absolute w-16 h-16 ${(row + col) % 2 === 0 ? 'bg-gray-300/20' : 'bg-gray-400/20'} border border-gray-500/10`}
              style={{
                left: `${col * 6.25}%`,
                top: `${row * 8.33}%`,
              }}
            />
          ))
        )}
      </div>
      
      {/* Upper Cabinets */}
      <motion.div
        className="absolute top-8 left-8 w-48 h-20 bg-gradient-to-br from-amber-700 to-amber-900 rounded-b-lg shadow-2xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute w-11 h-16 border-l border-amber-600" style={{ left: `${i * 25}%`, top: '10%' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-2 h-4 bg-gray-800 rounded-full" />
          </div>
        ))}
      </motion.div>
      
      {/* Counter */}
      <motion.div
        className="absolute bottom-16 left-0 right-0 h-24 bg-gradient-to-b from-amber-700 to-amber-900 shadow-2xl"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 to-amber-800" />
      </motion.div>
      
      {/* Stove */}
      <motion.div
        className="absolute bottom-40 left-12 w-28 h-28 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl border-2 border-gray-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Burners */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-10 h-10 bg-gray-800 rounded-full border-2"
            style={{
              left: `${(i % 2) * 50 + 10}%`,
              top: `${Math.floor(i / 2) * 50 + 10}%`,
            }}
            animate={{
              borderColor: ['#dc2626', '#ef4444', '#dc2626'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-red-600/40 to-orange-500/40 rounded-full" />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Pot on stove */}
      <motion.div
        className="absolute bottom-52 left-16 w-12 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-t-lg shadow-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-gray-500 rounded-full" />
        {/* Steam */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/60 rounded-full blur-sm"
            style={{ left: `${20 + i * 30}%`, bottom: '100%' }}
            animate={{ y: [-20, -40], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </motion.div>
      
      {/* Refrigerator */}
      <motion.div
        className="absolute bottom-16 right-12 w-24 h-48 bg-gradient-to-br from-slate-300 to-slate-400 rounded-t-lg shadow-2xl border-2 border-slate-500"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute top-0 left-0 right-0 h-1/2 border-b-2 border-slate-500" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3 h-8 bg-gray-600 rounded-full" />
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-3 h-8 bg-gray-600 rounded-full" />
        {/* Magnets */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${10 + Math.random() * 30}%`,
              backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
            }}
          />
        ))}
      </motion.div>
      
      {/* Sink */}
      <motion.div
        className="absolute bottom-40 right-48 w-20 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg shadow-inner"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute inset-2 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg" />
        {/* Faucet */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-gray-500 to-gray-600 rounded-full" />
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-3 bg-gradient-to-r from-gray-600 to-gray-500 rounded-t-full" />
        {/* Water drip */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-cyan-400 rounded-full"
          animate={{ y: [0, 12], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
      
      {/* Cutting Board */}
      <motion.div
        className="absolute bottom-44 left-52 w-16 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg shadow-xl"
        initial={{ rotate: -45, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute w-full h-0.5 bg-amber-900/30" style={{ top: `${i * 16}%` }} />
        ))}
      </motion.div>
      
      {/* Knife */}
      <motion.div
        className="absolute bottom-46 left-56 w-12 h-2"
        initial={{ rotate: 0 }}
        animate={{ rotate: 45 }}
        transition={{ delay: 0.8 }}
      >
        <div className="absolute left-0 w-8 h-2 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full" />
        <div className="absolute right-0 w-4 h-2 bg-gradient-to-r from-amber-700 to-amber-900 rounded" />
      </motion.div>
      
      {/* Hanging Utensils */}
      <motion.div
        className="absolute top-32 right-32 w-32 h-1 bg-gray-600 rounded-full shadow-lg"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-12 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full shadow-lg"
            style={{ left: `${i * 20 + 5}%`, top: '100%' }}
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  );

  const renderBathroom = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Tiles floor and walls */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, row) =>
          [...Array(16)].map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute w-16 h-16 bg-cyan-100/10 border border-cyan-300/20"
              style={{
                left: `${col * 6.25}%`,
                top: `${row * 8.33}%`,
              }}
            />
          ))
        )}
      </div>
      
      {/* Bathtub */}
      <motion.div
        className="absolute bottom-12 left-16 w-48 h-28 bg-gradient-to-br from-white to-cyan-100 rounded-3xl shadow-2xl border-4 border-gray-200"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="absolute inset-3 bg-gradient-to-br from-cyan-300/40 to-blue-400/40 rounded-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Bubbles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/70 rounded-full shadow-lg"
            style={{
              left: `${15 + Math.random() * 70}%`,
              bottom: '15%',
            }}
            animate={{
              y: [-10, -80],
              opacity: [0.9, 0],
              scale: [0.5, 1.2],
            }}
            transition={{
              duration: 3 + Math.random(),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        {/* Faucet */}
        <div className="absolute -top-8 right-8 w-3 h-10 bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-full" />
        <div className="absolute -top-8 right-4 w-12 h-4 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full" />
      </motion.div>
      
      {/* Toilet */}
      <motion.div
        className="absolute bottom-12 right-64 w-20 h-24"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Bowl */}
        <div className="absolute bottom-0 w-20 h-16 bg-gradient-to-br from-white to-gray-100 rounded-t-3xl shadow-xl border-2 border-gray-200" />
        {/* Tank */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-12 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg border-2 border-gray-200" />
        {/* Lid */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-18 h-2 bg-gray-300 rounded-full" />
      </motion.div>
      
      {/* Sink */}
      <motion.div
        className="absolute bottom-20 right-20 w-20 h-16 bg-gradient-to-br from-white to-gray-200 rounded-lg shadow-xl border-2 border-gray-300"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute inset-2 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 rounded-lg" />
        {/* Faucet */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-2 h-10 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-10 h-3 bg-gradient-to-r from-gray-500 to-gray-400 rounded-t-full" />
        {/* Water drip */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-cyan-400 rounded-full"
          animate={{ y: [0, 12], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
      
      {/* Mirror */}
      <motion.div
        className="absolute top-12 right-16 w-32 h-40 bg-gradient-to-br from-cyan-100/20 to-blue-200/20 rounded-lg border-4 border-gray-300/60 shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="absolute inset-4 bg-gradient-to-br from-white/10 to-cyan-100/10 rounded-lg"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
      
      {/* Towel Rack */}
      <motion.div
        className="absolute top-56 right-56 w-20 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full shadow-lg"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Towels */}
        <motion.div
          className="absolute -top-12 left-2 w-16 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-lg"
          animate={{ rotate: [0, 2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full h-0.5 bg-pink-700/30" style={{ top: `${i * 20}%` }} />
          ))}
        </motion.div>
      </motion.div>
      
      {/* Shower Curtain */}
      <motion.div
        className="absolute top-20 left-12 w-2 h-40 bg-gray-400 rounded-full shadow-lg"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-40 bg-gradient-to-r from-blue-300/40 to-cyan-300/40 rounded-sm"
            style={{ left: '100%', top: `${i * 2}px` }}
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </motion.div>
      
      {/* Bath Mat */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute inset-1 grid grid-cols-8 gap-0.5">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="bg-purple-500/40 rounded-sm" />
          ))}
        </div>
      </motion.div>
      
      {/* Soap Dispenser */}
      <motion.div
        className="absolute bottom-36 right-16 w-6 h-10 bg-gradient-to-b from-green-400 to-green-600 rounded-lg shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-3 bg-gray-300 rounded-t-lg" />
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-green-700/40" />
      </motion.div>
    </div>
  );

  const renderBedroom = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Wooden Floor */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-8 border-b border-amber-700/30"
            style={{ bottom: `${i * 5}%` }}
          />
        ))}
      </div>
      
      {/* Rug */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-br from-red-700 to-red-900 rounded-3xl shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute inset-3 border-4 border-yellow-600/40 rounded-2xl" />
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-0.5 bg-yellow-700/30"
            style={{ top: `${20 + i * 12}%` }}
          />
        ))}
      </motion.div>
      
      {/* Bed */}
      <motion.div
        className="absolute bottom-8 right-12 w-56 h-32 bg-gradient-to-br from-purple-800 to-purple-900 rounded-t-2xl shadow-2xl border-2 border-purple-700"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Headboard */}
        <div className="absolute -top-12 left-0 right-0 h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-t-lg border-2 border-amber-600" />
        {/* Pillows */}
        <div className="absolute top-2 right-4 w-18 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl shadow-lg" />
        <div className="absolute top-3 right-24 w-16 h-10 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-lg" />
        {/* Blanket */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-600/60 to-purple-700/60 rounded-t-2xl"
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-1 bg-indigo-800/30"
              style={{ top: `${i * 12}%` }}
            />
          ))}
        </motion.div>
      </motion.div>
      
      {/* Nightstand */}
      <motion.div
        className="absolute bottom-8 right-72 w-20 h-24 bg-gradient-to-br from-amber-700 to-amber-900 rounded-t-lg shadow-xl border-2 border-amber-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-6 bg-amber-950 rounded-full" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3 h-6 bg-amber-950 rounded-full" />
        {/* Lamp */}
        <motion.div
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-10 h-16"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-8 bg-gray-600 rounded-full" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-6 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-t-full" />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-12 bg-yellow-300/50 rounded-full blur-lg"
            animate={{ scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      
      {/* Dresser */}
      <motion.div
        className="absolute bottom-8 left-12 w-32 h-40 bg-gradient-to-br from-amber-800 to-amber-950 rounded-t-lg shadow-2xl border-2 border-amber-700"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="absolute left-2 right-2 h-12 border-b-2 border-amber-700" style={{ top: `${i * 28 + 10}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-700 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rounded-full" />
          </div>
        ))}
      </motion.div>
      
      {/* Window with moon */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-48 bg-gradient-to-br from-indigo-950/40 to-purple-950/40 rounded-lg border-4 border-gray-600/60 shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-500/50" />
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-500/50" />
        {/* Moon */}
        <motion.div
          className="absolute top-12 right-8 w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full shadow-2xl"
          animate={{
            boxShadow: ['0 0 20px rgba(253, 224, 71, 0.5)', '0 0 50px rgba(253, 224, 71, 0.9)', '0 0 20px rgba(253, 224, 71, 0.5)'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Moon craters */}
          <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="absolute top-6 right-3 w-2 h-2 bg-yellow-400 rounded-full" />
          <div className="absolute bottom-3 left-4 w-2 h-2 bg-yellow-400 rounded-full" />
        </motion.div>
        {/* Stars */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-lg"
            style={{
              left: `${10 + Math.random() * 40}%`,
              top: `${10 + Math.random() * 70}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
      
      {/* Wall Picture */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-24 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg border-4 border-amber-700 shadow-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute inset-2 bg-gradient-to-br from-green-400 to-blue-500 rounded" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-300 rounded-full" />
      </motion.div>
      
      {/* Closet */}
      <motion.div
        className="absolute bottom-8 left-48 w-28 h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-t-lg shadow-2xl border-2 border-gray-600"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-600" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-2 h-8 bg-gray-800 rounded-full" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 w-2 h-8 bg-gray-800 rounded-full" />
      </motion.div>
      
      {/* Teddy Bear */}
      <motion.div
        className="absolute bottom-44 right-20 w-12 h-16"
        initial={{ rotate: -45, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full" />
        <div className="absolute top-1 left-1 w-2 h-2 bg-gray-900 rounded-full" />
        <div className="absolute top-1 right-1 w-2 h-2 bg-gray-900 rounded-full" />
      </motion.div>
    </div>
  );

  const renderPlayground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-cyan-300" />
      
      {/* Grass */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-green-600 to-green-500">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1.5 bg-green-700 rounded-t-full"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${12 + Math.random() * 25}px`,
            }}
            animate={{ x: [-2, 2, -2], rotate: [-5, 5, -5] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div>
      
      {/* Fence */}
      <motion.div
        className="absolute bottom-0 right-0 h-24 flex gap-2"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-3 h-20 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg" />
        ))}
        <div className="absolute top-8 left-0 right-0 h-2 bg-amber-700 rounded-full" />
        <div className="absolute top-14 left-0 right-0 h-2 bg-amber-700 rounded-full" />
      </motion.div>
      
      {/* Tree */}
      <motion.div
        className="absolute bottom-0 left-12 w-16"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Trunk */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-32 bg-gradient-to-b from-amber-700 to-amber-900 rounded-t-lg">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="absolute w-full h-1 bg-amber-950/40" style={{ top: `${30 + i * 20}%` }} />
          ))}
        </div>
        {/* Leaves */}
        <motion.div
          className="absolute bottom-28 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-600 rounded-full"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-36 left-1/2 -translate-x-1/2 w-16 h-16 bg-green-500 rounded-full"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>
      
      {/* Slide */}
      <motion.div
        className="absolute bottom-0 right-20"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative">
          {/* Slide platform */}
          <div className="w-16 h-40 bg-gradient-to-b from-red-500 to-red-700 rounded-t-lg shadow-2xl border-2 border-red-600">
            <div className="absolute top-0 left-0 right-0 h-6 bg-red-400 rounded-t-lg" />
            <div className="absolute top-2 left-2 right-2 h-0.5 bg-red-300/50" />
          </div>
          {/* Slide ramp */}
          <div className="absolute top-36 -right-24 w-32 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-br-3xl shadow-xl border-2 border-yellow-500"
               style={{ transform: 'skewY(-25deg)', transformOrigin: 'top left' }}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="absolute w-full h-0.5 bg-yellow-300/30" style={{ top: `${i * 25}%` }} />
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Swing Set */}
      <motion.div
        className="absolute bottom-0 left-1/3"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Swing frame */}
        <div className="relative w-32 h-40">
          <div className="absolute top-0 left-2 w-3 h-full bg-gradient-to-b from-gray-500 to-gray-700 rounded-t-lg shadow-lg" />
          <div className="absolute top-0 right-2 w-3 h-full bg-gradient-to-b from-gray-500 to-gray-700 rounded-t-lg shadow-lg" />
          <div className="absolute top-0 left-2 right-2 h-3 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 rounded-full shadow-lg" />
          
          {/* Swing seat */}
          <motion.div
            className="absolute top-20 left-1/2 -translate-x-1/2"
            animate={{ rotate: [-8, 8, -8], y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="absolute -top-16 left-1 w-1 h-16 bg-gray-400" />
            <div className="absolute -top-16 right-1 w-1 h-16 bg-gray-400" />
            <div className="w-16 h-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Sandbox */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-12 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-t-2xl shadow-inner border-4 border-amber-700"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="absolute inset-2 bg-yellow-500/40 rounded-t-xl" />
        {/* Toys in sandbox */}
        <div className="absolute top-2 left-4 w-6 h-6 bg-red-500 rounded-sm shadow-lg" />
        <div className="absolute top-3 right-8 w-5 h-5 bg-blue-500 rounded-full shadow-lg" />
      </motion.div>
      
      {/* Ball */}
      <motion.div
        className="absolute bottom-0 right-1/3 w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-xl border-2 border-red-500"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-1 left-1 w-3 h-3 bg-white/40 rounded-full blur-sm" />
      </motion.div>
      
      {/* Flowers */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 w-8 h-8"
          style={{ left: `${10 + i * 12}%` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 + i * 0.1 }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-6 bg-green-600" />
          <motion.div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
            style={{ backgroundColor: `hsl(${i * 45}, 80%, 60%)` }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, delay: i * 2 }}
          >
            {[...Array(5)].map((_, j) => (
              <div
                key={j}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/80 rounded-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(${j * 72}deg) translateY(-4px)`,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      ))}
      
      {/* Sun */}
      <motion.div
        className="absolute top-8 right-16 w-20 h-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 rounded-full shadow-2xl"
        animate={{
          boxShadow: [
            '0 0 40px rgba(251, 191, 36, 0.6)',
            '0 0 60px rgba(251, 191, 36, 0.9)',
            '0 0 40px rgba(251, 191, 36, 0.6)',
          ],
          rotate: [0, 360],
        }}
        transition={{ 
          boxShadow: { duration: 3, repeat: Infinity },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      >
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-8 bg-gradient-to-t from-yellow-300 to-transparent rounded-full"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 22.5}deg) translateY(-20px)`,
            }}
          />
        ))}
      </motion.div>
      
      {/* Clouds */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-10 bg-white/40 rounded-full blur-sm shadow-lg"
          style={{ top: `${8 + i * 8}%`, left: `${10 + i * 25}%` }}
          animate={{ x: [0, 60, 0] }}
          transition={{ duration: 12 + i * 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute -left-5 top-2 w-16 h-10 bg-white/40 rounded-full" />
          <div className="absolute -right-5 top-2 w-16 h-10 bg-white/40 rounded-full" />
          <div className="absolute left-4 -top-2 w-12 h-8 bg-white/40 rounded-full" />
        </motion.div>
      ))}
      
      {/* Butterflies */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3"
          style={{ 
            top: `${30 + Math.random() * 40}%`, 
            left: `${20 + Math.random() * 60}%` 
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, -10, 0],
          }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute w-2 h-2 bg-pink-400 rounded-full" style={{ left: 0 }} />
          <div className="absolute w-2 h-2 bg-purple-400 rounded-full" style={{ right: 0 }} />
        </motion.div>
      ))}
    </div>
  );

  const renderRoom = () => {
    switch (room) {
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

  return (
    <motion.div
      className="absolute inset-0 rounded-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {renderRoom()}
    </motion.div>
  );
}
