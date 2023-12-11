"use server";

import prisma from "@/lib/prisma";

export async function getProductBySlug(slug: string) {
  try {
    const product = prisma.product.findFirst({
      include: {
        ProductImage: {
          select: {
            url: true,
          },
        },
      },
      where: {
        slug,
      },
    });

    if (!product) return null;

    const { ProductImage, ...productCleaned } = product;

    return { product };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener producto por slug");
  }
}
