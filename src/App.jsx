import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import Home from './pages/home/Home';
import TestimonialSec from './pages/testtimonialSec/TestimonialSec';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Menu from './pages/menu/Menu';
import About from './pages/about/About';
import AbtServices from './pages/abtsevices/AbtServices';
import OurTeam from './pages/ourteam/OurTeam';

const App = () => {
  useEffect(() => {
    // Initialize AOS on mount
    AOS.init({
      duration: 1000,  // Duration of the animation
      easing: "ease-in-out",  // Easing for smooth animation
      once: true,  // Only trigger once when scrolling to the element
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<TestimonialSec />} />
          <Route path="/testimonial" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<AbtServices />} />
          <Route path="/team" element={<OurTeam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;