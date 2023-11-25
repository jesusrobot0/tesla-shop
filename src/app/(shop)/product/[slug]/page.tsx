import { QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}
export default function ProductPage({ params: { slug } }: Props) {
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) notFound();

  return (
    <div className="mt-5 mb-20 grid md: grid-cols-3 gap-3">
      {/* slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        <h1>Slideshow</h1>
      </div>

      {/* detalles */}
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl `}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        {/* todo: selector de tallas */}
        <SizeSelector
          selectedSize={product.sizes[1]}
          availableSizes={product.sizes}
        />
        {/* todo: selector de cantidad */}
        <QuantitySelector quantity={1} />
        <button className="btn-primary my-5">Agregar al carrito</button>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
