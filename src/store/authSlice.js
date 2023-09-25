import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: "false",
    rol: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
             
            const rol = action.payload.rol;
            const key = action.payload.sesion;

            const newAuth = {
                auth: key,
                rol: rol
            }

            return newAuth;
        },
        logout : (state) => {

            const newAuth = {
                auth: "false",
                rol: "false"
            }

            return newAuth;
        }
    }
})

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;