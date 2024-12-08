import Image from "next/image";
import { animals } from "@/lib/data/animals";
import Link from "next/link";

export default function AnimalProfilePage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const animal = animals.find(a => a.id === parseInt(params.id));

  if (!animal) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Animal Not Found</h1>
        <Link href="/animals" className="btn-primary">
          Back to Animals
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {animal.images.map((img, index) => (
              <Image 
                key={index}
                src={img} 
                alt={`${animal.name} - Image ${index + 1}`} 
                width={300} 
                height={300} 
                className="rounded-xl object-cover h-48 w-full"
              />
            ))}
          </div>
        </div>

        {/* Animal Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{animal.name}</h1>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-600">Breed</p>
                <p className="text-lg">{animal.breed}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Age</p>
                <p className="text-lg">{animal.age} years</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Gender</p>
                <p className="text-lg">{animal.gender}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Size</p>
                <p className="text-lg">{animal.size}</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-3">About {animal.name}</h2>
          <p className="text-gray-700 mb-6">{animal.description}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Personality</h3>
            <div className="flex flex-wrap gap-2">
              {animal.personality.map(trait => (
                <span 
                  key={trait} 
                  className="bg-primary-50 text-primary-800 px-3 py-1 rounded-full text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold mb-4">Adoption Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-600">Adoption Fee</p>
                <p className="text-lg font-bold text-primary">${animal.adoptionFee}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Medical History</p>
                <ul className="list-disc list-inside text-gray-700">
                  {animal.medicalHistory.map(history => (
                    <li key={history}>{history}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Good With</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="font-semibold">Dogs</p>
                <p>{animal.goodWith.dogs ? '✅ Yes' : '❌ No'}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Cats</p>
                <p>{animal.goodWith.cats ? '✅ Yes' : '❌ No'}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Children</p>
                <p>{animal.goodWith.children ? '✅ Yes' : '❌ No'}</p>
              </div>
            </div>
          </div>

          {animal.specialNeeds && (
            <div className="bg-yellow-50 p-4 rounded-xl mb-6">
              <h3 className="text-xl font-semibold mb-2">Special Needs</h3>
              <p className="text-gray-700">{animal.specialNeeds}</p>
            </div>
          )}

          <Link 
            href={`/adopt/${animal.id}`} 
            className="btn-primary w-full py-3 text-center text-lg"
          >
            Adopt {animal.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
