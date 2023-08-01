const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const itemInCart = state.cart.find(
        (items) => items.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity(state, action) {
      const items = state.cart.find((items) => items.id === action.payload.id);
      if (items) {
        items.quantity++;
      }
    },

    decreaseQuantity(state, action) {
      const items = state.cart.find((items) => items.id === action.payload.id);
      if (items) {
        items.quantity--;
      }
    },

    removeFromCart(state, action) {
      const removeItem = state.cart.filter(
        (items) => items.id !== action.payload
      );

      state.cart = removeItem;
    },
  },
});

export const { add, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
