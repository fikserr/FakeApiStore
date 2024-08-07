import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define an async thunk for fetching login data
export const getLogin = createAsyncThunk(
  'login/getLogin', // Action type string
  async () => {
    const response = await fetch('https://fakestoreapi.com/users'); // Await the fetch call
    if (!response.ok) {
      throw new Error("Failed to fetch"); // Throw error if response is not ok
    }
    const data = await response.json(); // Await the response.json()
    return data;
  }
);

// Define the initial state for the slice
const initialState = {
  loginUser: null,
  status: 'idle', // Add status to track loading state
  error: null, // Add error to handle errors
};

// Create the slice
const loginData = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLogin.pending, (state) => {
        state.status = 'loading'; // Set status to loading when request is pending
      })
      .addCase(getLogin.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded when request is fulfilled
        state.loginUser = action.payload; // Update state with fetched data
      })
      .addCase(getLogin.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when request is rejected
        state.error = action.error.message; // Store the error message
      });
  },
});

export default loginData.reducer;
