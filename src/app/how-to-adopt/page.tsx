import Image from "next/image";
import Link from "next/link";

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
      description: "We'll verify your home is ready for your new family member.",
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
          Bringing a new pet into your life is a beautiful journey. We're here to make it smooth and joyful.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Adopt?</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="mr-3 text-2xl">❤️</span> Save a life and give a loving home
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">🐶</span> Reduce shelter overcrowding
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">💖</span> Experience unconditional love
            </li>
          </ul>
        </div>
        <Image 
          src="/adopt.jpg" 
          alt="Adoption Process" 
          width={600} 
          height={400} 
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className="bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Adoption Steps</h2>
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
