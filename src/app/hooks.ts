/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
