import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function PetDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/pets/${id}`);
          setPet(response.data.data);
        } catch (error) {
          console.error('Error fetching pet details:', error);
        }
      }
    };
    fetchPetDetails();
  }, [id]);

  if (!pet) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pet.name}</h1>
      <Image src={pet.imageUrl} alt={pet.name} width={300} height={300} />
      <p>Species: {pet.species}</p>
      <p>Age: {pet.age} years</p>
      <p>Location: {pet.location}</p>
      <button onClick={() => alert('Adoption process coming soon!')}>Adopt</button>
    </div>
  );
}
