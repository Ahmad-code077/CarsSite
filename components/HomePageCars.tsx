'use client';

import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';
import SearchBar from './SearchBar'; // Import SearchBar
import { Car } from '@/app/admin/CarList';

const HomePageCars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cars');
        if (!response.ok) {
          throw new Error('Failed to fetch car data.');
        }
        const data: Car[] = await response.json();
        setCars(data);
        setFilteredCars(data); // Initialize filtered cars
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = cars.filter(
      (car) =>
        car.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        car.model.toLowerCase().includes(lowerCaseSearchTerm) ||
        car.seats.toString().includes(lowerCaseSearchTerm) ||
        car.brand.toString().includes(lowerCaseSearchTerm)
    );
    setFilteredCars(filtered);
  }, [searchTerm, cars]);

  if (loading)
    return <p className='text-center text-xl text-gray-600'>Loading cars...</p>;
  if (error) return <p className='text-center text-xl text-red-600'>{error}</p>;

  return (
    <section className='text-white py-12 px-4'>
      {/* Main Heading */}
      <h2 className='text-4xl font-bold text-center mb-8'>Explore Our Cars</h2>

      {/* Search Bar */}
      <div className='mb-8 flex items-center justify-center'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Car List */}
      <div>
        {filteredCars.length > 0 ? (
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <p className='text-center text-gray-300'>
            No cars match your search.
          </p>
        )}
      </div>
    </section>
  );
};

export default HomePageCars;
