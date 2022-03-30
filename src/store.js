import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./features/Cart/cartSlice"
import toastSlice from "./features/Cart/toastSlice"

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    toast: toastSlice
  },
})