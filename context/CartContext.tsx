// // src/context/CartContext.tsx
// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";

// type Product = { id: number; title: string; price: number; image: string };
// type CartContextType = {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: number) => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => setCart([...cart, product]);
//   const removeFromCart = (id: number) => setCart(cart.filter(p => p.id !== id));

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) throw new Error("useCart must be used inside CartProvider");
//   return context;
// }

"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import toast from "react-hot-toast";

// تعريف المنتج
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

// تعريف Context
type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};

// إنشاء Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  // دالة الإضافة مع Toast
  const addToCart = (product: Product) => {
    setCart((cart) => [...cart, product]);
    toast.success("✅ تمت إضافة المنتج إلى السلة");
  };

  // دالة الحذف مع Toast
  const removeFromCart = (id: number) => {
    setCart((cart) => cart.filter((item) => item.id !== id));
    toast.error("❌ تم حذف المنتج من السلة");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook لاستخدام السلة
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
