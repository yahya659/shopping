"use client";
// import { useCart } from "@/context/CartContext";
// import { useCart } from "";
// import { useCart } from "";
import { useCart } from "../../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 السلة</h1>
      {cart.length === 0 ? (
        <p>السلة فارغة حالياً.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border p-3 rounded">
              <img src={item.image} alt={item.title} className="h-16" />
              <p className="flex-1 ml-4">{item.title}</p>
              <p>${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
