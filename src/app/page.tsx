import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-center">
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
        alt="food"
        fill
        className="object-cover brightness-50"
        priority
      />

      <div className="z-10">
        <h1 className="text-6xl font-bold">Welcome to FoodieHub</h1>
        <p className="text-gray-300 mt-3">Luxury Taste Experience</p>
      </div>
    </main>
  );
}