import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  // Borra registros previos
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products } = initialData;

  // Carga las categorias a la base de datos
  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  // Carga los productos a la base de datos
  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); // ej: <string=shirt, string=categoryID>

  products.forEach(async (product) => {
    const { images, type, ...restProperties } = product;

    const dbProduct = await prisma.product.create({
      data: { ...restProperties, categoryId: categoriesMap[type] },
    });

    // Carga las imagenes de cada uno de los productos a la base de datos
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log("Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
