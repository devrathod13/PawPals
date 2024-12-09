export interface OtherPet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
  description: string;
  imageUrl: string;
  adoptionFee: number;
  medicalHistory: string;
  specialNeeds: string;
  temperament: string[];
  careRequirements: string[];
}

const otherPetsData: OtherPet[] = [
  {
    id: "1",
    name: "Hoppy",
    species: "Rabbit",
    breed: "Holland Lop",
    age: 2,
    gender: "Female",
    description: "Adorable bunny looking for a loving home with plenty of space to hop.",
    temperament: ["Gentle", "Curious", "Playful"],
    imageUrl: "/rabbit2.jpg",
    adoptionFee: 100,
    medicalHistory: "Health check completed",
    specialNeeds: "Requires spacious hutch",
    careRequirements: [
      "Spacious indoor or outdoor hutch",
      "Daily exercise and playtime",
      "Fresh hay and vegetables",
      "Regular grooming"
    ]
  },
  {
    id: "2",
    name: "Spike",
    species: "Hedgehog",
    breed: "African Pygmy",
    age: 1,
    gender: "Male",
    description: "Tiny and adorable hedgehog seeking a warm and cozy forever home. Spike is a nocturnal little bundle of joy who loves to explore and curl up in soft blankets.",
    temperament: ["Shy", "Curious", "Unique"],
    imageUrl: "/hedgedog2.jpg",
    adoptionFee: 150,
    medicalHistory: "Regular vet check-ups, no known health issues",
    specialNeeds: "Requires temperature-controlled environment",
    careRequirements: [
      "Heated terrarium",
      "Specialized hedgehog diet",
      "Quiet environment",
      "Minimal handling"
    ]
  },
  {
    id: "3",
    name: "Polly",
    species: "Parrot",
    breed: "Green-Cheeked Conure",
    age: 3,
    gender: "Female",
    description: "Intelligent and social parrot ready to become your feathered companion. Polly loves interaction, learning tricks, and being the center of attention.",
    temperament: ["Talkative", "Playful", "Affectionate"],
    imageUrl: "/parrot2.jpg",
    adoptionFee: 250,
    medicalHistory: "Annual health screenings, fully vaccinated",
    specialNeeds: "Requires daily mental stimulation and social interaction",
    careRequirements: [
      "Large cage with multiple perches",
      "Varied diet of pellets and fresh produce",
      "Daily interaction and training",
      "Consistent veterinary care"
    ]
  }
];

export async function getOtherPetById(id: string): Promise<OtherPet | null> {
  return otherPetsData.find(pet => pet.id === id) || null;
}

export async function getAllOtherPets(): Promise<OtherPet[]> {
  return otherPetsData;
}
