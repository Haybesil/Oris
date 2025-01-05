import React, { useState, useEffect } from 'react';

const TextSlider = () => {
  const slides = [
    {
      text: "Not having to worry about low quality on every product is the best satisfaction for me. Delivering excellence is our commitment, ensuring every detail exceeds expectations. With unwavering quality, we turn your vision into reality, one product at a time.",
      author: "Lisa Dobbstaff",
    },
    {
      text: "I’m well satisfied with the simplicity and honesty involved in the transaction of all the merchandise I’ve got from you. The seamless process and your unwavering commitment to transparency have truly earned my trust. Every purchase feels like a step toward building a lasting partnership grounded in integrity and excellence.!",
      author: "John Smith",
    },
    {
      text: "Experience a welcoming handshake as you visit the site and witness firsthand the meticulous process of excavation, showcasing precision, dedication, and a commitment to excellence at every stage.",
      author: "Sarah Johnson",
    },
    {
      text: "De-Real-Oris has been the best right from the start and has never disappointed me in any way. Their unwavering consistency, exceptional quality, and dedication to customer satisfaction make them a trusted name I can always rely on!",
      author: "Emily Davis",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (<div className='flex flex-col gap-28 pt-14 bg-[#1a1a1a] items-center'>
    <h1 className=' text-white font-semibold text-4xl'>TESTIMONIALS</h1>
    <div className=" items-center justify-center h-[60vh]" data-aos="flip-down">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-[#FFFFFF] text-xl font-medium mb-4" data-aos="fade-right">WHAT THEY'RE SAYING</h2>
        <div className="border border-gray-300 p-10 bg-[#1a1a1a] text-[#FFFFFF] rounded-lg shadow-md" data-aos="fade-left">
          <p className="text-2xl italic">"{slides[currentSlide].text}"</p>
          <p className="text-lg mt-4 text-[#FF3F8E]">- {slides[currentSlide].author}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TextSlider;