import { configureStore } from "@reduxjs/toolkit";
import TransactionReduer from "../feature/Transactions/TransactionSlice";

export const store = configureStore({
    reducer: {
        transaction: TransactionReduer,
    }
})