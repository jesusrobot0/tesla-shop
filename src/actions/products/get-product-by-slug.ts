"use server";

import prisma from "@/lib/prisma";

export async function getProductBySlug(slug: string) {
  try {
    // Obtener el producto por slug
    const product = await prisma.product.findFirst({
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

    // Limpieza de los datos que enviamos al frontend
    const { ProductImage, ...productCleaned } = product;
    return {
      ...productCleaned,
      images: ProductImage.map((image) => image.url),
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener producto por slug");
  }
}
