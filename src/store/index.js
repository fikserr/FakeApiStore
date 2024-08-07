import { configureStore } from "@reduxjs/toolkit";
import loginData from './login.js'
const store = configureStore({
    reducer:{
        login:loginData
    }
})

export default store