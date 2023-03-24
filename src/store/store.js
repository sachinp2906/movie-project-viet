import { configureStore } from "@reduxjs/toolkit";

// importing different pages slices of our application
import homeSlice from "./homeSlice";

// this is how we can create store and now we have to use this store in react-app
export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
})

