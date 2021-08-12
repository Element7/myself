import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../app/store";

export interface Movie {
  title: string;
  author: boolean;
}
interface CounterState {
  movies: Movie[];
  favorites: Movie[];
}

// Define the initial state using that type
const initialState: CounterState = {
  movies: [],
  favorites: [],
};
export const moviesSlice = createSlice({
  name: "movies",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addMovieToFavorites: (state, action: PayloadAction<Movie>) => {
      state.favorites = [...state.favorites, action.payload];
    },
  },
});

export const { addMovieToFavorites } = moviesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// export const selectFavorites = (state: RootState) => state.movies.favorites;

export default moviesSlice.reducer;
