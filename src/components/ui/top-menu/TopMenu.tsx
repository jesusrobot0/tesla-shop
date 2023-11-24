import Link from "next/link";
import { titleFont } from "@/config/fonts";
import { Search, ShoppingCart } from "lucide-react";

export function TopMenu() {
  return (
    <nav className="w-full px-5 flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Tesla
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      {/* Center Menu */}
      <div className="hidden md:block">
        <Link
          href="/category/men"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Hombres
        </Link>
        <Link
          href="/category/women"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Mujeres
        </Link>
        <Link
          href="/category/kids"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Niños
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center gap-3">
        <Link href="/search">
          <Search className="w-5 h-5" />
        </Link>
        <Link href="/cart">
          <div className="relative">
            <span className="absolute -top-2 -right-2 px-1 text-xs font-bold text-white rounded-full bg-blue-700">
              3
            </span>
            <ShoppingCart className="w-5 h-5" />
          </div>
        </Link>
        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Menu
        </button>
      </div>
    </nav>
  );
}
