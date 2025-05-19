import { createSlice } from "@reduxjs/toolkit";
import { products as initialProducts } from "../data/dummyData";

const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
