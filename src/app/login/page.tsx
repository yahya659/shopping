
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const demoEmail = "user@example.com";
    const demoPassword = "password123";

    if (email === demoEmail && password === demoPassword) {
      const fakeToken = "tok_" + Math.random().toString(36).slice(2);
      localStorage.setItem("fake_auth_token", fakeToken);
      localStorage.setItem(
        "fake_auth_user",
        JSON.stringify({ email, name: "Demo User", id: 1 })
      );
      router.push("/");
    } else {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          تسجيل الدخول
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <Link href="/">
            <button
             
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-200"
            >
              دخول
            </button>
          </Link>
        </form>
      </div>
      
    </div>
    {/* <DashboardPage/> */}
    </>
  );
}
