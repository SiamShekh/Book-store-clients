import { configureStore } from "@reduxjs/toolkit";
import NavbarToggle from "../slice/NavbarToggle";

const ReduxStore = configureStore({
    reducer: {
        NavbarToggle: NavbarToggle.reducer
    }
});
export default ReduxStore;
export type AppRoot = ReturnType<typeof ReduxStore.getState>;
export type DispatchType = typeof ReduxStore.dispatch;