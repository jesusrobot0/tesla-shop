import Link from "next/link";
import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>
      <div className="flex flex-col">
        <label htmlFor="email">
          Correo Electrónico
          <input
            type="email"
            className="px-5 py-2 border bg-gray-300 rounded mb-5 w-full"
          />
        </label>

        <label htmlFor="password">
          Contraseña
          <input
            type="password"
            className="px-5 py-2 border bg-gray-300 rounded mb-5 w-full"
          />
        </label>

        <button className="btn-primary">Ingresar</button>

        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">Ó</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/new-account" className="btn-secondary text-center">
          Registrarse
        </Link>
      </div>
    </div>
  );
}
