import { createAsyncThunk } from "@reduxjs/toolkit";
import goitApi, { clearAuthToken, setAuthToken } from "../../config/goitApi";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("/users/signup", credentials);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("/users/login", credentials);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await goitApi.post("/users/logout");
      clearAuthToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    if (!token) {
      return thunkApi.rejectWithValue("No token exist!");
    }
    setAuthToken(token);
    try {
      const { data } = await goitApi.get("/users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
