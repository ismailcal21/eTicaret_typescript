// redux/reducers/cartReducer.ts
import { createReducer } from "@reduxjs/toolkit";
import { addToCart, removeFromCart, clearCart } from "../actions/actions";
import { Product } from "../../types";

const STORAGE_KEY = "shopping_cart";

// Local storage'dan sepet verisini al
const getStoredCart = (): Product[] | null => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : null;
};

// Local storage'a sepet verisini kaydet
const updateStoredCart = (cartItems: Product[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
};

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: getStoredCart() || [], // Sayfa yenilendiğinde local storage'dan veriyi al
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      state.items.push(action.payload);
      updateStoredCart(state.items);
    })
    .addCase(removeFromCart, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      updateStoredCart(state.items);
    })
    .addCase(clearCart, (state) => {
      state.items = [];
      updateStoredCart(state.items);
    });
});
