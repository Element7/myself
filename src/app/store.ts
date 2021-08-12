/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useDispatch } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import MoviesSlice from "../features/movies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: MoviesSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
