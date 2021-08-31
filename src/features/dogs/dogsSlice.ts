/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import API from "../../utils/api";
import { DogI } from "../types";

interface DogsState {
  dogs: DogI[];
  pickedDog: DogI;
  favorites: DogI[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: DogsState = {
  dogs: [],
  pickedDog: {} as DogI,
  favorites: [],
  loading: "idle",
};

export const fetchDogsList = createAsyncThunk("dogs/fetchList", async () => {
  const response = await API.getBreedsList(10, 1);
  const data: DogI[] = await response.data;
  return data;
});

export const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDogsList.fulfilled, (state, action) => {
      state.dogs.push(...action.payload);
    });
  },
});

export default dogsSlice.reducer;
