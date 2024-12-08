import Image from "next/image";
import Link from "next/link";

export default function OtherPetsPage() {
  const otherPets = [
    {
      id: 1,
      name: "Hoppy",
      type: "Rabbit",
      breed: "Holland Lop",
      age: 2,
      gender: "Female",
      description: "Adorable bunny looking for a loving home with plenty of space to hop.",
      personality: ["Playful", "Curious", "Gentle"],
      image: "/rabbit.jpg",
      adoptionFee: 100
    },
    {
      id: 2,
      name: "Spike",
      type: "Hedgehog",
      breed: "African Pygmy",
      age: 1,
      gender: "Male",
      description: "Tiny and adorable hedgehog seeking a warm and cozy forever home.",
      personality: ["Shy", "Nocturnal", "Unique"],
      image: "/hedgedog.jpg",
      adoptionFee: 150
    },
    {
      id: 3,
      name: "Polly",
      type: "Parrot",
      breed: "Green-Cheeked Conure",
      age: 3,
      gender: "Female",
      description: "Intelligent and social parrot ready to become your feathered companion.",
      personality: ["Talkative", "Playful", "Affectionate"],
      image: "/parrot.jpg",
      adoptionFee: 250
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 
            bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
            Unique Pets Seeking Loving Homes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our extraordinary companions who are looking for special families. 
            From furry to feathered, these unique pets are ready to bring joy to your life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {otherPets.map((pet) => (
            <div 
              key={pet.id} 
              className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={pet.image} 
                  alt={pet.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{pet.name}</h2>
                <div className="text-sm text-gray-600 mb-4">
                  {pet.type} • {pet.breed} • {pet.age} years old • {pet.gender}
                </div>
                <p className="text-gray-700 mb-4">{pet.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Personality</h3>
                  <div className="flex flex-wrap gap-2">
                    {pet.personality.map((trait) => (
                      <span 
                        key={trait} 
                        className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">
                    Adoption Fee: ${pet.adoptionFee}
                  </span>
                  <Link 
                    href={`/other-pets/${pet.id}`} 
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-300"
                  >
                    Adopt {pet.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
