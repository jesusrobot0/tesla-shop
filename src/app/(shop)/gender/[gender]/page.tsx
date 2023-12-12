export const revalidate = 1800; // 1/2 hora

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { redirect } from "next/navigation";

interface Props {
  params: {
    gender: Gender;
  };
  searchParams: {
    page?: string;
  };
}

export default async function CategoryPage({
  params: { gender },
  searchParams,
}: Props) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender,
  });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  // prettier-ignore
  const labels : Record<Gender, string> = {
    'men': "hombres",
    'women': "mujeres",
    'kid': "niños",
    'unisex': 'todos'
  };

  return (
    <>
      <Title title={labels[gender]} subtitle={`Ropa para ${labels[gender]}`} />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
