import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const OurVision = () => {
  return (
    <section id="vision" className="py-20 px-6 md:px-12 bg-[#f9f9f9] text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        {/* Icon and Heading */}
        <div className="flex flex-col items-center mb-6">
          <FaLightbulb className="text-4xl text-[#c71625]" />
          <h2 className="text-3xl font-bold mt-2 text-[#021d3b]">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-[#c71625] mt-2 mb-6"></div>
        </div>

        {/* Content */}
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          To accelerate the supply of high-value machinery and pave the way for
          local manufacturing in Pakistan, upholding the highest international
          standards. We aim to drive innovation and self-reliance by building a strong
          foundation for advanced technology solutions, supporting industries, and
          contributing to national progress.
        </p>
      </div>
    </section>
  );
};

export default OurVision;
