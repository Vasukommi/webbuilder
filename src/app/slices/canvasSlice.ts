import { createSlice } from "@reduxjs/toolkit";

interface canvasSlice {
    activeElementId: string,
    canvasElements: any[];
}

const initialState: canvasSlice = {
    activeElementId: '',
    canvasElements: [],
};

export const canvasSlice = createSlice({
    name: 'canvasStor',
    initialState,
    reducers: {
        addElement: (state, action) => {
            state.canvasElements = [...state.canvasElements, action.payload]
        }
    }
})

export const { addElement } = canvasSlice.actions
export default canvasSlice.reducer