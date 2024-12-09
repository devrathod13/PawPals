/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import React from 'react';

interface Cat {
  id: string;
  name: string;
  breed: string;
  age: number;
  gender: string;
  description: string;
  personality: string[];
  image: string;
  adoptionFee: number;
  medicalHistory: string;
  specialNeeds: string;
  energyLevel: string;
  goodWith: string[];
}

type PageProps = {
  params: { 
    id: string 
  } & Promise<any>;
  searchParams?: { [key: string]: string | string[] | undefined } & Promise<any>;
}

const catData: Cat[] = [
  {
    id: "1",
    name: "Whiskers",
    breed: "Siamese",
    age: 5,
    gender: "Female",
    description: "Elegant and sophisticated Siamese cat with a regal demeanor.",
    personality: ["Independent", "Vocal", "Intelligent"],
    image: "/whisker.jpg",
    adoptionFee: 200,
    medicalHistory: "Up to date on vaccinations, spayed",
    specialNeeds: "Prefers quiet environment",
    energyLevel: "Low",
    goodWith: ["Adults", "Seniors"]
  },
  {
    id: "2",
    name: "Oliver",
    breed: "Maine Coon",
    age: 3,
    gender: "Male",
    description: "Fluffy and gentle giant who loves cuddles and playtime.",
    personality: ["Affectionate", "Playful", "Social"],
    image: "/oliver.jpg",
    adoptionFee: 250,
    medicalHistory: "Up to date on vaccinations, neutered",
    specialNeeds: "None",
    energyLevel: "Medium",
    goodWith: ["Children", "Other Cats"]
  },
  {
    id: "3",
    name: "Luna",
    breed: "Tabby",
    age: 2,
    gender: "Female",
    description: "Curious and energetic young cat seeking an adventurous home.",
    personality: ["Playful", "Curious", "Mischievous"],
    image: "/luna4.jpg",
    adoptionFee: 150,
    medicalHistory: "Initial vaccinations complete",
    specialNeeds: "Needs interactive toys",
    energyLevel: "High",
    goodWith: ["Active Families", "Single Adults"]
  }
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cat = catData.find(c => c.id === params.id);
  return {
    title: cat ? `${cat.name} - PawPals Adoption` : 'Cat Not Found',
    description: cat ? `Adopt ${cat.name}, a ${cat.breed} looking for a forever home` : 'Cat not found'
  };
}

export default function CatDetailPage({ params }: PageProps): Promise<React.ReactElement> {
  const cat = catData.find(c => c.id === params.id);

  if (!cat) {
    return Promise.resolve(
      <div>Cat not found</div>
    );
  }

  return Promise.resolve(
    <div className="min-h-screen bg-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src={cat.image} 
              alt={cat.name}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Cat Details Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-5xl font-extrabold text-gray-900">{cat.name}</h1>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                {cat.breed}
              </span>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-gray-700 mb-4">{cat.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-gray-600">Basic Info</h3>
                  <p>Age: {cat.age} years</p>
                  <p>Gender: {cat.gender}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Adoption Fee</h3>
                  <p className="text-2xl font-bold text-primary-600">${cat.adoptionFee}</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-600 mb-2">Personality</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.personality.map((trait) => (
                    <span 
                      key={trait} 
                      className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm"
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
                  <p>{cat.medicalHistory}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Special Needs</h4>
                  <p>{cat.specialNeeds}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Energy Level</h4>
                  <p>{cat.energyLevel}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Good With</h4>
                  <ul className="list-disc list-inside">
                    {cat.goodWith.map((group) => (
                      <li key={group}>{group}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Link 
              href={`/adoption-application?petId=${cat.id}&petName=${cat.name}`}
              className="w-full bg-primary-600 text-white px-6 py-4 
              rounded-full text-xl font-bold hover:bg-primary-700 
              transition-colors text-center inline-block"
            >
              Adopt {cat.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
