export const revalidate = 1800; // 1/2 hora

import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import { Gender } from "@prisma/client";
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { labels } from "@/utils";

interface Props {
  params: {
    gender: Gender;
  };
  searchParams: {
    page?: string;
  };
}

export async function generateMetadata(
  { params: { gender } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `Ropa para ${labels[gender]}`,
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

  return (
    <>
      <Title title={labels[gender]} subtitle={`Ropa para ${labels[gender]}`} />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
