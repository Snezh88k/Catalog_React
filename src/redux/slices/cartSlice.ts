import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: string;
  typeSize: string;
  brend: string;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
  allCount: number;
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
  allCount: 0,
};

const catrSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count += action.payload.count;
      } else {
        state.items.push({
          ...action.payload,
        });
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);

      state.allCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count -= 1;
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);

      state.allCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);

      state.allCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.allCount = 0;
    },
  },
});

console.log(initialState, "initialState");

export const { addItem, removeItem, clearItems, minusItem } = catrSlice.actions;

export default catrSlice.reducer;
