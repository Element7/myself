/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useDispatch } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import DogsSlice from "../features/dogs/dogsSlice";

export const store = configureStore({
  reducer: {
    dogs: DogsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
