// cart.jsx
import { create } from "zustand";

export const useStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  addToCart: (newItem) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      const newCart = existingItem
        ? state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...state.cart, { ...newItem, quantity: 1 }];

      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),

  removeFromCart: (itemId) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === itemId);

      if (existingItem && existingItem.quantity > 1) {
        const newCart = state.cart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item,
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { cart: newCart };
      } else {
        const newCart = state.cart.filter((item) => item.id !== itemId);
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { cart: newCart };
      }
    }),

  clearCart: () =>
    set(() => {
      localStorage.setItem("cart", JSON.stringify([]));
      return { cart: [] };
    }),
}));
