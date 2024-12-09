export interface Animal {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: 'Male' | 'Female';
  description: string;
  imageUrl: string;
  status: 'Available' | 'Adopted' | 'Pending';
}

export const animals: Animal[] = [
  {
    id: '1',
    name: 'Luna',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    gender: 'Female',
    description: 'Friendly and energetic Golden Retriever looking for a loving home. Great with kids and other pets.',
    imageUrl: '/images/animals/luna.jpg',
    status: 'Available'
  },
  {
    id: '2',
    name: 'Whiskers',
    species: 'Cat',
    breed: 'Siamese',
    age: 2,
    gender: 'Male',
    description: 'Playful Siamese cat with striking blue eyes. Loves cuddles and interactive toys.',
    imageUrl: '/images/animals/whiskers.jpg',
    status: 'Available'
  }
];

export async function getAnimalById(id: string): Promise<Animal | undefined> {
  return animals.find(animal => animal.id === id);
}

export async function getAllAnimals(): Promise<Animal[]> {
  return animals;
}
