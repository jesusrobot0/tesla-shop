import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

// import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params: { id } }: Props) {
  // if (id === "kids") {
  //   notFound();
  // }

  // ! Simulación de fetch a la base de datos (por mientras...)
  const products = initialData.products.filter(
    (product) => product.gender === id
  );

  let category = "";
  if (id === "men") {
    category = "hombres";
  } else if (id === "women") {
    category = "mujeres";
  } else if ((id = "kids")) {
    category = "niños";
  }

  return (
    <div>
      <Title title={category} subtitle={`Ropa para ${category}`} />
      <ProductGrid products={products} />
    </div>
  );
}
