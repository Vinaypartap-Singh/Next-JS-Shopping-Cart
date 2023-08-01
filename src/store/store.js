const { configureStore } = require("@reduxjs/toolkit");
const { default: cartSlice } = require("./cartSlice");

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
