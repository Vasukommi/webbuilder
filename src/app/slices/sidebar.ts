import { createSlice } from "@reduxjs/toolkit";

export const sidebarElements = createSlice({
    name: 'sidebarElements',
    initialState: {
        activeElementEditor: "",
        sidebarElementsArray: []
    },
    reducers: {
        setActiveElement: (state, action) => {
            state.activeElementEditor = action.payload
        }
    }
})

export const { setActiveElement } = sidebarElements.actions
export default sidebarElements.reducer