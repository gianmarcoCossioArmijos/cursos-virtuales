import { configureStore } from "@reduxjs/toolkit"
import menuSlice from '../store/menuSlice'
import authSlice from '../store/authSlice'

export const store = configureStore({
    reducer: {
       menu: menuSlice,
       auth: authSlice
    }
})