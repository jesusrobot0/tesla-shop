export const revalidate = 1800; // 1/2 hora

import { redirect } from "next/navigation";
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
  });

  if (products.length === 0) {
    redirect("/");
  }
  return (
    <div>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
