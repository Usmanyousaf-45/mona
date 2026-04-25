import Image from "next/image";

export default function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-10">
      <Image
        src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba"
        alt="about"
        fill
        className="object-cover brightness-50"
      />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl mb-4">About Our Restaurant</h1>
        <p className="text-gray-300">
          We are a premium dining brand offering world-class food experience with fresh ingredients, expert chefs, and modern ambiance.
        </p>
         <ul className="mt-5 list-disc ml-5 text-gray-200">
          <li>10+ Years Experience</li>
          <li>100+ Dishes</li>
          <li>Premium Quality Ingredients</li>
        </ul>
      </div>
    </div>
  );
}