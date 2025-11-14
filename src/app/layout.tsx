// src/app/layout.tsx

import "./globals.css";
import { CartProvider } from "../../context/CartContext";
import Navbar from "../../components/Navbar";
import { Toaster } from "react-hot-toast"; // ← استيراد Toast

export const metadata = {
  title: "shopping",
  description: "متجر إلكتروني حديث مبني بـ Next.js و React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-100 text-gray-800">
        <CartProvider>
          <Navbar />
          {children}
          {/* ← ضع Toaster هنا ليظهر في كل الصفحات */}
          <Toaster position="top-center" reverseOrder={false} />
        </CartProvider>
      </body>
    </html>
  );
}
