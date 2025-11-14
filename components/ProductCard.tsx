// src/components/ProductCard.tsx
"use client";

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
        className="mt-2 w-full bg-purple-500 text-white py-1 rounded hover:bg-purple-600 transition"
      >
        إضافة إلى السلة 🛒
      </button>
    </div>
  );
}
