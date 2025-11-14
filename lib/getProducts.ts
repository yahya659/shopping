// export default async function getProducts() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   return res.json();
// }

export default function getProducts() {
  return [
    { id: 1, title: "منتج 1", price: 50, image: "/images/product1.jpg" },
    { id: 2, title: "منتج 2", price: 75, image: "/images/product2.jpg" },
    { id: 3, title: "منتج 3", price: 100, image: "/images/product3.jpg" },
  ];
}