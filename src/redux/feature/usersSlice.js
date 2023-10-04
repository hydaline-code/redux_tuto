import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
 }

 const usersSlice = createSlice ({
  name:'users',
  initialState,
  reducers: {
  
   },
   extrareducer: {

   }

  });
  //initialState, which includes users as an array, isLoading as a boolean and error as undefined
//extraReducers as an empty object

export const { } = usersSlice.actions;
export default usersSlice.reducer