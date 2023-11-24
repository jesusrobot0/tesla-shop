"use client";
import Link from "next/link";
import {
  Search,
  X,
  CircleUser,
  Ticket,
  LogIn,
  LogOut,
  Shirt,
  Users,
} from "lucide-react";

export function Sidebar() {
  return (
    <div className="">
      {/* background black */}
      <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      {/* bacground blur */}
      <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>

      {/* sidemenu */}
      <nav className="fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300">
        <X
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => console.log("click")}
        />

        <form className="relative mt-14">
          <Search size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </form>

        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <CircleUser />
          <span className="ml-3">Perfil</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <Ticket />
          <span className="ml-3">Ordenes</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <LogIn />
          <span className="ml-3">Ingresar</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <LogOut />
          <span className="ml-3">Salir</span>
        </Link>

        <div className="w-full h-px bg-gray-200 my-5"></div>

        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <Shirt />
          <span className="ml-3">Productos</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <Ticket />
          <span className="ml-3">Ordenes</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <Users />
          <span className="ml-3">Usuarios</span>
        </Link>
      </nav>
    </div>
  );
}
