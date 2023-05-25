import { configureStore } from "@reduxjs/toolkit";
import canvasSlice from "./slices/canvasSlice";

export default configureStore({
    reducer: {
        canvasSlice: canvasSlice
    }
})