export const revalidate = 604800; // 7 Dias

import { notFound } from "next/navigation";
import { titleFont } from "@/config/fonts";
import {
  MobileSlideshow,
  QuantitySelector,
  SizeSelector,
  Slideshow,
  StockLabel,
} from "@/components";
import { getProductBySlug } from "@/actions";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 ">
      {/* slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* mobile */}
        <MobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
        {/* desktop */}
        <Slideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* detalles */}
      <div className="col-span-1 px-5 ">
        <StockLabel slug={slug} />
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
