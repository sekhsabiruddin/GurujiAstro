import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "./reducer/reducer";

const store = configureStore({
  reducer: {
    data: trackerReducer,
  },
});

export default store;
