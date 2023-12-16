"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";

export default function OrderSummary() {
  const { subTotal, tax, total, itemsInCart } = useCartStore((state) =>
    state.getSummaryInformation()
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Espere...</p>;
  return (
    <div className="grid grid-cols-2 font-light">
      <span>No. de productos</span>
      <span className="text-right">{`${itemsInCart} ${
        itemsInCart > 1 ? "productos" : "producto"
      }`}</span>
      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)}</span>
      <span>Impuestos (15% )</span>
      <span className="text-right">{currencyFormat(tax)}</span>
      <span className="mt-5 text-xl font-normal">Total</span>
      <span className="mt-5 text-xl text-right font-normal">
        {currencyFormat(total)}
      </span>
    </div>
  );
}
