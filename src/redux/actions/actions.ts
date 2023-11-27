// redux/actions/cartActions.ts
import { createAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

export const addToCart = createAction<Product>("cart/addToCart");
export const removeFromCart = createAction<number>("REMOVE_FROM_CART");
export const clearCart = createAction("cart/clearCart");
