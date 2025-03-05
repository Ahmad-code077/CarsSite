'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CarList from './CarList';
import AddCar from './AddCar';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import { Car } from './CarList';

const AdminPage = () => {
  const router = useRouter();
  const [cars, setCars] = useState<Car[]>([]); // Define cars as an array of Car
  const [filteredCars, setFilteredCars] = useState<Car[]>([]); // Define filteredCars as an array of Car
  const [searchTerm, setSearchTerm] = useState<string>(''); // Define searchTerm as a string
  const [showAddPopup, setShowAddPopup] = useState<boolean>(false); // Define showAddPopup as a boolean

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      router.push('/');
      return;
    }

    const user = JSON.parse(loggedInUser);
    if (user.email !== 'admin@gmail.com') {
      router.push('/'); // If not admin, redirect to home
    } else {
      fetchCars();
    }
  }, [router]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  const fetchCars = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/cars`);
      if (!response.ok) {
        throw new Error('Failed to fetch cars.');
      }
      const data: Car[] = await response.json(); // Define data as an array of Car
      setCars(data);
      setFilteredCars(data); // Initialize filtered cars
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  // Filter cars based on search term
  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = cars.filter(
      (car) =>
        car.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        car.model.toLowerCase().includes(lowerCaseSearchTerm) ||
        car.seats.toString().includes(lowerCaseSearchTerm) ||
        car.brand.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredCars(filtered);
  }, [searchTerm, cars]);

  return (
    <div className='min-h-screen'>
      {/* Header Section */}
      <div className='flex items-center justify-between p-6 border-b-2 border-gray-200'>
        <h2 className='text-2xl font-bold text-foreground '>All Cars</h2>
        <Button
          onClick={() => setShowAddPopup(true)}
          size='lg'
          className='hover:bg-secondary/90 transition-all duration-300 hover:scale-105 size-16 rounded-full text-white text-5xl'
        >
          +
        </Button>
      </div>

      {/* Search Bar Section */}
      <div className='flex justify-end'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Car List Section */}
      <div>
        {filteredCars.length > 0 ? (
          <CarList cars={filteredCars} refreshCars={fetchCars} />
        ) : (
          <p className='text-center text-gray-500'>
            No cars match your search.
          </p>
        )}
      </div>

      {/* Add Car Popup */}
      {showAddPopup && (
        <AddCar
          onClose={() => setShowAddPopup(false)}
          refreshCars={fetchCars}
        />
      )}
    </div>
  );
};

export default AdminPage;
