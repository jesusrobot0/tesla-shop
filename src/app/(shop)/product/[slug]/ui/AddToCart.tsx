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

  const addToCart = () => {
    if (!size) return;
    console.log({ size, qunatity });
  };
  return (
    <>
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
