import React from "react";
import CEO from "../../assets/ceo.jpeg";
import CAO from "../../assets/cao.jpeg";
import CTMC from "../../assets/ctmc.jpeg";
import PM from "../../assets/pm.jpeg";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Mr. Ojo Orisunmibare",
      post: "Chief Executive Officer (CEO)",
      image: CEO,
    },
    {
      name: "Mr. Muiz Orisunmibare",
      post: "Chief Accounting Officer",
      image: CAO,
    },
    {
      name: "Mr. Abiodun Omoniyi Taiwo",
      post: "Chief Technical Mining Consultant",
      image: CTMC,
    },
    {
      name: "Mr. Aje Paul Oluwagbemiga",
      post: "Project Manager",
      image: PM,
    },
  ];

  return (
    <div id="OurTeam" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
        <p className="text-center text-gray-600 mb-10">
          At De-Real-Oris, our success is driven by a dedicated team of talented individuals.
          Meet the professionals who bring their expertise, passion, and creativity to our organization.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="flip-right">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105 ${
                index === teamMembers.length - 1 ? " lg:w-[28vw]" : ""
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.post}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;