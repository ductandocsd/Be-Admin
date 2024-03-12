import { createSlice } from '@reduxjs/toolkit';

let token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
const initialState = {
    accessToken: '',
    user: {},
    token: token,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getTokenLogin: (state) => {
            let infoToken = localStorage.getItem('user');
            this.accessToken = infoToken.accessToken;
        },
        setTokenLogin: (state, action) => {
            console.log('------------payload: ', action);
            state.token = action.payload;
            localStorage.setItem('user', JSON.stringify(state.token));
        },
        getProfile: (state) => {
            return state.access_token;
        },
        logoutRedux: (state) => {
            localStorage.setItem('user', JSON.stringify([]));
            state.dataToken = {};
        }
    },
})

export const { getTokenLogin, getProfile, setTokenLogin, logoutRedux } = AuthSlice.actions

export default AuthSlice.reducer

