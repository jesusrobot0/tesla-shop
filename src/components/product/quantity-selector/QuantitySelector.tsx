"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface Props {
  quantity: number;
}
export function QuantitySelector({ quantity }: Props) {
  const [count, setCount] = useState(quantity);

  const onQunatityChanged = (value: number) => {
    if (count + value < 1) return;

    setCount(count + value);
  };
  return (
    <div className="flex">
      <button onClick={() => onQunatityChanged(-1)}>
        <Minus />
      </button>
      <span className="w-16 mx-3 py-1 bg-gray-200 text-center rounded">
        {count}
      </span>
      <button onClick={() => onQunatityChanged(1)}>
        <Plus />
      </button>
    </div>
  );
}
