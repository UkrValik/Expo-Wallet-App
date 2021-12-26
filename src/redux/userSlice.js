import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../config.json';

const initialState = {
    token: null,
    email: '',
    loading: false,
    error: null,
    id: null,
};

export const register = createAsyncThunk('user/register', async (user) => {
    await fetch(config.baseUrl + 'auth/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    let response = await fetch(config.baseUrl + 'auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    response = await response.json();
    return response;
});

export const login = createAsyncThunk('user/login', async (user) => {
    let response = await fetch(config.baseUrl + 'auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    response = await response.json();
    return response;
});

export const getUser = createAsyncThunk('user/get', async (token) => {
    let response = await fetch(config.baseUrl + 'user', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    });
    response = await response.json();
    return response;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveEmail(state, action) {
            state.email = action.payload.email;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.loading = false;
            })
            .addCase(register.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
                state.token = null;
            })

            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.loading = false;
            })
            .addCase(login.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
                state.token = null;
            })

            .addCase(getUser.fulfilled, (state, action) => {
                state.id = action.payload.id;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }
});

export const {
    saveEmail,
} = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;
