import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction, editTransaction, getTransaction } from "./TransactionApi";

const initialState = {
    isLoding: false,
    isError: false,
    transactions: [],
    error: "",
    editing: {},
};

export const fetchTransaction = createAsyncThunk("transaction/fetchTransaction", async () => {
    const transaction = await getTransaction();
    return transaction;
});

export const createTransaction = createAsyncThunk("transaction/createTransacton", async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
});

export const changeTransaction = createAsyncThunk("transaction/changeTransaction", async (id, data) => {
    const transaction = await editTransaction(id, data);
    return transaction;
});

export const removeTransaction = createAsyncThunk("transaction/removeTransaction", async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
})


const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
          editActive: (state, action) => {
            state.editing = action.payload;
          },
          editInActive: (state) => {
            state.editing = {};
          },
    },
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
        // change transaction reducer
        .addCase(changeTransaction.pending, (state) => {
            state.isLoding = true;
            state.isError = false;
        })
        .addCase(changeTransaction.fulfilled, (state, action) => {
            state.isLoding = false;
            state.isError = false;
            const indexToUpdate = state.transactions.findIndex((t) => t.id === action.payload.id);
            state.transactions[indexToUpdate] = action.payload;
        })
        .addCase(changeTransaction.rejected, (state, action) => {
            state.isLoding = false;
            state.isError = true;
            state.error = action.error?.message;
        })
        // delete transaction reducer
        .addCase(removeTransaction.pending, (state) => {
            state.isLoding = true;
            state.isError = false;
        })
        .addCase(removeTransaction.fulfilled, (state, action) => {
            console.log(action);
            state.isLoding = false;
            state.isError = false;
            state.transactions = state.transactions.filter((t) => t.id !== action.meta.arg);
        })
        .addCase(removeTransaction.rejected, (state, action) => {
            state.isLoding = false;
            state.isError = true;
            state.error = action.error?.message;
        })
    },
    
});

export default transactionSlice.reducer;
export const { editActive, editInActive } = transactionSlice.actions;