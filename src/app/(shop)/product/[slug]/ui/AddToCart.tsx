"use client";

import { useState } from "react";
import { QuantitySelector, SizeSelector } from "@/components";
import type { CartProduct, Product, Size } from "@/interfaces";
import { useCartStore } from "@/store";

interface Props {
  product: Product;
}

export function AddToCart({ product }: Props) {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState(false);

  const addToCart = () => {
    if (!size) {
      setError(true);
      return;
    }
    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity,
      size,
      image: product.images[0],
    };

    addProductToCart(cartProduct);
    setError(false);
    setQuantity(1);
    setSize(undefined);
  };
  return (
    <>
      {error && (
        <span className="mt-2 text-red-600 fade-in">
          Debe de seleccionar una talla
        </span>
      )}
      {/* selector de tallas */}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}
      />
      {/* todo: selector de cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      <button className="btn-primary my-5" onClick={addToCart}>
        Agregar al carrito
      </button>
    </>
  );
}
