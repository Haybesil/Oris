import React from 'react';
import heroImage from '../../assets/heroimg.jpg';

const Hero = () => {
  return (
    <div
  className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" data-aos="fade-up">
          De-Real Oris, The Best Exporting Natural Resources.
        </h1>
        <p className="text-lg md:text-xl text-[#cacccfe2]" data-aos="fade-down">
          We are not just into exports of natural resources alone; we are also into real estate, Oil and Gas, and a lot more.
        </p>


        <div
          className="bg-[#d29a0d] hover:bg-[#7D6119] hover:cursor-pointer inline-block py-3 px-9 mt-8 rounded-lg text-white text-lg font-semibold cursor-pointer" data-aos="fade-up"
        >
          Explore Now
        </div>
      </div>

      
    </div>
  );
};

export default Hero;