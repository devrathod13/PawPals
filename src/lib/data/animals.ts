export interface Animal {
  id: number;
  name: string;
  type: 'Dog' | 'Cat' | 'Other';
  breed: string;
  age: number;
  gender: 'Male' | 'Female';
  size: 'Small' | 'Medium' | 'Large';
  personality: string[];
  medicalHistory: string[];
  adoptionFee: number;
  images: string[];
  description: string;
  specialNeeds?: string;
  goodWith: {
    dogs?: boolean;
    cats?: boolean;
    children?: boolean;
  };
}

export const animals: Animal[] = [
  {
    id: 1,
    name: "Luna",
    type: "Dog",
    breed: "Golden Retriever",
    age: 3,
    gender: "Female",
    size: "Large",
    personality: ["Friendly", "Energetic", "Playful"],
    medicalHistory: ["Spayed", "Up-to-date on vaccinations"],
    adoptionFee: 250,
    images: ["/luna1.jpg", "/luna2.jpg", "/luna3.jpg"],
    description: "Luna is a loving and energetic Golden Retriever who loves long walks and playing fetch. She's great with families and knows basic commands.",
    goodWith: {
      dogs: true,
      cats: false,
      children: true
    }
  },
  {
    id: 2,
    name: "Whiskers",
    type: "Cat",
    breed: "Siamese",
    age: 5,
    gender: "Male",
    size: "Small",
    personality: ["Cuddly", "Calm", "Independent"],
    medicalHistory: ["Neutered", "Dental cleaning done"],
    adoptionFee: 150,
    images: ["/whiskers1.jpg", "/whiskers2.jpg"],
    description: "Whiskers is a sophisticated Siamese cat who enjoys quiet environments and lap cuddles. Perfect for a calm household.",
    specialNeeds: "Requires daily brushing",
    goodWith: {
      dogs: false,
      cats: true,
      children: false
    }
  },
  {
    id: 3,
    name: "Rocky",
    type: "Dog",
    breed: "Pit Bull Mix",
    age: 4,
    gender: "Male",
    size: "Medium",
    personality: ["Loyal", "Protective", "Gentle"],
    medicalHistory: ["Neutered", "Training completed"],
    adoptionFee: 200,
    images: ["/rocky1.jpg", "/rocky2.jpg"],
    description: "Rocky is a gentle giant looking for an experienced owner who can provide structure and love. He's great with proper socialization.",
    goodWith: {
      dogs: true,
      cats: false,
      children: true
    }
  }
];
