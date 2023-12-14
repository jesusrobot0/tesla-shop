"use client";

import { useEffect, useState } from "react";
import { titleFont } from "@/config/fonts";
import { getStockBySlug } from "@/actions";

interface Props {
  slug: string;
}

export function StockLabel({ slug }: Props) {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getStock = async () => {
    const stock = await getStockBySlug(slug);
    setStock(stock);
    setIsLoading(false);
  };

  useEffect(() => {
    getStock();
  }, []);

  return (
    <>
      {isLoading ? (
        <p
          className={`${titleFont.className} antialiased font-bold animate-pulse bg-gray-200 w-[80px] rounded mb-1`}
        >
          &nbsp;
        </p>
      ) : (
        <p className={`${titleFont.className} antialiased font-bold mb-1`}>
          Stock: {stock}
        </p>
      )}
    </>
  );
}
