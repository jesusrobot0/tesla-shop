import { Title } from "@/components";
import { CreditCard } from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  return (
    <>
      <Title title="Ordenes" />
      <div className="mb-10">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                #ID
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Nombre completo
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Estado
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">
                Jesus Velasco
              </td>
              <td className="flex items-center text-sm text-gray-900 font-light px-6 py-4">
                <CreditCard className="text-green-800" />
                <span className="mx-2 text-green-800">Pagada</span>
              </td>
              <td className="px-6 py-4  whitespace-nowrap text-sm font-light text-gray-900">
                <Link href="/orders/123" className="hover:underline">
                  Ver orden
                </Link>
              </td>
            </tr>

            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">
                Melón Brusk
              </td>
              <td className="flex items-center text-sm text-gray-900 font-light px-6 py-4">
                <CreditCard className="text-red-800" />
                <span className="mx-2 text-red-800">No pagada</span>
              </td>
              <td className="px-6 py-4  whitespace-nowrap text-sm font-light text-gray-900">
                <Link href="/orders/123" className="hover:underline">
                  Ver orden
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
