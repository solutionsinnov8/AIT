import React from 'react';
import { FaHandshake, FaIndustry, FaCogs, FaLaptopCode } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full">
          <img
            src="/img2.jpeg"
            alt="AIT Teamwork"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#c71625]">
            About Us
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            AIT is your trusted partner in delivering General Order Supplies, 
            import-export services, and government & defense contracting across Pakistan.
            Based in Rawalpindi, we serve industries with precision, speed, and reliability.
          </p>

          {/* Icon bullets */}
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <FaHandshake className="text-[#c71625] text-xl mt-1" />
              Strong partnerships with government and defense organizations.
            </li>
            <li className="flex items-start gap-3">
              <FaIndustry className="text-[#c71625] text-xl mt-1" />
              Supply of office essentials, ICT, robotics, and telecom equipment.
            </li>
            <li className="flex items-start gap-3">
              <FaCogs className="text-[#c71625] text-xl mt-1" />
              Involved in R&D projects through strategic joint ventures.
            </li>
            <li className="flex items-start gap-3">
              <FaLaptopCode className="text-[#c71625] text-xl mt-1" />
              Custom, high-quality, cost-effective technology solutions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
