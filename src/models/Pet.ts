export type PetType = 'nebula' | 'stardust' | 'cosmos' | 'nova';

export type PetMood = 'happy' | 'neutral' | 'sad' | 'hungry' | 'playful' | 'sleepy' | 'dirty' | 'sick';

export type RoomType = 'living' | 'kitchen' | 'bathroom' | 'bedroom' | 'playground';

export interface PetStats {
  hunger: number;        // 0-100 (0 = starving, 100 = full)
  happiness: number;     // 0-100
  energy: number;        // 0-100
  hygiene: number;       // 0-100 (cleanliness)
  health: number;        // 0-100
  level: number;         // Pet evolution level
  experience: number;    // XP for leveling up
  coins: number;         // Currency for buying items
}

export interface Unlockables {
  rooms: RoomType[];
  foods: string[];
  toys: string[];
  decorations: string[];
}

export interface PetData {
  stats: PetStats;
  unlocked: Unlockables;
  currentRoom: RoomType;
  lastFed: number;
  lastPlayed: number;
  lastCleaned: number;
  lastSlept: number;
}

export class Pet {
  name: string;
  type: PetType;
  stats: PetStats;
  unlocked: Unlockables;
  currentRoom: RoomType;
  createdAt: number;
  lastInteraction: number;
  private lastFed: number;
  private lastPlayed: number;
  private lastCleaned: number;
  private lastSlept: number;

  constructor(name: string, type: PetType) {
    this.name = name;
    this.type = type;
    const now = Date.now();
    
    this.stats = {
      hunger: 80,
      happiness: 70,
      energy: 90,
      hygiene: 100,
      health: 100,
      level: 1,
      experience: 0,
      coins: 50,
    };
    
    this.unlocked = {
      rooms: ['living'],
      foods: ['basic'],
      toys: ['ball'],
      decorations: [],
    };
    
    this.currentRoom = 'living';
    this.createdAt = now;
    this.lastInteraction = now;
    this.lastFed = now;
    this.lastPlayed = now;
    this.lastCleaned = now;
    this.lastSlept = now;
  }

  // Feed the pet (manual mini-game)
  feed(foodType: string = 'basic'): { success: boolean; message: string; coins?: number } {
    if (this.stats.hunger >= 95) {
      return { success: false, message: "I'm too full! Let me digest first 🌟" };
    }

    const hungerGain = foodType === 'premium' ? 40 : 25;
    const coinsEarned = Math.floor(Math.random() * 5) + 3;
    
    this.stats.hunger = Math.min(100, this.stats.hunger + hungerGain);
    this.stats.happiness = Math.min(100, this.stats.happiness + 5);
    this.stats.coins += coinsEarned;
    this.gainExperience(15);
    this.lastFed = Date.now();
    this.lastInteraction = Date.now();

    return {
      success: true,
      message: this.stats.hunger >= 90 
        ? "Yummy! I'm completely satisfied! ✨" 
        : "Delicious! Thank you! 🌠",
      coins: coinsEarned
    };
  }

  // Play mini-game
  play(intensity: 'low' | 'medium' | 'high' = 'medium'): { success: boolean; message: string; coins?: number } {
    const energyRequired = { low: 10, medium: 20, high: 30 };
    
    if (this.stats.energy < energyRequired[intensity]) {
      return { success: false, message: "I'm too tired... Let me rest first! 😴" };
    }

    const happinessGain = { low: 15, medium: 25, high: 40 };
    const energyLoss = energyRequired[intensity];
    const hungerLoss = { low: 5, medium: 10, high: 15 };
    const coinsEarned = Math.floor(Math.random() * 10) + 5;

    this.stats.happiness = Math.min(100, this.stats.happiness + happinessGain[intensity]);
    this.stats.energy = Math.max(0, this.stats.energy - energyLoss);
    this.stats.hunger = Math.max(0, this.stats.hunger - hungerLoss[intensity]);
    this.stats.coins += coinsEarned;
    this.gainExperience(20);
    this.lastPlayed = Date.now();
    this.lastInteraction = Date.now();

    return {
      success: true,
      message: "That was so much fun! I'm glowing with joy! 💫",
      coins: coinsEarned
    };
  }

  // Clean/bathe the pet
  clean(): { success: boolean; message: string } {
    if (this.stats.hygiene >= 90) {
      return { success: false, message: "I'm already sparkling clean! ✨" };
    }

    this.stats.hygiene = 100;
    this.stats.happiness = Math.min(100, this.stats.happiness + 10);
    this.stats.health = Math.min(100, this.stats.health + 5);
    this.gainExperience(10);
    this.lastCleaned = Date.now();
    this.lastInteraction = Date.now();

    return {
      success: true,
      message: "Ahh~ That feels so refreshing! I'm squeaky clean! 🛁"
    };
  }

  // Sleep/rest
  sleep(duration: 'nap' | 'sleep' = 'nap'): { success: boolean; message: string } {
    if (this.stats.energy >= 90) {
      return { success: false, message: "I'm already energized! Let's do something fun! ⚡" };
    }

    const energyGain = duration === 'sleep' ? 50 : 30;
    this.stats.energy = Math.min(100, this.stats.energy + energyGain);
    this.stats.health = Math.min(100, this.stats.health + 5);
    this.gainExperience(8);
    this.lastSlept = Date.now();
    this.lastInteraction = Date.now();

    return {
      success: true,
      message: duration === 'sleep' 
        ? "That was a great sleep! I feel amazing! 💤"
        : "Quick nap recharged me! Let's go! ⚡"
    };
  }

  // Change room
  changeRoom(room: RoomType): { success: boolean; message: string } {
    if (!this.unlocked.rooms.includes(room)) {
      return { success: false, message: "This room is locked! Level up to unlock it! 🔒" };
    }

    this.currentRoom = room;
    this.lastInteraction = Date.now();
    
    const messages: Record<RoomType, string> = {
      living: "Welcome to the living room! Time to relax! 🛋️",
      kitchen: "Let's see what yummy treats we have! 🍔",
      bathroom: "Time to get clean and fresh! 🛁",
      bedroom: "Perfect place for a good rest! 🛏️",
      playground: "Let's play and have fun! 🎮"
    };

    return { success: true, message: messages[room] };
  }

  // Get overall status
  getStatus(): {
    message: string;
    mood: PetMood;
    needsAttention: string[];
  } {
    const mood = this.getMood();
    const needsAttention: string[] = [];

    if (this.stats.hunger < 30) needsAttention.push('hungry');
    if (this.stats.happiness < 30) needsAttention.push('unhappy');
    if (this.stats.energy < 30) needsAttention.push('tired');
    if (this.stats.hygiene < 30) needsAttention.push('dirty');
    if (this.stats.health < 50) needsAttention.push('sick');

    let message = '';
    if (needsAttention.length === 0) {
      message = "I'm feeling amazing! Everything is perfect! ✨";
    } else if (needsAttention.length === 1) {
      message = `I'm ${needsAttention[0]}... Can you help me? 🥺`;
    } else {
      message = `I need some care... I'm ${needsAttention.slice(0, 2).join(' and ')} 😢`;
    }

    return { message, mood, needsAttention };
  }

  // Determine current mood
  getMood(): PetMood {
    const { hunger, happiness, energy, hygiene, health } = this.stats;

    if (health < 50) return 'sick';
    if (hygiene < 30) return 'dirty';
    if (hunger < 30) return 'hungry';
    if (energy < 30) return 'sleepy';
    if (happiness >= 80 && hunger >= 60) return 'playful';
    if (happiness >= 70) return 'happy';
    if (happiness < 40) return 'sad';
    return 'neutral';
  }

  // Gain experience and level up with rewards
  private gainExperience(amount: number): void {
    this.stats.experience += amount;
    const xpNeeded = this.stats.level * 100;

    if (this.stats.experience >= xpNeeded && this.stats.level < 10) {
      this.levelUp();
    }
  }

  private levelUp(): void {
    this.stats.level++;
    this.stats.experience = 0;
    this.stats.coins += this.stats.level * 20; // Bonus coins

    // Unlock rewards based on level
    if (this.stats.level === 2 && !this.unlocked.rooms.includes('kitchen')) {
      this.unlocked.rooms.push('kitchen');
      this.unlocked.foods.push('premium');
    }
    if (this.stats.level === 3 && !this.unlocked.rooms.includes('bathroom')) {
      this.unlocked.rooms.push('bathroom');
    }
    if (this.stats.level === 4 && !this.unlocked.rooms.includes('playground')) {
      this.unlocked.rooms.push('playground');
      this.unlocked.toys.push('frisbee', 'robot');
    }
    if (this.stats.level === 5 && !this.unlocked.rooms.includes('bedroom')) {
      this.unlocked.rooms.push('bedroom');
    }
    if (this.stats.level >= 6) {
      this.unlocked.decorations.push(`deco_${this.stats.level}`);
    }
  }

  // Update stats based on time passed (passive decay)
  update(): void {
    const now = Date.now();
    const timePassed = (now - this.lastInteraction) / 1000; // seconds
    
    if (timePassed < 60) return; // Only update after 1 minute

    const minutesPassed = Math.floor(timePassed / 60);
    
    // Decay rates per minute
    this.stats.hunger = Math.max(0, this.stats.hunger - minutesPassed * 0.5);
    this.stats.happiness = Math.max(0, this.stats.happiness - minutesPassed * 0.3);
    this.stats.energy = Math.max(0, this.stats.energy - minutesPassed * 0.2);
    this.stats.hygiene = Math.max(0, this.stats.hygiene - minutesPassed * 0.15);
    
    // Health decreases if basic needs aren't met
    if (this.stats.hunger < 20 || this.stats.hygiene < 20) {
      this.stats.health = Math.max(0, this.stats.health - minutesPassed * 0.5);
    }

    this.lastInteraction = now;
  }

  // Serialize to JSON for localStorage
  toJSON(): PetData {
    return {
      stats: this.stats,
      unlocked: this.unlocked,
      currentRoom: this.currentRoom,
      lastFed: this.lastFed,
      lastPlayed: this.lastPlayed,
      lastCleaned: this.lastCleaned,
      lastSlept: this.lastSlept,
    };
  }

  // Deserialize from JSON
  static fromJSON(name: string, type: PetType, data: PetData): Pet {
    const pet = new Pet(name, type);
    pet.stats = data.stats;
    pet.unlocked = data.unlocked;
    pet.currentRoom = data.currentRoom;
    pet.lastFed = data.lastFed;
    pet.lastPlayed = data.lastPlayed;
    pet.lastCleaned = data.lastCleaned;
    pet.lastSlept = data.lastSlept;
    pet.update(); // Apply any time-based decay
    return pet;
  }
}
