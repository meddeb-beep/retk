import { configureStore } from "@reduxjs/toolkit";
import todosreducer from "../src/tslice"
const store=configureStore({
    reducer:{
        todos:todosreducer
    }
})
export default store