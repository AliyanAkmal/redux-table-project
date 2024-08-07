import { createSlice } from "@reduxjs/toolkit";

const artSlicer = createSlice({
  name: "student",
  initialState: {
    students: [],
  },
  reducers: {
    setArts: (state, action) => {
      state.students = action.payload;
    },
  },
});

export const { setArts } = artSlicer.actions;
export default artSlicer.reducer;
