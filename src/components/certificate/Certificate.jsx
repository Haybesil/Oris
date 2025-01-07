import React from "react";
import Certificate1 from "../../assets/certificate.jpeg"; // Replace with your actual certificate image paths
import Certificate2 from "../../assets/certificate2.png";
// import Certificate3 from "../../assets/Certificate3.jpeg";

const Certificate = () => {
  const certificates = [
    { id: 1, image: Certificate1, title: "Certification Of De-real Oris" },
    { id: 2, image: Certificate2, title: "Certificate of Right-To-Mine" },
    // { id: 3, image: Certificate3, title: "Certificate of Recognition" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">
          Our Certifications
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2" data-aos="flip-up">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="max-w-full h-auto rounded-lg shadow-md mb-4"
              />
              <h3 className="text-center text-lg font-semibold text-gray-800">
                {certificate.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;