import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  // redirect("/empty");
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
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="mr-5 rounded w-[100px] h-[100px]"
                />
                <div className="">
                  <p className="font-semibold">{product.title}</p>
                  <p>${product.price}</p>
                  <div className="flex items-center gap-5">
                    <QuantitySelector quantity={2} />
                    <button className="underline text-gray-500">Remover</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* order summary */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-xl mb-2">Resumen de la orden</h2>
            <div className="grid grid-cols-2 font-light">
              <span>No. de productos</span>
              <span className="text-right">3 artículos</span>
              <span>Subtotal</span>
              <span className="text-right">$100</span>
              <span>Impuestos (15% )</span>
              <span className="text-right">$15</span>
              <span className="mt-5 text-xl font-normal">Total</span>
              <span className="mt-5 text-xl text-right font-normal">$115</span>
            </div>
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
