import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

const state = store.getState();

export type RootStateType = typeof state;

export default store;
