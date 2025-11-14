// src/app/page.tsx
import getProducts from "../../lib/getProducts";
import ProductCard from "../../components/ProductCard";
import Abuot from "../../components/Abuot";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
    <Abuot/>
    
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">. You can choose the clothes you want to buy</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p:any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
    </>
  );
}
