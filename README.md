# EtherPets

A virtual pet game built with React, TypeScript, and Framer Motion. Take care of your digital companion by feeding, playing, cleaning, and managing their needs across different rooms.

## Features

- Choose from 4 unique pet types with distinct visual designs
- Manage 5 core stats: hunger, energy, happiness, hygiene, and health
- Navigate through 5 different rooms: Living Room, Kitchen, Bathroom, Bedroom, and Playground
- Unlock new items and rooms as your pet levels up
- Earn coins through successful interactions
- Persistent data storage using localStorage
- Fully animated room backgrounds and pet avatars
- Responsive design with smooth animations

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Installation

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

## Game Mechanics

Each pet has 5 stats that decay over time:
- Hunger: Feed your pet in the Living Room or Kitchen
- Energy: Let your pet sleep in the Bedroom
- Happiness: Play with your pet using toys
- Hygiene: Clean your pet in the Bathroom
- Health: Maintain all other stats to keep health high

Level up by earning experience points through interactions. Higher levels unlock premium foods, better toys, and new rooms.

## Project Structure

```
src/
├── components/     # React components
├── models/        # Pet class and game logic
├── data/          # Pet types and configuration
└── App.tsx        # Main application
```

## License

MIT
