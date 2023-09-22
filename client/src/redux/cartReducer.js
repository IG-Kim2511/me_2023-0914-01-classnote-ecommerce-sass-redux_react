import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;  /* qty +1 */
      } else {
        state.products.push(action.payload); /* cart에 추가*/
      }
    },
    removeItem: (state,action) => {

      /* 선택한 아이템만 filter해서 빼고, 나머지로 cart 다시 만듬 */
      state.products=state.products.filter(item=>item.id !== action.payload) 
    },
    resetCart: (state) => {
      state.products = [] /* 빈 카트 reset */
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;
