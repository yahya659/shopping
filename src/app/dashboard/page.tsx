


"use client";

export default function Dashboard() {
  const products = [
    {
      id: 1,
      title: "منتج 1",
      image: "/images/product1.jpg",
      price: 10,
    },
    {
      id: 2,
      title: "منتج 2",
      image: "/images/product2.jpg",
      price: 20,
    },
    {
      id: 3,
      title: "منتج 3",
      image: "/images/product3.jpg",
      price: 30,
    },
  ];


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">لوحة التحكم - مفتوحة للجميع</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition duration-200">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">{product.title}</h2>
              <p className="text-purple-600 font-bold">{product.price}</p>
              <button className="mt-2 w-full bg-purple-500 text-white py-1 rounded hover:bg-purple-600 transition">
                شراء
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
