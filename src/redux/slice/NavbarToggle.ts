import { createSlice } from "@reduxjs/toolkit";

const NavbarToggle = createSlice({
    name: 'NavbarToggle',
    initialState: {
        open: false
    },
    reducers: {
        Toggle: (state, actions) => {
            state.open = actions.payload
        }
    }
});

export default NavbarToggle;
export const { Toggle } = NavbarToggle.actions;