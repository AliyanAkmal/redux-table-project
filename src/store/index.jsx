import { configureStore } from "@reduxjs/toolkit";
import artSlicer from "./tableSlice/tableSlice";

export default configureStore({
  reducer: {
    student: artSlicer,
  },
});
