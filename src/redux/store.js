import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
//Use configureStore and pass it an object with a reducer, which should take users reducer
 const store = configureStore ({
  reducers:{
    users: useReducer,
  },
});

export default store;
