const HeroSection = () => {
  return (
    <section
      className='relative bg-cover bg-center text-white py-32 px-6 sm:px-16'
      style={{
        backgroundImage:
          'url(https://static.vecteezy.com/system/resources/previews/039/617/725/non_2x/ai-generated-polished-shiny-beautiful-black-car-on-dark-isolated-background-for-website-or-print-design-generative-ai-free-photo.jpg)', // Replace with your actual image URL
      }}
    >
      {/* Overlay for readability */}
      <div className='absolute inset-0 bg-black opacity-70'></div>

      {/* Content Section */}
      <div className='relative z-10 max-w-7xl mx-auto text-center'>
        <h1 className='text-5xl font-extrabold  mb-8'>
          Discover Your Dream Car with{' '}
          <span className='text-primary'> WheelDeal</span>
        </h1>
        <p className='text-lg sm:text-xl mb-12'>
          Explore our premium selection of cars, designed for performance,
          luxury, and innovation. Whether you&apos;re looking for a sleek sedan,
          a robust SUV, or something in between, WheelDeal brings you closer to
          your perfect vehicle.
        </p>
      </div>
    </section>
  );
};
export default HeroSection;
