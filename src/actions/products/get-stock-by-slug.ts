"use server";

import prisma from "@/lib/prisma";

export async function getStockBySlug(slug: string) {
  try {
    const stock = await prisma.product.findFirst({
      where: {
        slug,
      },
      select: {
        inStock: true,
      },
    });

    return stock?.inStock ?? 0;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener el stock por slug");
  }
}
