import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import authSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartReducer,
    auth: authSlice,
  },
});

const state = store.getState();

export type RootStateType = typeof state;

export default store;
