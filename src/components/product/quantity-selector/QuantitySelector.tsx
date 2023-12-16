"use client";

import { Minus, Plus } from "lucide-react";

interface Props {
  quantity: number;
  onQuantityChanged?: (quantity: number) => void;
}
export function QuantitySelector({ quantity, onQuantityChanged }: Props) {
  const onValueChanged = (value: number) => {
    if (quantity + value < 1) return;
    onQuantityChanged?.(quantity + value);
  };
  return (
    <div className="flex">
      <button
        onClick={() => onValueChanged(-1)}
        className={"disabled:text-gray-400"}
        disabled={quantity === 1 ? true : false}
      >
        <Minus />
      </button>
      <span className="w-16 mx-3 py-1 bg-gray-200 text-center rounded">
        {quantity}
      </span>
      <button
        onClick={() => onValueChanged(1)}
        className={"disabled:text-gray-400"}
        disabled={quantity === 5 ? true : false}
      >
        <Plus />
      </button>
    </div>
  );
}
