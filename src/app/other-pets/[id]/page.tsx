import Image from "next/image";
import Link from "next/link";

const otherPetsData = [
  {
    id: "1",
    name: "Hoppy",
    type: "Rabbit",
    breed: "Holland Lop",
    age: 2,
    gender: "Female",
    description: "Adorable bunny looking for a loving home with plenty of space to hop.",
    personality: ["Gentle", "Curious", "Playful"],
    image: "/rabbit2.jpg",
    adoptionFee: 100,
    medicalHistory: "Health check completed",
    specialNeeds: "Requires spacious hutch",
    careLevel: "Moderate",
    goodWith: ["Gentle Handlers", "Calm Households"]
  },
  {
    id: "2",
    name: "Spike",
    type: "Hedgehog",
    breed: "African Pygmy",
    age: 1,
    gender: "Male",
    description: "Tiny and adorable hedgehog seeking a warm and cozy forever home. Spike is a nocturnal little bundle of joy who loves to explore and curl up in soft blankets.",
    personality: ["Shy", "Curious", "Unique"],
    image: "/hedgedog2.jpg",
    adoptionFee: 150,
    medicalHistory: "Regular vet check-ups, no known health issues",
    specialNeeds: "Requires temperature-controlled environment",
    careLevel: "Intermediate",
    goodWith: ["Patient Owners", "Quiet Homes"],
    diet: "Specialized hedgehog food, insects, and occasional treats",
    habitat: "Spacious terrarium with hiding spots and exercise wheel"
  },
  {
    id: "3",
    name: "Polly",
    type: "Parrot",
    breed: "Green-Cheeked Conure",
    age: 3,
    gender: "Female",
    description: "Intelligent and social parrot ready to become your feathered companion. Polly loves interaction, learning tricks, and being the center of attention.",
    personality: ["Talkative", "Playful", "Affectionate"],
    image: "/parrot2.jpg",
    adoptionFee: 250,
    medicalHistory: "Annual health screenings, fully vaccinated",
    specialNeeds: "Requires daily mental stimulation and social interaction",
    careLevel: "Advanced",
    goodWith: ["Experienced Bird Owners", "Active Families"],
    diet: "Varied diet of pellets, fresh fruits, vegetables, and seeds",
    lifespan: "Expected 20-30 years with proper care"
  }
];

export default function OtherPetDetailPage({ params }: { params: { id: string } }) {
  const pet = otherPetsData.find(p => p.id === params.id);

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div className="min-h-screen bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src={pet.image} 
              alt={pet.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Pet Details Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-5xl font-extrabold text-gray-900">{pet.name}</h1>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                {pet.type}
              </span>
            </div>

            <div className="mb-6">
              <div className="text-lg text-gray-700 mb-4">
                <strong>{pet.breed}</strong> • {pet.age} years old • {pet.gender}
              </div>
              <p className="text-gray-600 text-xl leading-relaxed">{pet.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Personality</h3>
              <div className="flex flex-wrap gap-2">
                {pet.personality.map((trait) => (
                  <span 
                    key={trait} 
                    className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Adoption Fee</h4>
                <p className="text-green-600 text-xl font-bold">${pet.adoptionFee}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Care Level</h4>
                <p className="text-gray-700">{pet.careLevel}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Additional Details</h3>
              <div className="space-y-2">
                <p><strong>Medical History:</strong> {pet.medicalHistory}</p>
                <p><strong>Special Needs:</strong> {pet.specialNeeds}</p>
                {pet.diet && <p><strong>Diet:</strong> {pet.diet}</p>}
                {pet.lifespan && <p><strong>Lifespan:</strong> {pet.lifespan}</p>}
                {pet.habitat && <p><strong>Habitat:</strong> {pet.habitat}</p>}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Good With</h3>
              <div className="flex flex-wrap gap-2">
                {pet.goodWith.map((type) => (
                  <span 
                    key={type} 
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <Link 
                href="/adoption-application" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition duration-300 text-lg font-semibold"
              >
                Adopt {pet.name}
              </Link>
              <Link 
                href="/other-pets" 
                className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full transition duration-300 text-lg"
              >
                Back to Other Pets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
