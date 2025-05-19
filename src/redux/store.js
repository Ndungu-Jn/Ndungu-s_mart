import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});
