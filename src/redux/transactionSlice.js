import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '../../config.json';

const initialState = {
    userTransactions: [],
    error: null,
    loading: false,
};

export const getAllTransactions = createAsyncThunk('transaction/getAll', async (token) => {
    let response = await fetch(config.baseUrl + 'transaction/user', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    });
    response = await response.json();
    return response;
});

export const createTransaction = createAsyncThunk('transaction/create', async ({ transaction, token }) => {
    let response = await fetch(config.baseUrl + 'transaction', {
        method: 'POST',
        body: JSON.stringify(transaction),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });
    response = await response.json();
    return response;
});

export const deleteTransaction = createAsyncThunk('transaction/delete', async ({ id, token }) => {
    let response = await fetch(config.baseUrl + 'transaction', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });
    response = await response.json();
    return response;
});

export const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getAllTransactions.fulfilled, (state, action) => {
                state.userTransactions = action.payload.result;
                state.loading = false;
                state.error = null;
            })
            .addCase(getAllTransactions.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })

            .addCase(createTransaction.fulfilled, (state, action) => {
                console.log(action.payload);
            })
            .addCase(createTransaction.rejected, (state, action) => {
                console.log(action.error.message);
            })

            .addCase(deleteTransaction.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
});

export const {

} = transactionSlice.actions;

export const selectTransactions = state => state.transactions;
export const selectUserTransactions = state => state.transactions.userTransactions;

export default transactionSlice.reducer;
