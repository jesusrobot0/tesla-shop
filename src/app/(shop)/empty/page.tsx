import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <ShoppingCart size={60} className="mx-5" />
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">Tu carrito esta vacío</h1>
        <Link href="/" className="btn-primary">
          Continuar comprando
        </Link>
      </div>
    </div>
  );
}
