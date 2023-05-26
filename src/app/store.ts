import { configureStore } from "@reduxjs/toolkit";
import canvasSlice from "./slices/canvasSlice";
import sidebar from "./slices/sidebar";
import elementContentSlice from "./slices/elementContent";

export default configureStore({
    reducer: {
        canvasSlice: canvasSlice,
        sidebar: sidebar,
        elementContentSlice: elementContentSlice
    }
})