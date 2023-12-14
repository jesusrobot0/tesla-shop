"use client";

import { useState } from "react";
import { QuantitySelector, SizeSelector } from "@/components";
import { Product, Size } from "@/interfaces";

interface Props {
  product: Product;
}

export function AddToCart({ product }: Props) {
  const [size, setSize] = useState<Size | undefined>();
  const [qunatity, setQunatity] = useState<number>(1);
  const [error, setError] = useState(false);

  const addToCart = () => {
    if (!size) {
      setError(true);
      return null;
    }
    console.log({ size, qunatity });
    setError(false);
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
      <QuantitySelector quantity={qunatity} onQuantityChanged={setQunatity} />

      <button className="btn-primary my-5" onClick={addToCart}>
        Agregar al carrito
      </button>
    </>
  );
}
