import { createSlice } from "@reduxjs/toolkit";
const loadInitialData = () => {
  const storedData = localStorage.getItem("data");
  return storedData ? JSON.parse(storedData) : [];
};

const initialState = {
  tracker: 1,
  data: loadInitialData(),
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    trackerNext(state, action) {
      state.tracker = action.payload;
    },
    trackerPrev(state, action) {
      state.tracker = state.tracker - action.payload;
    },
    addData(state, action) {
      const newData = action.payload;
      const existingData = JSON.parse(localStorage.getItem("data")) || [];
      const updatedData = { ...existingData, ...newData };
      localStorage.setItem("data", JSON.stringify(updatedData));
      state.data = updatedData;
    },
  },
});

export const { trackerNext, trackerPrev, addData } = trackerSlice.actions;

export default trackerSlice.reducer;
