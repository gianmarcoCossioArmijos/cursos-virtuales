import { createSlice } from "@reduxjs/toolkit";

const initialState = "close";

export const menuSlice = createSlice({
    name: "close",
    initialState,
    reducers: {
        hidde: (state) => {
             
            const menu = "close";
            return menu;
        },
        show : (state) => {

            const menu = "open";
            return menu;
        }
    }
})

export default menuSlice.reducer;
export const { hidde, show } = menuSlice.actions;