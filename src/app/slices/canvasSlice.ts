import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CanvasSlice {
    activeElementId: object;
    canvasElements: any[];
}

const initialState: CanvasSlice = {
    activeElementId: {},
    canvasElements: [],
};

export const canvasSlice = createSlice({
    name: "canvasStore",
    initialState,
    reducers: {
        addElement: (state, action: PayloadAction<any>) => {
            state.canvasElements = [...state.canvasElements, action.payload];
        },
        setActiveElementId: (state, action) => {
            state.activeElementId = action.payload
        }
    },
});

export const { addElement, setActiveElementId } = canvasSlice.actions;
export default canvasSlice.reducer;