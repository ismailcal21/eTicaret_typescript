import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types";

const initialState: ProductType = {
  products: [],
  total: 0,
  skip: 0,
  limit: 10,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state: ProductType, action: PayloadAction<ProductType>) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
