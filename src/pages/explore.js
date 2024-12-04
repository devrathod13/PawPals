import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Header from '../components/Header';

export default function ExplorePets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('/api/pets');
      setPets(response.data.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  return (
    <>
      <Header />
      <ul>
        {pets.map((pet) => (
          <li key={pet._id} className="explore-card">
            <h3>{pet.name}</h3>
            <p>{pet.species} - {pet.age} years old - {pet.location}</p>
            {pet.imageUrl && (
              <div>
                {console.log('Image URL:', pet.imageUrl)}
                <Image 
                  src={pet.imageUrl.startsWith('http://') || pet.imageUrl.startsWith('https://') || pet.imageUrl.startsWith('/')
                    ? pet.imageUrl
                    : `/${pet.imageUrl}`} 
                  alt={pet.name} 
                  width={150} 
                  height={150} 
                />
              </div>
            )}
            <button onClick={() => alert('Adopt functionality coming soon!')}>Adopt</button>
            <button onClick={() => alert('Give Treats functionality coming soon!')}>Give Treats</button>
          </li>
        ))}
      </ul>
    </>
  );
}
