import Link from "next/link";

import { Title } from "@/components";
import ProductsInCart from "./ui/ProductsInCart";
import OrderSummary from "./ui/OrderSummary";

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* cart */}
          <div className="flex flex-col my-5">
            <div className="font-normal">
              Añade otros items para que el envió sea gratis
            </div>
            <Link href="/" className="underline font-light mb-10">
              Seguir comprando
            </Link>
            {/* items */}
            <ProductsInCart />
          </div>

          {/* order summary */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-xl mb-2">Resumen de la orden</h2>
            <OrderSummary />
            <div className="mt-5 mb-2 w-full">
              <Link
                href="/checkout/address"
                className="flex justify-center btn-primary"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
