import React from 'react';
import { FaBullseye } from 'react-icons/fa';

const OurMission = () => {
  return (
    <section id="mission" className="py-20 px-6 md:px-12 bg-[#f4f7fa] text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        {/* Icon and Heading */}
        <div className="flex flex-col items-center mb-6">
          <FaBullseye className="text-4xl text-[#c71625]" />
          <h2 className="text-3xl font-bold mt-2 text-[#021d3b]">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-[#c71625] mt-2 mb-6"></div>
        </div>

        {/* Content */}
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Our mission is to be among the top suppliers, importers, exporters, and
          government & defense contractors in Pakistan. We strive to foster long-lasting
          relationships with our clients by offering dependable, efficient, cost-effective,
          and innovative solutions tailored to their needs.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
