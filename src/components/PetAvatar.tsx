import { motion } from 'framer-motion';
import type { PetType, PetMood } from '../models/Pet';

interface Props {
  type: PetType;
  mood: PetMood;
  level: number;
}

export default function PetAvatar({ type, mood, level }: Props) {
  const scale = 1 + (level - 1) * 0.05;

  if (type === 'nebula') {
    return (
      <svg width="200" height="200" viewBox="0 0 200 200" style={{ transform: `scale(${scale})` }}>
        {/* Outer glow */}
        <defs>
          <radialGradient id="nebulaGlow">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="url(#nebulaGlow)"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main body */}
        <motion.circle
          cx="100"
          cy="100"
          r="50"
          fill="#a855f7"
          filter="url(#glow)"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Swirls */}
        {[0, 120, 240].map((rotation, i) => (
          <motion.path
            key={i}
            d="M100,100 Q120,80 140,100 T100,100"
            fill="none"
            stroke="#ec4899"
            strokeWidth="3"
            opacity="0.7"
            animate={{
              rotate: rotation,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
            style={{ transformOrigin: '100px 100px' }}
          />
        ))}
        
        {/* Eyes based on mood */}
        <g>
          {mood === 'happy' || mood === 'playful' ? (
            <>
              <circle cx="85" cy="90" r="8" fill="#1e1b4b" />
              <circle cx="115" cy="90" r="8" fill="#1e1b4b" />
              <circle cx="87" cy="88" r="3" fill="white" />
              <circle cx="117" cy="88" r="3" fill="white" />
            </>
          ) : mood === 'sleepy' ? (
            <>
              <line x1="80" y1="90" x2="90" y2="90" stroke="#1e1b4b" strokeWidth="3" strokeLinecap="round" />
              <line x1="110" y1="90" x2="120" y2="90" stroke="#1e1b4b" strokeWidth="3" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="85" cy="90" r="6" fill="#1e1b4b" />
              <circle cx="115" cy="90" r="6" fill="#1e1b4b" />
            </>
          )}
          
          {/* Mouth */}
          {mood === 'happy' || mood === 'playful' ? (
            <path d="M85,110 Q100,120 115,110" stroke="#1e1b4b" strokeWidth="3" fill="none" strokeLinecap="round" />
          ) : mood === 'sad' ? (
            <path d="M85,115 Q100,105 115,115" stroke="#1e1b4b" strokeWidth="3" fill="none" strokeLinecap="round" />
          ) : null}
        </g>
      </svg>
    );
  }

  if (type === 'stardust') {
    return (
      <svg width="200" height="200" viewBox="0 0 200 200" style={{ transform: `scale(${scale})` }}>
        <defs>
          <radialGradient id="starGlow">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
          <filter id="starBlur">
            <feGaussianBlur stdDeviation="5"/>
          </filter>
        </defs>
        
        {/* Glow effect */}
        <motion.circle
          cx="100"
          cy="100"
          r="70"
          fill="url(#starGlow)"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        
        {/* Star body */}
        <motion.path
          d="M100,40 L110,80 L150,90 L110,100 L100,140 L90,100 L50,90 L90,80 Z"
          fill="#fbbf24"
          filter="url(#starBlur)"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ transformOrigin: '100px 90px' }}
        />
        
        {/* Inner star */}
        <motion.circle
          cx="100"
          cy="90"
          r="35"
          fill="#fef3c7"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
        
        {/* Sparkles */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x = 100 + Math.cos((angle * Math.PI) / 180) * 60;
          const y = 90 + Math.sin((angle * Math.PI) / 180) * 60;
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="3"
              fill="#fbbf24"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          );
        })}
        
        {/* Face */}
        <g>
          {mood === 'happy' || mood === 'playful' ? (
            <>
              <circle cx="90" cy="85" r="5" fill="#92400e" />
              <circle cx="110" cy="85" r="5" fill="#92400e" />
              <path d="M90,95 Q100,102 110,95" stroke="#92400e" strokeWidth="2" fill="none" />
            </>
          ) : (
            <>
              <circle cx="90" cy="85" r="4" fill="#92400e" />
              <circle cx="110" cy="85" r="4" fill="#92400e" />
            </>
          )}
        </g>
      </svg>
    );
  }

  if (type === 'cosmos') {
    return (
      <svg width="200" height="200" viewBox="0 0 200 200" style={{ transform: `scale(${scale})` }}>
        <defs>
          <linearGradient id="planetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <radialGradient id="cosmosGlow">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Atmosphere glow */}
        <motion.circle
          cx="100"
          cy="100"
          r="75"
          fill="url(#cosmosGlow)"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        
        {/* Planet body */}
        <motion.circle
          cx="100"
          cy="100"
          r="50"
          fill="url(#planetGrad)"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        
        {/* Rings */}
        <motion.ellipse
          cx="100"
          cy="100"
          rx="70"
          ry="15"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="4"
          opacity="0.6"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: '100px 100px' }}
        />
        
        <motion.ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="20"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          opacity="0.4"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: '100px 100px' }}
        />
        
        {/* Surface details */}
        <circle cx="85" cy="95" r="8" fill="#0284c7" opacity="0.5" />
        <circle cx="110" cy="105" r="6" fill="#0284c7" opacity="0.5" />
        <circle cx="95" cy="110" r="5" fill="#0ea5e9" opacity="0.5" />
        
        {/* Face */}
        <g>
          {mood === 'happy' ? (
            <>
              <circle cx="90" cy="95" r="6" fill="#1e3a8a" />
              <circle cx="110" cy="95" r="6" fill="#1e3a8a" />
              <circle cx="92" cy="93" r="2" fill="#dbeafe" />
              <circle cx="112" cy="93" r="2" fill="#dbeafe" />
              <path d="M88,105 Q100,112 112,105" stroke="#1e3a8a" strokeWidth="3" fill="none" />
            </>
          ) : (
            <>
              <circle cx="90" cy="95" r="5" fill="#1e3a8a" />
              <circle cx="110" cy="95" r="5" fill="#1e3a8a" />
            </>
          )}
        </g>
      </svg>
    );
  }

  // Nova
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" style={{ transform: `scale(${scale})` }}>
      <defs>
        <radialGradient id="novaCore">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="30%" stopColor="#fbbf24" />
          <stop offset="60%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#dc2626" />
        </radialGradient>
        <radialGradient id="novaGlow">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Explosion rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <motion.line
          key={i}
          x1="100"
          y1="100"
          x2={100 + Math.cos((angle * Math.PI) / 180) * 70}
          y2={100 + Math.sin((angle * Math.PI) / 180) * 70}
          stroke="#f97316"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{
            opacity: [0.3, 1, 0.3],
            strokeWidth: [2, 4, 2],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
      
      {/* Outer glow */}
      <motion.circle
        cx="100"
        cy="100"
        r="60"
        fill="url(#novaGlow)"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      {/* Core */}
      <motion.circle
        cx="100"
        cy="100"
        r="40"
        fill="url(#novaCore)"
        animate={{
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
      
      {/* Energy particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 360) / 12;
        const distance = 50;
        return (
          <motion.circle
            key={i}
            cx={100 + Math.cos((angle * Math.PI) / 180) * distance}
            cy={100 + Math.sin((angle * Math.PI) / 180) * distance}
            r="4"
            fill="#fbbf24"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        );
      })}
      
      {/* Face */}
      <g>
        {mood === 'playful' || mood === 'happy' ? (
          <>
            <circle cx="90" cy="95" r="6" fill="#7c2d12" />
            <circle cx="110" cy="95" r="6" fill="#7c2d12" />
            <circle cx="92" cy="93" r="2" fill="#fef3c7" />
            <circle cx="112" cy="93" r="2" fill="#fef3c7" />
            <path d="M88,105 Q100,115 112,105" stroke="#7c2d12" strokeWidth="3" fill="none" />
          </>
        ) : (
          <>
            <circle cx="90" cy="95" r="5" fill="#7c2d12" />
            <circle cx="110" cy="95" r="5" fill="#7c2d12" />
          </>
        )}
      </g>
    </svg>
  );
}
