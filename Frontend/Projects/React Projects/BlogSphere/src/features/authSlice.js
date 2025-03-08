import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { //contains functions that will be used to update the state

        login: (state, action) => { 
            state.status = true
            state.userData = action.payload.userData
        },

        logout: (state) => {
            state.status = false
            state.userData = null
        }
    }
})

export const { login, logout } = authSlice.actions

export const authSliceReducer = authSlice.reducer