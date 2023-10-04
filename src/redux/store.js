// store.js
import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./feature/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store;

