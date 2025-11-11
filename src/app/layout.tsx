// src/app/layout.tsx
import "./globals.css";
import { CartProvider } from "../../context/CartContext";
// import { CartProvider } from "@/context/CartContext";
import Navbar from "../../components/Navbar";
// import Navbar from "@/components/Navbar";

export const metadata = {
  title: "NextShop",
  description: "متجر إلكتروني حديث مبني بـ Next.js و React",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-100 text-gray-800">
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
