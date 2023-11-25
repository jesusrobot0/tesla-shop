import { ProductGrid, Title } from "@/components";
import { Categories } from "@/interfaces";
import { initialData } from "@/seed/seed";

import { notFound } from "next/navigation";
// ! Simulación de fetch a la base de datos (por mientras...)

const data = initialData.products;

interface Props {
  params: {
    id: Categories;
  };
}

export default function CategoryPage({ params: { id } }: Props) {
  const products = data.filter((product) => product.gender === id);

  // prettier-ignore
  const labels : Record<Categories, string>= {
    'men': "hombres",
    'women': "mujeres",
    'kid': "niños",
    'unisex': 'todos'
  };

  return (
    <>
      <Title title={labels[id]} subtitle={`Ropa para ${labels[id]}`} />
      <ProductGrid products={products} />
    </>
  );
}
