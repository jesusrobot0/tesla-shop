import Link from "next/link";
import Image from "next/image";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* cart */}
          <div className="flex flex-col my-5">
            <div className="font-normal">
              Ajusta los items de tus carrito de compras
            </div>
            <Link href="/cart" className="underline font-light mb-10">
              Editar carrito
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
                <div>
                  <p className="font-semibold">{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p>
                    <span className="font-semibold">Subtotal</span>: $
                    {product.price * 3}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* order summary */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="font-semibold">Jesús Velasco</p>
              <p>Av. Siempre Viva</p>
              <p>col. Centro</p>
              <p>Alcaldía Cuauhtémoc</p>
              <p>Ciudad de México</p>
              <p>CP 123123</p>
              <p>Tel. 123.123.1234</p>
            </div>
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>
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
              <p className="mb-5">
                <span className="text-xs">
                  Al hacer click en &quot;Colocar orden&quot; aceptas nuestros
                  <Link href="#" className="underline">
                    Términos y condiciones
                  </Link>
                  y
                  <Link href="#" className="underline">
                    Política de privacidad
                  </Link>
                </span>
              </p>
              <Link
                href="/orders/123"
                className="flex justify-center btn-primary"
              >
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
