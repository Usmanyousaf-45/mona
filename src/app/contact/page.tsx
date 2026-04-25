import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
        alt="contact"
        fill
        className="object-cover brightness-50"
      />

      <div className="relative z-10 bg-white/10 p-10 rounded-xl backdrop-blur-md w-100">
        <h1 className="text-3xl mb-4">Get in Touch</h1>
        <input className="w-full p-2 mb-3 rounded" placeholder="Name" />
        <input className="w-full p-2 mb-3 rounded" placeholder="Email" />
        <textarea className="w-full p-2 mb-3 rounded" placeholder="Message" />
        <button className="bg-yellow-400 text-black px-4 py-2 rounded w-full">
          Send
             Send
        </button>
      </div>
    </div>
  );
}