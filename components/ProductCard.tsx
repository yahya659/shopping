// src/components/ProductCard.tsx
"use client";
// import { useCart } from "@/context/CartContext";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-3 py-1 mt-2 rounded hover:bg-blue-600"
      >
        إضافة إلى السلة 🛒
      </button>
    </div>
  );
}
