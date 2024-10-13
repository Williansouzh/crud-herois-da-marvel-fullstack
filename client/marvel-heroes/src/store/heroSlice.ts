import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Hero {
  id: string;
  name: string;
  abilities: string[];
  origin: string;
}

interface HeroState {
  heroes: Hero[];
}

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

    updateHero: (
      state,
      action: PayloadAction<{ id: string; hero: Partial<Hero> }>
    ) => {
      const { id, hero } = action.payload;
      const index = state.heroes.findIndex((h) => h.id === id);

      if (index !== -1) {
        state.heroes[index] = { ...state.heroes[index], ...hero };
      }
    },
    deleteHero: (state, action: PayloadAction<string>) => {
      state.heroes = state.heroes.filter((hero) => hero.id !== action.payload);
    },
  },
});

export const { setHeroes, addHero, updateHero, deleteHero } = heroSlice.actions;
export default heroSlice.reducer;
