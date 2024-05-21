import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
  error: false,
  isLoading: false,
  token: null,
  isRefreshing: false,
  logoutStatus: "idle",
};

const slice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectUserName: (state) => state.user.name,
    selectToken: (state) => state.token,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsRefreshing: (state) => state.isRefreshing,
    selectLogoutStatus: (state) => state.logoutStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = null;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
        state.logoutStatus = "succeeded";
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.logoutStatus = "loading";
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.logoutStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export const authReducer = slice.reducer;
export const {
  selectIsLoggedIn,
  selectToken,
  selectUserName,
  selectIsRefreshing,
  selectLogoutStatus,
} = slice.selectors;
