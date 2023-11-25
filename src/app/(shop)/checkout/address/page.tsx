import { Title } from "@/components";
import Link from "next/link";

export default function AddressPage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72">
      <div className="w-full xl:w-[1000px] flex flex-col justify-center text-left">
        <Title title="Dirección" subtitle="Dirección de entrega" />
        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
          <div className="flex flex-col mb-5">
            <span>Nombres</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>
          <div className="flex flex-col mb-5">
            <span>Apellidos</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>
          <div className="flex flex-col mb-5">
            <span>Dirección</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>
          <div className="flex flex-col mb-5">
            <span>Dirección 2 (opcional)</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>
          <div className="flex flex-col mb-5">
            <span>Código Postal</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>
          <div className="flex flex-col mb-5">
            <span>Ciudad</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>
          <div className="flex flex-col mb-5">
            <span>País</span>
            <select className="p-2 border rounded-md bg-gray-200">
              <option value="">[Seleccione su país]</option>
              <option value="MX">México</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <span>Teléfono</span>
            <input
              type="number"
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>
          <div className="flex flex-col mb-5 sm:mt-10">
            <Link
              href="/checkout"
              className="btn-primary flex w-full sm:w-1/2 justify-center"
            >
              Siguiente
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
