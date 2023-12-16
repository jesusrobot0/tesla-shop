"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store";
import { QuantitySelector } from "@/components";

export default function ProductsInCart() {
  const productsInCart = useCartStore((state) => state.cart);
  const updateProductQuantity = useCartStore(
    (store) => store.updateProductQuantity
  );
  const removeProduct = useCartStore((store) => store.removeProduct);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Espere...</p>;
  return (
    <>
      {productsInCart.map((product) => (
        <div
          key={`cart-list-${product.slug}-${product.size}`}
          className="flex mb-5 fade-out"
        >
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={100}
            height={100}
            className="mr-5 rounded w-[100px] h-[100px]"
          />
          <div className="">
            <Link
              href={`/product/${product.slug}`}
              className="font-semibold cursor-pointer hover:underline"
            >
              {product.title} - Talla: {product.size}
            </Link>
            <p>${product.price}</p>
            <div className="flex items-center gap-5">
              <QuantitySelector
                quantity={product.quantity}
                onQuantityChanged={(quantity) =>
                  updateProductQuantity(product, quantity)
                }
              />
              <button
                className="underline text-gray-500"
                onClick={() => removeProduct(product)}
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
