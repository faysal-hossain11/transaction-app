import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTransaction, getTransaction } from "./TransactionApi";

const initialState = {
    isLoding: false,
    isError: false,
    transactions: [],
    error: ""
};

export const fetchTransaction = createAsyncThunk("transaction/fetchTransaction", async () => {
    const transaction = await getTransaction();
    return transaction;
});

export const createTransaction = createAsyncThunk("transaction/createTransacton", async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
});


const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchTransaction.pending, (state) => {
            state.isLoding = true;
            state.isError = false;
        })
        .addCase(fetchTransaction.fulfilled, (state, action) => {
            state.isLoding = false;
            state.isError = false;
            state.transactions = action.payload;
        })
        .addCase(fetchTransaction.rejected, (state, action) => {
            state.isLoding = false;
            state.isError = true;
            state.transactions = [];
            state.error = action.error?.message;
        })

        // create transaction reducer
        .addCase(createTransaction.pending, (state) => {
            state.isLoding = true;
            state.isError = false;
        })
        .addCase(createTransaction.fulfilled, (state, action) => {
            state.isLoding  = false;
            state.isError = false;
            state.transactions.push(action.payload);
        })
        .addCase(createTransaction.rejected, (state, action) => {
            state.isLoding = false;
            state.isError = true;
            state.transactions = [];
            state.error = action.error?.message;
        })
    }
    
});

export default transactionSlice.reducer;