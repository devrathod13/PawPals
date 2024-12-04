import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function AdminDashboard() {
  const [pets, setPets] = useState([]);
  const [formData, setFormData] = useState({ name: '', species: '', age: '', location: '', imageUrl: '' });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddPet = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/pets', formData);
      fetchPets();
      setFormData({ name: '', species: '', age: '', location: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  };

  const handleEditPet = (pet) => {
    setEditMode(true);
    setEditId(pet._id);
    setFormData({ name: pet.name, species: pet.species, age: pet.age, location: pet.location, imageUrl: pet.imageUrl });
  };

  const handleUpdatePet = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/pets/${editId}`, formData);
      fetchPets();
      setEditMode(false);
      setEditId(null);
      setFormData({ name: '', species: '', age: '', location: '', imageUrl: '' });
    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };

  const handleDeletePet = async (id) => {
    try {
      await axios.delete(`/api/pets/${id}`);
      fetchPets();
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <form className="admin-form" onSubmit={editMode ? handleUpdatePet : handleAddPet}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
        <input type="text" name="species" placeholder="Species" value={formData.species} onChange={handleInputChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleInputChange} required />
        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleInputChange} required />
        <button type="submit">{editMode ? 'Update Pet' : 'Add Pet'}</button>
      </form>
      <h2>Pet Listings</h2>
      <div className="admin-pet-list">
        {pets.map((pet) => (
          <div key={pet._id} className="admin-pet-card">
            <h3>{pet.name}</h3>
            <p>{pet.species} - {pet.age} years old - {pet.location}</p>
            {pet.imageUrl && (
              <>
                {pet.imageUrl.startsWith('http://') || pet.imageUrl.startsWith('https://') || pet.imageUrl.startsWith('/')
                  ? <Image src={pet.imageUrl} alt={pet.name} width={100} height={100} />
                  : <Image src={`/${pet.imageUrl}`} alt={pet.name} width={100} height={100} />
                }
              </>
            )}
            <button onClick={() => handleEditPet(pet)}>Edit</button>
            <button onClick={() => handleDeletePet(pet._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
