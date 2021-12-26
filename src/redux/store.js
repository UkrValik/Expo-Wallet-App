import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import walletReducer from './walletSlice';
import transactionReducer from './transactionSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        wallets: walletReducer,
        transactions: transactionReducer,
    },
});
