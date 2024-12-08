import Image from "next/image";
import Link from "next/link";

const dogData = [
  {
    id: "1",
    name: "Max",
    breed: "Golden Retriever",
    age: 3,
    gender: "Male",
    description: "Energetic and loving Golden Retriever who adores playing fetch and cuddling.",
    personality: ["Friendly", "Playful", "Good with kids"],
    image: "/max.jpg",
    adoptionFee: 250,
    medicalHistory: "Up to date on vaccinations, neutered",
    specialNeeds: "None",
    energyLevel: "High",
    goodWith: ["Children", "Other Dogs", "Families"]
  },
  {
    id: "2",
    name: "Luna",
    breed: "German Shepherd",
    age: 5,
    gender: "Female", 
    description: "Intelligent and loyal companion with excellent training.",
    personality: ["Protective", "Smart", "Calm"],
    image: "/luna.jpg",
    adoptionFee: 300,
    medicalHistory: "Up to date on vaccinations, spayed",
    specialNeeds: "Requires experienced owner",
    energyLevel: "Medium",
    goodWith: ["Adults", "Experienced Handlers"]
  },
  {
    id: "3",
    name: "Buddy",
    breed: "Labrador Mix",
    age: 2,
    gender: "Male",
    description: "Playful young pup looking for an active family.",
    personality: ["Energetic", "Loving", "Curious"],
    image: "/buddy.jpg",
    adoptionFee: 200,
    medicalHistory: "Up to date on initial vaccinations",
    specialNeeds: "Needs basic training",
    energyLevel: "Very High",
    goodWith: ["Active Families", "Children"]
  }
];

export default function DogDetailPage({ params }: { params: { id: string } }) {
  const dog = dogData.find(d => d.id === params.id);

  if (!dog) {
    return <div>Dog not found</div>;
  }

  return (
    <div className="min-h-screen bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src={dog.image} 
              alt={dog.name}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Dog Details Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-5xl font-extrabold text-gray-900">{dog.name}</h1>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                {dog.breed}
              </span>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-gray-700 mb-4">{dog.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-gray-600">Basic Info</h3>
                  <p>Age: {dog.age} years</p>
                  <p>Gender: {dog.gender}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Adoption Fee</h3>
                  <p className="text-2xl font-bold text-primary-600">${dog.adoptionFee}</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-600 mb-2">Personality</h3>
                <div className="flex flex-wrap gap-2">
                  {dog.personality.map((trait) => (
                    <span 
                      key={trait} 
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="font-semibold text-gray-600 mb-4">Additional Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700">Medical History</h4>
                  <p>{dog.medicalHistory}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Special Needs</h4>
                  <p>{dog.specialNeeds}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Energy Level</h4>
                  <p>{dog.energyLevel}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Good With</h4>
                  <ul className="list-disc list-inside">
                    {dog.goodWith.map((group) => (
                      <li key={group}>{group}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Link 
              href={`/adoption-application?petId=${dog.id}&petName=${dog.name}`}
              className="w-full bg-primary-600 text-white px-6 py-4 
              rounded-full text-xl font-bold hover:bg-primary-700 
              transition-colors text-center inline-block"
            >
              Adopt {dog.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}