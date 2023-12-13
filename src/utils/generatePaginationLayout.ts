export function generatePaginationLayout(
  currentPage: number,
  totalPages: number
) {
  /*
   * Sí el número total de paginas es 7 o menos, muestra todas las páginas
   */
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1); // [1 ,2 ,3 ,4 ,5 ,6 ,7]
  }

  /*
   * Sí la página actual esta entre las primeras 3 páginas, muestra las primeras 3,
   * luego puntos suspensivos y al final las ultimas dos
   */

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages]; // [1, 2, 3, '...', 10, 11]
  }

  /*
   * Si la página actual esta entre las últimas 3 páginas, muestra las primeras 2,
   * luego puntos suspensivos y al final las ultimas 3
   */
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  /*
   * Si la pagina actual esta en un lugar medio, es decir entre las primeras 3 páginas
   * y las últimas 3, muestra la primera página luego puntos suspensivos, la pagina actual y vecinos
   */
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}
