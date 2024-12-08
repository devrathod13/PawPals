import Image from "next/image";
import Link from "next/link";

export default function CatsPage() {
  const cats = [
    {
      id: 1,
      name: "Whiskers",
      breed: "Siamese",
      age: 5,
      gender: "Female",
      description: "Elegant and sophisticated Siamese cat with a regal demeanor.",
      personality: ["Independent", "Vocal", "Intelligent"],
      image: "/whisker2.jpg",
      adoptionFee: 200
    },
    {
      id: 2,
      name: "Oliver",
      breed: "Maine Coon",
      age: 3,
      gender: "Male",
      description: "Fluffy and gentle giant who loves cuddles and playtime.",
      personality: ["Affectionate", "Playful", "Social"],
      image: "/oliver2.jpg",
      adoptionFee: 250
    },
    {
      id: 3,
      name: "Luna",
      breed: "Tabby",
      age: 2,
      gender: "Female",
      description: "Curious and energetic young cat seeking an adventurous home.",
      personality: ["Playful", "Curious", "Mischievous"],
      image: "/luna3.jpg",
      adoptionFee: 150
    }
  ];

  return (
    <div className="min-h-screen bg-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 
            bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
            Charming Cats Waiting for Love
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our delightful feline friends ready to bring purrs and joy to your home. 
            Each cat has a unique personality waiting to steal your heart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cats.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden 
              transform transition-all hover:scale-105 hover:shadow-xl group"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={cat.image} 
                  alt={cat.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl font-bold text-gray-800">{cat.name}</h2>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {cat.breed}
                  </span>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600">
                    {cat.age} years old • {cat.gender}
                  </p>
                  <p className="mt-2 text-gray-700">{cat.description}</p>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Personality</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.personality.map((trait) => (
                      <span 
                        key={trait} 
                        className="bg-purple-50 text-purple-600 px-2 py-1 
                        rounded-full text-xs"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-gray-800">
                    Adoption Fee: ${cat.adoptionFee}
                  </div>
                  <Link 
                    href={`/cats/${cat.id}`} 
                    className="bg-purple-600 text-white px-4 py-2 
                    rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Adopt {cat.name}
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
