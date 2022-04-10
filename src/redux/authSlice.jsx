import { createSlice } from "@reduxjs/toolkit";

//first start with an empty object
const initialState = {
  name: "",
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //reducer for signUp
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { changeName, changeEmail, changePassword } = authSlice.actions;

export default authSlice.reducer;
