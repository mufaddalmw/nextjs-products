import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart_items',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer