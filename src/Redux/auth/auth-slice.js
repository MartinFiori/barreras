import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id_persona: "",
  userId: "",
  token: "",
  userFullName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    logOut() {
      return {
        ...initialState
      };
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
