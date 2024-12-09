/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { getAnimalById } from "@/lib/data/animals";

type PageProps = {
  params: { 
    id: string 
  } & Promise<any>;
  searchParams?: { [key: string]: string | string[] | undefined } & Promise<any>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const animal = await getAnimalById(params.id);
  return {
    title: animal ? `${animal.name} - PawPals Adoption` : 'Animal Not Found',
    description: animal ? `Adopt ${animal.name}, a ${animal.breed} looking for a forever home` : 'Animal not found'
  };
}

export async function generateStaticParams() {
  return [];
}

export default async function AnimalProfilePage({ params }: PageProps): Promise<React.ReactElement> {
  const animal = await getAnimalById(params.id);

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
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image 
              src={animal.imageUrl} 
              alt={`${animal.name} profile`} 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
        </div>

        {/* Animal Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{animal.name}</h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p><strong>Breed:</strong> {animal.breed}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p><strong>Age:</strong> {animal.age}</p>
                <p><strong>Gender:</strong> {animal.gender}</p>
              </div>
            </div>

            <p className="mt-4">{animal.description}</p>
            
            {/* Adoption Button */}
            <Link 
              href={`/adopt/${animal.id}`} 
              className="btn-primary mt-6"
            >
              Adopt {animal.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
