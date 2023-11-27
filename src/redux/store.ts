import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartReducer,
  },
});

const state = store.getState();

export type RootStateType = typeof state;

export default store;
