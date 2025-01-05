import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/deallogo.png";
import { Link as ScrollLink } from "react-scroll"; // Importing ScrollLink

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navgradient text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <img src={Logo} alt="Logo" width="120px" height="54" />
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex gap-10 lg:gap-8 text-white absolute lg:static pl-5 lg:pt-0 pt-8 lg:text-base text-lg top-0 left-0 h-screen w-[70%] lg:w-auto lg:h-auto bg-gray-800 lg:bg-transparent flex-col lg:flex-row items-center justify-center transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <li className="py-2 lg:py-0 hover:text-gray-400 hover:border-b-2 hover:border-b-[#7C5919] transition-colors duration-200 cursor-pointer">
            <ScrollLink
              to="Home"
              spy={true}
              smooth={true}
              offset={-67}
              onClick={closeMenu}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li className="py-2 lg:py-0 hover:text-gray-400 hover:border-b-2 hover:border-b-[#7C5919] transition-colors duration-200 cursor-pointer">
            <ScrollLink
              to="About"
              spy={true}
              smooth={true}
              offset={-67}
              onClick={closeMenu}
              duration={500}
            >
              About
            </ScrollLink>
          </li>
          <li className="py-2 lg:py-0 hover:text-gray-400 hover:border-b-2 hover:border-b-[#7C5919] transition-colors duration-200 cursor-pointer">
            <ScrollLink
              to="AbtServices"
              spy={true}
              smooth={true}
              offset={-67}
              onClick={closeMenu}
              duration={500}
            >
              Services
            </ScrollLink>
          </li>
          <li className="py-2 lg:py-0 hover:text-gray-400 hover:border-b-2 hover:border-b-[#7C5919] transition-colors duration-200 cursor-pointer">
            <ScrollLink
              to="OurTeam"
              spy={true}
              smooth={true}
              offset={-67}
              onClick={closeMenu}
              duration={500}
            >
              Our Team
            </ScrollLink>
          </li>
          <li className="py-2 lg:py-0 hover:text-gray-400 hover:border-b-2 hover:border-b-[#7C5919] transition-colors duration-200 cursor-pointer">
            <ScrollLink
              to="Gallery"
              spy={true}
              smooth={true}
              offset={-67}
              onClick={closeMenu}
              duration={500}
            >
              Gallery
            </ScrollLink>
          </li>
          <li className="py-2 lg:py-0 hover:text-gray-400 hover:border-b-2 hover:border-b-[#7C5919] transition-colors duration-200 cursor-pointer">
            <ScrollLink
              to="Menu"
              spy={true}
              smooth={true}
              offset={-67}
              onClick={closeMenu}
              duration={500}
            >
              Products/Menu
            </ScrollLink>
          </li>
          <li className="py-2 lg:py-0 hover:text-gray-400 hover:border-b-2 hover:border-b-[#7C5919] transition-colors duration-200 cursor-pointer">
            <ScrollLink
              to="TestimonialSec"
              spy={true}
              smooth={true}
              offset={-67}
              onClick={closeMenu}
              duration={500}
            >
              Testimonials
            </ScrollLink>
          </li>
          <li className="py-2 lg:py-0 hover:text-gray-400 hover:border-b-2 hover:border-b-[#7C5919] transition-colors duration-200 cursor-pointer">
            <ScrollLink
              to="Contact"
              spy={true}
              smooth={true}
              offset={-67}
              onClick={closeMenu}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Hamburger Menu for Mobile View */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu size="30" />}
        </div>

        {/* Social Media Section */}
        <div className="hidden lg:flex gap-4 text-xl">
          <a
            href="https://www.facebook.com/profile.php?id=61566882631819&mibextid=ZbWKwL
"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61566882631819&mibextid=ZbWKwL
"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61566882631819&mibextid=ZbWKwL
"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;