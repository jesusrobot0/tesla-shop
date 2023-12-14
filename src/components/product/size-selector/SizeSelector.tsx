import clsx from "clsx";
import type { Size } from "@/interfaces";

interface Props {
  selectedSize?: Size;
  availableSizes: Size[];
  onSizeChanged: (size: Size) => void;
}
export function SizeSelector({
  selectedSize,
  availableSizes,
  onSizeChanged,
}: Props) {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>
      <div className="flex">
        {availableSizes.map((size) => (
          <button
            onClick={() => onSizeChanged(size)}
            key={`size-list-${size}`}
            className={clsx("mx-2 hover:underline", {
              underline: size === selectedSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
