import React from 'react';

// Array to map over for cards
const aboutContent = [
  {
    title: 'Our Mission',
    description:
      'Our mission is to provide cutting-edge solutions that create long-term value for our clients. We believe in pushing boundaries and delivering exceptional results.',
  },
  {
    title: 'Our Vision',
    description:
      'We envision a future where technology enables people and businesses to thrive in a rapidly changing world. We aim to be at the forefront of this transformation.',
  },
  {
    title: 'Our Values',
    description:
      'We value integrity, collaboration, and innovation. These core principles guide our work, ensuring that we consistently meet and exceed client expectations.',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div>
      <section
        className='relative bg-cover bg-center text-white py-24 px-6 sm:px-16'
        style={{
          backgroundImage:
            'url(https://www.renault.ie/CountriesData/Ireland/images/cars/HELIOS/ConceptCars/GTVisionConcept/GTVisionConcept/renault-gt-vision-concept-001_ig_w600_h337.jpg)',
        }}
      >
        {/* Overlay for better readability */}
        <div className='absolute inset-0 bg-black opacity-40'></div>

        {/* Content Section */}
        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <h1 className='text-5xl font-extrabold text-primary mb-8'>
            About Us
          </h1>
          <p className='text-lg text-gray-300 sm:text-xl'>
            We are a forward-thinking company driven by innovation and a passion
            for excellence. Our team specializes in delivering world-class
            solutions that empower our clients and elevate their businesses.
          </p>

          {/* Card Section */}
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16'>
            {aboutContent.map((item, index) => (
              <div
                key={index}
                className={' text-white bg-card rounded-lg shadow-lg p-6'}
              >
                <h3 className='text-2xl font-semibold mb-4 '>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <div className='mt-16 p-8 bg-background rounded-lg shadow-xl text-foreground'>
        <h3 className='text-4xl font-semibold mb-6 text-primary'>
          More About Us
        </h3>
        <p className='text-lg text-gray-300'>
          At WheelDeal, we are passionate about providing the best car rental
          and sales experience. With years of expertise in the automotive
          industry, we have built a reputation for offering a wide selection of
          high-quality vehicles, from luxury cars to reliable family sedans.
          Whether you&apos;re looking to rent a car for a weekend getaway or
          purchase your dream vehicle, we are committed to meeting your needs
          with exceptional service and unbeatable prices.
        </p>

        <div className='mt-8 flex flex-col sm:flex-row gap-8'>
          {/* Our Story Card */}
          <div className='bg-card text-white rounded-lg shadow-lg p-6'>
            <h4 className='text-2xl font-semibold mb-4'>Our Story</h4>
            <p className='text-white'>
              Our journey began with a simple idea: to provide customers with an
              easy and affordable way to access top-quality vehicles. Over the
              years, we&apos;ve expanded our fleet, offering everything from
              sports cars to SUVs, and even electric vehicles. Our commitment to
              excellence has made us one of the most trusted names in the car
              rental and sales industry.
            </p>
          </div>

          {/* Our Approach Card */}
          <div className='bg-card text-white rounded-lg shadow-lg p-6'>
            <h4 className='text-2xl font-semibold mb-4'>Our Approach</h4>
            <p className='text-white'>
              At WheelDeal, we prioritize our customers’ needs. We believe in
              offering not just cars, but experiences. From a seamless online
              booking process to exceptional customer service, we ensure that
              your car rental or purchase journey is smooth, convenient, and
              memorable. Our dedicated team is always available to assist you in
              choosing the perfect vehicle for your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
