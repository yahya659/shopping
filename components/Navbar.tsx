// src/components/Navbar.tsx
"use client";
import Link from "next/link";
// import { useCart } from "@/context/CartContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between">
      <Link href="/" className="font-bold text-lg">NextShop</Link>
      <Link href="/cart" className="relative">
        🛒 السلة
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full px-2">
            {cart.length}
          </span>
        )}
      </Link>
    </nav>
  );
}
