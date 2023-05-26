import { createSlice } from "@reduxjs/toolkit";

export const elementContentSlice = createSlice({
    name: "elementContentSlice",
    initialState: {
        headingText: "Default Headline",
        paragraph: "Default Text"
    },
    reducers: {
        updateHeadingText: (state, action) => {
            state.headingText = action.payload
        }
    }
})

export const { updateHeadingText } = elementContentSlice.actions

export default elementContentSlice.reducer