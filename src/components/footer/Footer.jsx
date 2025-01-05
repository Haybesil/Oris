import React from "react";
import Logo from "../../assets/deallogo.png";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerbg text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-5">
        {/* Logo and About Section */}
        <div className="col-span-1">
          <img src={Logo} alt="De-Real-Oris Logo" className="w-28 mb-4" />
          <p className="text-sm">
            De-Real-Oris is committed to delivering excellence in every aspect
            of our operations. Your satisfaction is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Our Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#exports" className="hover:text-white">
                Exports
              </a>
            </li>
            <li>
              <a href="#realestate" className="hover:text-white">
                Real Estate
              </a>
            </li>
            <li>
              <a href="#oil-gas" className="hover:text-white">
                Oil & Gas
              </a>
            </li>
            <li>
              <a href="#consulting" className="hover:text-white">
                Consulting
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#partners" className="hover:text-white">
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
          <ul className="space-y-2">
            <li>
              <span>Phone: +123-456-7890</span>
            </li>
            <li>
              <span>Email: info@derealoris.com</span>
            </li>
            <li>
              <span>Address: 123 Export Lane, Cityville</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex gap-4 text-xl justify-center my-5">
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

      <div className="text-center mt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} De-Real-Oris. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;