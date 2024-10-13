import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Hero = {
  id: number;
  name: string;
  abilities: string[];
  origin: string;
};

type HeroState = {
  heroes: Hero[];
};

const initialState: HeroState = {
  heroes: [],
};

const heroSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<Hero[]>) => {
      state.heroes = action.payload;
    },
    addHero: (state, action: PayloadAction<Hero>) => {
      state.heroes.push(action.payload);
    },
    updateHero: (state, action: PayloadAction<{ id: number; hero: Hero }>) => {
      const { id, hero } = action.payload;
      const index = state.heroes.findIndex((h) => h.id === id);
      if (index >= 0) {
        state.heroes[index] = hero;
      }
    },
    deleteHero: (state, action: PayloadAction<number>) => {
      state.heroes = state.heroes.filter((hero) => hero.id !== action.payload);
    },
  },
});

export const { setHeroes, addHero, updateHero, deleteHero } = heroSlice.actions;
export default heroSlice.reducer;
