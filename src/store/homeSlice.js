// we have differnt pages in our application so we can create different slice for different pages.
// if we don't need to create different slices then we can create global slice too.
import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    // url is used for images path , movie poster path
    url: {},
    // in movie categories is known as genres
    // when we call the api of genres all the data which came we are store in the genres state
    genres: {},
  },
  reducers: {
    // state : inital state
    // action : action is something which we pass while using it
    getApiCofiguration: (state, action) => {
      // by state.url we are accessing the initial state url
      // at the time all the data came while actionpayload we are going to store it in url
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { getApiCofiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
