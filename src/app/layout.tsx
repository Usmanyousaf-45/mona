import Link from "next/link";
import "./globals.css";
import { CartProvider } from "../lib/cart";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <CartProvider>
          <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md flex justify-between items-center px-10 py-4">
            <h1 className="text-2xl font-bold text-yellow-400">FoodieHub</h1>
            <div className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>

 <div className="pt-20">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
