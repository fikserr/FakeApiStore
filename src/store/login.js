import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getLogin = createAsyncThunk(
  'login/getLogin',
  async () => {
    const response = await fetch('https://fakestoreapi.com/users');
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json(); 
    return data;
  }
);

const initialState = {
  loginUser: null,
  status: 'idle', 
  error: null, 
  loginCheck: false,
};


const loginData = createSlice({
  name: "login",
  initialState,
  reducers: {
    checkLogin(state,action)  {
      state.loginCheck = state.loginUser.some(
        (item) => item.username === action.payload.name && item.password  == action.payload.pass
      );
  
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLogin.pending, (state) => {
        state.status = 'loading';  
      })
      .addCase(getLogin.fulfilled, (state, action) => {
        state.status = 'succeeded'; 
        state.loginUser = action.payload;
      })
      .addCase(getLogin.rejected, (state, action) => {
        state.status = 'failed'; 
        state.error = action.error.message; 
      });
  },
});

export const { checkLogin } = loginData.actions;


export default loginData.reducer;
