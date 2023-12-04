import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

interface AuthState {
  user: User | null;
}

interface SetUserPayload {
  user: User;
}

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null,
  } as AuthState,
  reducers: {
    setUser: (state, action: PayloadAction<SetUserPayload>) => {
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      state.user = action.payload.user;
    },
    removeUser: (state) => {
      localStorage.removeItem("user");

      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const { setUser, removeUser } = authSlice.actions;
