import { createSlice } from '@reduxjs/toolkit'

const initialState = false;

export const toastSlice = createSlice({
  name: 'cart_items',
  initialState,
  reducers: {
    showToast: (state, action) => {
      console.log(state, action);
      return action.payload;
    },
    hideToast: (state, action) => {
      return state.filter(item => item.id !== action.payload.id)
    }
  },
})

// Action creators are generated for each case reducer function
export const { showToast, hideToast } = toastSlice.actions

export default toastSlice.reducer