'use client';

import HomePageCars from '@/components/HomePageCars';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}

      <HeroSection />
      {/* Cars Section */}
      <HomePageCars />
    </div>
  );
};

export default Home;
