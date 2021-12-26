import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../config.json';

const walletColors = [
    '#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc',
];

const initialState = {
    userWallets: [],
    loading: false,
    error: null,
};

export const getUserWallets = createAsyncThunk('wallet/getAll', async (token) => {
    let response = await fetch(config.baseUrl + 'wallet/all', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    });
    response = await response.json();
    return response;
});

export const createUserWallet = createAsyncThunk('wallet/create', async ({ wallet, token }) => {
    let response = await fetch(config.baseUrl + 'wallet', {
        method: 'POST',
        body: JSON.stringify(wallet),
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    })
    response = await response.json();
    return response;
});

export const updateUserWallet = createAsyncThunk('wallet/update', async ({ wallet, token }) => {
    let response = await fetch(config.baseUrl + 'wallet', {
        method: 'PUT',
        body: JSON.stringify(wallet),
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
    });
    response = await response.json();
    return response;
});

export const walletSlice = createSlice({
    name: 'wallets',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getUserWallets.fulfilled, (state, action) => {
                action.payload.wallets.map(
                    (wallet, index) => {
                        wallet.color = walletColors[index];
                        wallet.legendFontColor = walletColors[index];
                        wallet.legendFontSize = 12;
                        return wallet;
                    }
                );
                state.userWallets = action.payload.wallets;
                state.error = null;
            })
            .addCase(getUserWallets.rejected, (state, action) => {
                state.error = action.error.message;
            })

            .addCase(createUserWallet.fulfilled, (state, action) => {
                console.log(action.payload);
            })
            .addCase(createUserWallet.rejected, (state, action) => {
                console.log(action.error.message);
            })

            .addCase(updateUserWallet.fulfilled, (state, action) => {
                console.log(action.payload);
            })
            .addCase(updateUserWallet.rejected, (state, action) => {
                console.log(action.error.message);
            })
    }
});

export const {

} = walletSlice.actions;

export const selectWallets = state => state.wallets;
export const selectUserWallets = state => state.wallets.userWallets;

export default walletSlice.reducer;
