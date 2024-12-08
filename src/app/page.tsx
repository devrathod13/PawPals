import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Find Your Perfect Companion
          </h2>
          <p className="text-xl text-gray-600">
            Discover loving animals waiting for their forever home. Every adoption saves a life and brings joy to your family.
          </p>
          <div className="flex space-x-4">
            <Link href="/animals" className="btn-primary px-6 py-3 text-lg">
              Browse Animals
            </Link>
            <Link href="/how-to-adopt" className="btn-secondary px-6 py-3 text-lg text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition">
              How to Adopt
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image 
            src="/chewy.jpg" 
            alt="Happy Adopted Pets" 
            width={600} 
            height={500} 
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute bottom-[-20px] right-[-20px] bg-white p-4 rounded-xl shadow-lg">
            <p className="text-lg font-semibold text-gray-800">
              🐶 500+ Animals Adopted
            </p>
          </div>
        </div>
      </main>
  );
}
