import Link from "next/link";
import Image from "next/image";

export default function HowToAdoptPage() {
  const adoptionSteps = [
    {
      title: "Browse Available Pets",
      description: "Explore our adorable animals and find your perfect match.",
      icon: "🔍"
    },
    {
      title: "Meet & Greet",
      description: "Schedule a visit to meet the pet and ensure a good connection.",
      icon: "🤝"
    },
    {
      title: "Application",
      description: "Fill out our comprehensive adoption application.",
      icon: "📝"
    },
    {
      title: "Home Check",
      description: "We&#39;ll verify your home is ready for your new family member.",
      icon: "🏡"
    },
    {
      title: "Adoption Finalization",
      description: "Complete paperwork and bring your new pet home!",
      icon: "🐾"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Adoption Process</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Bringing a new pet into your life is a beautiful journey. We&#39;re here to make it smooth and joyful.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Adopt?</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="mr-3 text-2xl">❤️</span> 
              <div>
                <strong>Save a Life</strong>
                <p className="text-sm text-gray-600">Every adoption directly saves an animal from potential euthanasia and gives them a second chance at happiness.</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">🐶</span> 
              <div>
                <strong>Reduce Shelter Overcrowding</strong>
                <p className="text-sm text-gray-600">By adopting, you help shelters manage limited resources and create space for more animals in need.</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">💖</span> 
              <div>
                <strong>Experience Unconditional Love</strong>
                <p className="text-sm text-gray-600">Adopted pets often show immense gratitude and form deep, lasting bonds with their new families.</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">💡</span> 
              <div>
                <strong>Cost-Effective</strong>
                <p className="text-sm text-gray-600">Adoption fees are significantly lower than purchasing from breeders, and often include initial veterinary care.</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">🌈</span> 
              <div>
                <strong>Diverse Selection</strong>
                <p className="text-sm text-gray-600">Find pets of all ages, sizes, and personalities - from playful puppies to calm senior companions.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="bg-blue-50 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <Image 
              src="/adopt.jpg" 
              alt="Happy adopted dog with family" 
              width={600}
              height={400}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex items-end p-6">
              <p className="text-white text-xl font-semibold">
                Every Adoption Tells a Story of Hope
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-xl">
        
        <div className="grid md:grid-cols-5 gap-6">
          {adoptionSteps.map((step, index) => (
            <div 
              key={step.title} 
              className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="font-semibold mb-2 text-gray-800">Step {index + 1}</h3>
              <h4 className="font-bold mb-3 text-primary">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <Link 
          href="/animals" 
          className="btn-primary px-8 py-4 text-lg rounded-full"
        >
          Start Your Adoption Journey
        </Link>
      </div>
    </div>
  );
}
