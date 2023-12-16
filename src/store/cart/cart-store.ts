import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartProduct } from "@/interfaces";

interface State {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  // updateProductQuantity: () => void;
  // removeProduct: () => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      addProductToCart(product: CartProduct) {
        const { cart } = get();

        // Insertar el producto si no existe en el carrito con la talla seleccionada
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        // Si el producto existe por talla... incrementar la cantidad
        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },
    }),
    {
      name: "shopping-cart",
    }
  )
);
