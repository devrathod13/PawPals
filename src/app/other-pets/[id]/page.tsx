/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import React from 'react';
import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image";
import { getOtherPetById, OtherPet } from "@/lib/data/other-pets";
=======
import { Metadata } from 'next';

type OtherPetParams = {
  params: { 
    id: string 
  } & Promise<{
    then: () => void;
    catch: () => void;
    finally: () => void;
    [Symbol.toStringTag]: string;
  }>;
  searchParams?: { 
    [key: string]: string | string[] | undefined 
  } & Promise<{
    then: () => void;
    catch: () => void;
    finally: () => void;
    [Symbol.toStringTag]: string;
  }>;
}
>>>>>>> 9496ab921f672acaac5bca267849361ec90bd34d

type PageProps = {
  params: { 
    id: string 
  } & Promise<any>;
  searchParams?: { [key: string]: string | string[] | undefined } & Promise<any>;
}

<<<<<<< HEAD
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pet: OtherPet | null = await getOtherPetById(params.id);
  return {
    title: pet ? `${pet.name} - PawPals Adoption` : 'Pet Not Found',
    description: pet ? `Adopt ${pet.name}, a ${pet.species} looking for a forever home` : 'Pet not found'
  };
}

export default async function OtherPetDetailPage({ params }: PageProps): Promise<React.ReactNode> {
  const pet: OtherPet | null = await getOtherPetById(params.id);
=======
export async function generateMetadata({ params, searchParams }: OtherPetParams): Promise<Metadata> {
  const pet = otherPetsData.find(p => p.id === params.id);
  
  // Optional: log or use searchParams if needed
  if (searchParams && Object.keys(searchParams).length > 0) {
    console.log('Metadata search params:', searchParams);
  }

  return {
    title: pet ? `${pet.name} - PawPals Adoption` : 'Pet Not Found',
    description: pet ? `Adopt ${pet.name}, a ${pet.type} looking for a forever home` : 'Pet not found'
  } as Metadata;
}

export default function OtherPetDetailPage({ params, searchParams }: OtherPetParams) {
  const pet = otherPetsData.find(p => p.id === params.id);

  // Optional: log or use searchParams if needed
  if (searchParams && Object.keys(searchParams).length > 0) {
    console.log('Page search params:', searchParams);
  }
>>>>>>> 9496ab921f672acaac5bca267849361ec90bd34d

  if (!pet) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Pet Not Found</h1>
        <Link href="/other-pets" className="btn-primary">
          Back to Other Pets
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image 
              src={pet.imageUrl} 
              alt={`${pet.name} profile`} 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
        </div>

        {/* Pet Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{pet.name}</h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p><strong>Species:</strong> {pet.species}</p>
              <p><strong>Breed:</strong> {pet.breed}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p><strong>Age:</strong> {pet.age} years</p>
                <p><strong>Gender:</strong> {pet.gender}</p>
              </div>
              <div>
                <p><strong>Adoption Fee:</strong> ${pet.adoptionFee}</p>
              </div>
            </div>

            <p className="mt-4">{pet.description}</p>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Temperament</h3>
              <div className="flex flex-wrap gap-2">
                {pet.temperament.map((trait) => (
                  <span 
                    key={trait} 
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Care Requirements</h3>
              <ul className="list-disc list-inside">
                {pet.careRequirements.map((req) => (
                  <li key={req}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Additional Details</h3>
              <p><strong>Medical History:</strong> {pet.medicalHistory}</p>
              <p><strong>Special Needs:</strong> {pet.specialNeeds || 'None'}</p>
            </div>
            
            <Link 
              href={`/adoption-application?petId=${pet.id}&petName=${pet.name}`}
              className="btn-primary mt-6 w-full"
            >
              Adopt {pet.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
