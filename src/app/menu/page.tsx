'use client';
import Image from "next/image";
import { useCart } from "../../lib/cart";

const items = [
  { name: "Pizza", price: 12, img: "https://images.unsplash.com/photo-1548365328-9f547c4c8b84" },
  { name: "Burger", price: 8, img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { name: "Pasta", price: 10, img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642" }
];

export default function Menu() {
  const { addToCart } = useCart();

  return (
    <div className="relative min-h-screen p-10">
      <Image
        src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
        alt="menu"
        fill
        className="object-cover brightness-50"
      />

        <div className="relative z-10">
        <h1 className="text-5xl mb-10">Our Menu</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.name} className="bg-white/10 p-5 rounded-xl backdrop-blur-md">
              <Image src={item.img} alt={item.name} width={300} height={200} className="rounded" />
              <h2 className="text-xl mt-3 text-yellow-400">{item.name}</h2>
              <p>${item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="mt-3 bg-yellow-400 text-black px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
       </div>
  );
}
