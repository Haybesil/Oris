import React from "react";
import Feldspar from "../../assets/feldspar.jpeg"
import Quartz from "../../assets/quartz.jpeg"
import Mica from "../../assets/mica.jpeg"
import RealEstate from "../../assets/realestate.jpeg"
import Rose from "../../assets/rose.jpeg"
import OilGas from "../../assets/oil&gas.jpeg"

const AbtServices = () => {
  const services = [
    {
      icon: Feldspar, // Replace with the actual path to your image
      title: "Feldspar",
      description: "An important source of alumina in the glassmaking and the ceramics industries.",
    },
    {
      icon: Rose, // Replace with the actual path to your image
      title: "Rose Quartz",
      description: "Rose quartz may be used to balance emotional health, release emotional blockages, and balance other chakras.",
    },
    {
      icon: Quartz, // Replace with the actual path to your image
      title: "Quartz",
      description: "Use quartz, such as watches and clocks, kitchen countertops, electronics in radios, GPS and computers, even toothpaste.",
    },
    {
      icon: Mica, // Replace with the actual path to your image
      title: "Mica",
      description: "Mica powder is used in clay pots, traditional Pueblo pottery, colored powders, Kirazuri printing techniques or woodblock printmaking.",
    },
    {
      icon: RealEstate, // Replace with the actual path to your image
      title: "Real Estate",
      description: "Here are five main categories of real estate which include residential, commercial, industrial, raw land, and special use.",
    },
    {
      icon: OilGas, // Replace with the actual path to your image
      title: "Oil and Gas",
      description: "We use petroleum products to propel vehicles, to heat buildings, and to produce electricity.",
    },
  ];

  return (
    <div id="AbtServices" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="flip-down">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mx-auto mb-4 rounded-full"
              />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AbtServices;