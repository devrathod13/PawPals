import Image from "next/image";
import Link from "next/link";

export default function AnimalsPage() {
  const petCategories = [
    {
      title: "Dogs",
      description: "Loyal companions with wagging tails and endless love",
      details: [
        "Various breeds available",
        "Puppies and adult dogs",
        "Trained and socialized options"
      ],
      icon: "🐶",
      color: "bg-blue-100"
    },
    {
      title: "Cats",
      description: "Independent, cuddly, and full of personality",
      details: [
        "Kittens and mature cats",
        "Indoor and outdoor companions",
        "Low-maintenance pets"
      ],
      icon: "🐱",
      color: "bg-purple-100"
    },
    {
      title: "Other Pets",
      description: "Unique companions for special animal lovers",
      details: [
        "Rabbits, hamsters, and more",
        "Exotic and small animal options",
        "Perfect for different lifestyles"
      ],
      icon: "🐰",
      color: "bg-green-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Find Your Perfect Pet Companion
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover loving animals waiting to become a part of your family. 
            Each pet has a unique story and is looking for their forever home.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {petCategories.map((category, index) => (
            <div 
              key={index} 
              className={`${category.color} rounded-2xl shadow-lg overflow-hidden 
              transform transition-all hover:scale-105 hover:shadow-xl group`}
            >
              <div className="p-6 text-center">
                <div className="text-6xl mb-4 opacity-80">{category.icon}</div>
                <h2 className="text-3xl font-bold mb-3 text-gray-800">
                  {category.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <ul className="text-left text-gray-700 mb-6 space-y-2 pl-5">
                  {category.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg 
                        className="w-5 h-5 mr-2 text-primary-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="inline-block bg-primary-600 text-white 
                  px-6 py-3 rounded-full font-bold uppercase 
                  hover:bg-primary-700 transition-colors"
                >
                  Browse {category.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
