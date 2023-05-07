import { createSlice } from "@reduxjs/toolkit";
import { reducerAddCartActionType, reducerStateType } from "../../utils/commonTypes";

const initialState : reducerStateType = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: reducerAddCartActionType) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.id
      })

      if(index == -1)
        state.items = [...state.items, {...action.payload, quantity:1}]
      
      else {
        const items = state.items
        items[index].quantity++
        state.items = items

      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload
      })

      if(index !== -1){
        const items = state.items

        if (items[index].quantity > 1)
        {
          items[index].quantity--
          state.items = items
        }

        else{
          items.splice(index,1)
          state.items = items
        }
      }

      else{
      }
    },
  },
});

export const { addToCart, removeFromCart} = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectCartItems = (state) => state.cart.items;
export const itemCount = (state): number => state.cart.items.map(item => item.quantity).reduce((x,y) => x+y,0);

export default cartSlice.reducer;
