import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Redux/auth/auth-slice'


export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})