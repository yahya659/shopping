
"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center font-bold text-3xl shadow-lg">
        مرحباً بك في موقعنا
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            اكتشف منتجاتنا الرائعة
          </h1>
          <p className="text-gray-700 text-lg">
            هذا الموقع يعرض أفضل المنتجات بطريقة جذابة وسهلة التصفح. كل شيء مدمج بشكل أنيق.
          </p>
        </motion.div>
      </main>

      {/* قسم بيانات صانع الموقع */}
      <motion.section
        className="bg-white rounded-3xl shadow-xl p-10 max-w-lg mx-auto mb-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* تأثير خلفية دوائر */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-purple-200 rounded-full opacity-50 blur-3xl"></div>

        {/* محتوى الصانع */}
        <div className="relative flex flex-col items-center">
          {/* صورة الصانع مع Hover تأثير */}
          <motion.img
            src="/images/profile.jpg"
            alt="صانع الموقع"
            className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg mb-4 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />

          <h2 className="text-2xl font-bold mb-1 text-gray-800">Yahya Alhaifi</h2>
          <p className="text-gray-600 mb-1">yahayaalhaifi@gmail.com</p>
          <p className="text-gray-600 mb-4">771940086 967+</p>

          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com/yahya659"
              target="_blank"
              className="text-gray-700 hover:text-gray-900 font-semibold transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yahya-alhaifi-81b886374/"
              target="_blank"
              className="text-gray-700 hover:text-gray-900 font-semibold transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-6">
        © 2025 جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
