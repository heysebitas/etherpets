# EtherPets - Virtual Pet Game

**Global Hack Week Submission**  
**Participant:** [heysebitas](https://github.com/heysebitas)  
**Event:** [MLH Global Hack Week January 2026](https://ghw.mlh.io/)

## Challenge

**Object Oriented Pet**

Build a digital pet that has its own personality and needs.

- Create a Pet class
- Every pet should have a name, hunger level, and happiness level
- Add functions like `feed()`, `play()`, and `getStatus()`

## Overview

EtherPets is a virtual pet game inspired by classic Tamagotchi toys. Players adopt a digital companion and are responsible for keeping it happy, healthy, fed, and entertained by interacting with different items across multiple rooms.

## Features

✅ **Pet Selection** - Choose from 4 unique pet types with distinct personalities  
✅ **Stat Management** - Balance hunger, energy, happiness, hygiene, and health  
✅ **Multiple Rooms** - Explore 5 different environments (Living Room, Kitchen, Bathroom, Bedroom, Playground)  
✅ **Progression System** - Level up and unlock new items and rooms  
✅ **Coin Economy** - Earn coins through interactions to unlock premium content  
✅ **Persistent Data** - Your pet's progress saves automatically using localStorage  
✅ **Animated Interface** - Smooth animations and visual feedback  

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe code
- **Vite** - Fast build tool
- **Tailwind CSS** - Modern styling
- **Framer Motion** - Animations
- **Lucide Icons** - Icon library

## How It Works

1. **Adopt a Pet** - Select your companion from 4 unique pet types
2. **Explore Rooms** - Navigate through different environments
3. **Interact** - Feed, play, clean, and rest your pet using room items
4. **Manage Stats** - Keep all 5 stats balanced to maintain good health
5. **Level Up** - Gain experience and unlock new content

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit http://localhost:5173/etherpets/ in your browser.

## Game Mechanics

### Stats System

Each pet has 5 core stats that decay over time:

- **Hunger** - Feed your pet in the Kitchen or Living Room
- **Energy** - Let your pet sleep in the Bedroom
- **Happiness** - Play with toys in the Playground or Living Room
- **Hygiene** - Clean your pet in the Bathroom
- **Health** - Automatically calculated based on other stats

### Progression

- Earn experience points (XP) through interactions
- Level up to unlock premium foods, better toys, and new rooms
- Collect coins to purchase items

## Project Structure

```
etherpets/
├── src/
│   ├── components/
│   │   ├── PetSelection.tsx    # Pet type selection
│   │   ├── PetAvatar.tsx       # Animated pet display
│   │   ├── StatsDisplay.tsx    # Stats bars and indicators
│   │   ├── RoomView.tsx        # Room rendering and interactions
│   │   └── ActionMenu.tsx      # Action buttons
│   ├── models/
│   │   └── Pet.ts              # Pet class and game logic
│   ├── data/
│   │   └── petTypes.ts         # Pet type definitions
│   ├── App.tsx                 # Main application
│   └── index.css               # Tailwind styles
├── vite.config.ts              # Vite configuration
└── README.md                   # This file
```

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Links

- **Live Demo:** https://heysebitas.github.io/etherpets/
- **Repository:** https://github.com/heysebitas/etherpets
- **MLH Global Hack Week:** https://ghw.mlh.io/

---

Built with ❤️ for MLH Global Hack Week
