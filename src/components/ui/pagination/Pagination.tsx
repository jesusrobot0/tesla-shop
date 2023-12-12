"use client";

import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { generatePaginationNumbers } from "@/utils";

interface Props {
  totalPages: number;
}

export function Pagination({ totalPages }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Obten la página actual
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const currentPage = isNaN(page) ? 1 : page;

  if (currentPage < 1 || isNaN(page)) redirect(pathname);

  // Genera el layout de la paginación
  const paginationLayout = generatePaginationNumbers(currentPage, totalPages);

  // Genera el path hacía a donde apunta el enlace de los botones de la navegación
  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (Number(pageNumber) <= 0) {
      return `${pathname}`;
    }

    if (Number(pageNumber) > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex text-center justify-center mt-10 mb-32">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item">
            <Link
              className={clsx(
                "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                {
                  "pointer-events-none text-gray-400": currentPage === 1,
                }
              )}
              href={createPageUrl(currentPage - 1)}
            >
              <ChevronLeft />
            </Link>
          </li>

          {paginationLayout.map((page, index) => (
            <li key={`paginationID-${page}-${index}`} className="page-item">
              <Link
                className={clsx(
                  "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                  {
                    "bg-blue-500 shadow-md text-white hover:bg-blue-400":
                      currentPage === page,
                  }
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}

          <li className="page-item">
            <Link
              href={createPageUrl(currentPage + 1)}
              className={clsx(
                "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                {
                  "pointer-events-none text-gray-400":
                    currentPage === totalPages,
                }
              )}
            >
              <ChevronRight />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
