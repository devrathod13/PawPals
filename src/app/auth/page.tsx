import Image from "next/image";
import Link from "next/link";

const animals = [
  {
    id: 1,
    name: "Luna",
    type: "Dog",
    breed: "Golden Retriever",
    age: "2 years",
    image: "/luna.jpg"
  },
  {
    id: 2,
    name: "Whiskers",
    type: "Cat",
    breed: "Siamese",
    age: "3 years",
    image: "/whiskers.jpg"
  },
  {
    id: 3,
    name: "Buddy",
    type: "Dog",
    breed: "Labrador",
    age: "1 year",
    image: "/buddy.jpg"
  }
];

export default function AnimalsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Find Your Perfect Companion</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {animals.map((animal) => (
          <div key={animal.id} className="card p-4 hover:scale-105 transition-transform">
            <Image 
              src={animal.image} 
              alt={animal.name} 
              width={400} 
              height={300} 
              className="rounded-xl mb-4 object-cover h-64 w-full"
            />
            <div className="text-center">
              <h2 className="text-2xl font-semibold">{animal.name}</h2>
              <p className="text-gray-600">{animal.breed} • {animal.age}</p>
              <Link 
                href={`/animals/${animal.id}`} 
                className="btn-primary mt-4 inline-block"
              >
                Meet {animal.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
