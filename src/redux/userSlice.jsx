import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    role: "",
    isAuthenticated: false,
  },
  reducers: {
    register: (state, action) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    login: (state, action) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = "";
      state.role = "";
      state.isAuthenticated = false;
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
