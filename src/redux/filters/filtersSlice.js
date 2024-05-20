import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const filtersReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;

export const selectNameFilter = (state) => state.filters.name;
