import React from 'react';
import Link from 'next/link';
import { Car } from '@/app/admin/CarList';
import Image from 'next/image';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className='bg-card text-foreground rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 '>
      <Image
        src={car.image || '/default-car-image.jpg'} // Fallback image if car.image is not available
        alt={car.name}
        className='w-full h-64 object-cover mb-4'
        width={500}
        height={300}
        unoptimized={true}
        loading='lazy'
      />
      <div className='p-4'>
        <h3 className='text-xl font-semibold'>{car.name}</h3>
        <p className='text-sm text-muted-foreground'>
          Model: <span className='text-neutral-300'>{car.model}</span>
        </p>
        <p className='text-sm text-muted-foreground'>
          Brand: <span className='text-neutral-300'>{car.brand}</span>
        </p>
        <p className='text-sm text-muted-foreground'>
          Seats: <span className='text-neutral-300'>{car.seats}</span>
        </p>
        <p className='text-sm text-muted-foreground'>
          Rate:{' '}
          <span className='text-neutral-300'>PKR {car.dailyRate}/day</span>
        </p>
        <p
          className={`text-sm font-semibold ${
            car.availability ? 'text-success' : 'text-destructive'
          }`}
        >
          {car.availability ? 'Available' : 'Not Available'}
        </p>
        <Link
          href={`/cars/${car.id}`}
          className='text-primary hover:underline mt-2 block'
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
