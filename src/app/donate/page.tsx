import Image from "next/image";
import Link from "next/link";

export default function DonatePage() {
  const donationOptions = [
    {
      title: "One-Time Donation",
      description: "Make a single contribution to support our mission.",
      amount: "$25",
      icon: "💖"
    },
    {
      title: "Monthly Giving",
      description: "Provide consistent support for ongoing care.",
      amount: "$10/month",
      icon: "🤝"
    },
    {
      title: "Sponsor a Pet",
      description: "Directly support the care of a specific animal.",
      amount: "$50/month",
      icon: "🐾"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Help Us Make a Difference</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your support helps us rescue, care for, and find loving homes for animals in need.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <Image 
          src="/donate.jpeg" 
          alt="Donation Impact" 
          width={600} 
          height={400} 
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Where Your Donation Goes</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="mr-3 text-2xl">🩺</span> Medical Care and Veterinary Treatment
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">🍽️</span> Nutrition and Daily Care
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">🏠</span> Shelter Maintenance
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">❤️</span> Adoption Support Programs
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Donation Options</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {donationOptions.map((option) => (
            <div 
              key={option.title} 
              className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{option.icon}</div>
              <h3 className="font-bold mb-3 text-primary">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <div className="text-2xl font-semibold text-gray-800 mb-4">{option.amount}</div>
              <button className="btn-primary px-6 py-2 rounded-full">
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16 bg-green-50 p-8 rounded-xl">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">Every Donation Counts</h3>
        <p className="text-xl text-gray-600 mb-6">
          No matter the size, your contribution helps us continue our mission of saving and improving animal lives.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="#" 
            className="btn-primary px-8 py-3 rounded-full text-lg"
          >
            Donate
          </Link>
          <Link 
            href="/about" 
            className="btn-secondary px-8 py-3 rounded-full text-lg border-2 border-primary text-primary"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
