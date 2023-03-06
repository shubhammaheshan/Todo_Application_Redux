import {configureStore} from "@reduxjs/toolkit";
import noteSlice from "./reducers/noteSlice";

const store = configureStore({
    reducer : {
        note : noteSlice
    }
})
export default store;