import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = ' https://randomuser.me/api/';
// First, create the thunk
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    if (!response.ok) {
      throw new Error(`no response! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results; 
   } catch (error) {
    // Pass the error to rejectWithValue
    return rejectWithValue(error.message);
  }
});

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
   extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        // In the pending state, set isLoading to true
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        // In the fulfilled state, set isLoading to false and assign the payload to the users state
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        // In the rejected state, set isLoading to false and assign an error message to the error state
        state.isLoading = false;
        state.error = action.payload;
      });
  },

  });
  //initialState, which includes users as an array, isLoading as a boolean and error as undefined
//extraReducers as an empty object

export const { } = usersSlice.actions;
export default usersSlice.reducer