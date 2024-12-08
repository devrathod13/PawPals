import Image from "next/image";
import Link from "next/link";

export default function DogsPage() {
  const dogs = [
    {
      id: 1,
      name: "Max",
      breed: "Golden Retriever",
      age: 3,
      gender: "Male",
      description: "Energetic and loving Golden Retriever who adores playing fetch and cuddling.",
      personality: ["Friendly", "Playful", "Good with kids"],
      image: "/max2.jpg",
      adoptionFee: 250
    },
    {
      id: 2,
      name: "Luna",
      breed: "German Shepherd",
      age: 5,
      gender: "Female", 
      description: "Intelligent and loyal companion with excellent training.",
      personality: ["Protective", "Smart", "Calm"],
      image: "/luna2.jpg",
      adoptionFee: 300
    },
    {
      id: 3,
      name: "Buddy",
      breed: "Labrador Mix",
      age: 2,
      gender: "Male",
      description: "Playful young pup looking for an active family.",
      personality: ["Energetic", "Loving", "Curious"],
      image: "/buddy2.jpg",
      adoptionFee: 200
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 
            bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Adorable Dogs Seeking Homes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our lovable canine companions waiting to become your new best friend. 
            Each dog has a unique personality and is ready to bring joy to your life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dogs.map((dog) => (
            <div 
              key={dog.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden 
              transform transition-all hover:scale-105 hover:shadow-xl group"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={dog.image} 
                  alt={dog.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl font-bold text-gray-800">{dog.name}</h2>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {dog.breed}
                  </span>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600">
                    {dog.age} years old • {dog.gender}
                  </p>
                  <p className="mt-2 text-gray-700">{dog.description}</p>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Personality</h3>
                  <div className="flex flex-wrap gap-2">
                    {dog.personality.map((trait) => (
                      <span 
                        key={trait} 
                        className="bg-blue-50 text-blue-600 px-2 py-1 
                        rounded-full text-xs"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-gray-800">
                    Adoption Fee: ${dog.adoptionFee}
                  </div>
                  <Link 
                    href={`/dogs/${dog.id}`} 
                    className="bg-blue-600 text-white px-4 py-2 
                    rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Adopt {dog.name}
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
