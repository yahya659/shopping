"use client";
import Abuot from "../../../components/Abuot";
import { useCart } from "../../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
    <main className="max-w-4xl mx-auto p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
        🛒 السلة
        <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
          {cart.length}
        </span>
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl shadow">
          <p className="text-gray-500 text-xl">السلة فارغة حالياً.</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-cover rounded-lg"
                />

                <div className="flex-1 ml-4">
                  <p className="text-gray-800 font-semibold">{item.title}</p>
                  <p className="text-purple-600 font-bold mt-1">${item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow"
                >
                  حذف
                </button>
              </div>
            ))}
          </div>

          {/* الإجمالي + الزر */}
          <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between text-xl font-bold text-gray-800 mb-6">
              <span>الإجمالي:</span>
              <span>${total}</span>
            </div>

            <button className="w-full py-3 bg-purple-600 text-white text-lg rounded-xl shadow hover:bg-purple-700 transition">
              إتمام الشراء
            </button>
          </div>
        </>
      )}
      <Abuot/>
    </main>
    
    </>
  );
}
