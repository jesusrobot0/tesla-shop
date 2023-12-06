"use server";

import prisma from "@/lib/prisma";
import type { Gender } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender;
}

export async function getPaginatedProductsWithImages({
  page = 1,
  take = 12,
  gender,
}: PaginationOptions) {
  // 1. Validar que page sea un numero mayor a 1
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  // 2. Validar que take sea un numero mayor a 1
  if (isNaN(Number(take))) take = 1;
  if (take < 1) take = 1;

  try {
    // 3. Obtener los productos de la BD
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take, // 1 - 1 = 0, 0 * 12 = 0; 2 - 1 = 1, 1 * 12 = 12;
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        gender,
      },
    });

    // 4. Obtener el total de páginas
    const productsCount = await prisma.product.count({ where: { gender } });
    const totalPages = Math.ceil(productsCount / take);

    return {
      currentPage: page,
      totalPages,
      products: products.map((product) => {
        // 5. Limpieza de los datos que enviamos al frontend
        const { ProductImage, ...productCleaned } = product;
        return {
          ...productCleaned,
          images: product.ProductImage.map((image) => image.url),
        };
      }),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
}
