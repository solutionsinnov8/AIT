import React from 'react';
import { FaTools, FaRegLightbulb, FaCogs, FaMicrochip, FaRobot, FaBoxes, FaFileAlt } from 'react-icons/fa'; // Example icons

const services = [
  {
    title: "General Order Supplier",
    description: "AIT supplies a wide range of high-quality equipment and materials, ensuring reliable service and timely delivery to meet your needs.",
    icon: <FaFileAlt className="text-4xl mx-auto" />,
  },
  {
    title: "Electronics Repair Services",
    description: "We provide reliable repair services for industrial, medical, and telecom electronics, ensuring minimal downtime and optimal performance.",
    icon: <FaTools className="text-4xl mx-auto" />,
  },
  {
    title: "PCB Design and Assembly",
    description: "We specialize in high-speed, multi-layer PCB design and assembly, ensuring quality and reliability for next-gen technologies and sensitive applications.",
    icon: <FaMicrochip className="text-4xl mx-auto" />,
  },
  {
    title: "Reverse Engineering Services",
    description: "We specialize in revitalizing outdated technologies, offering re-engineering and product upgrades to extend equipment lifecycle and ensure peak performance.",
    icon: <FaCogs className="text-4xl mx-auto" />,
  },
  {
    title: "Electronics Engineering Services",
    description: "We offer end-to-end engineering solutions, specializing in RF circuits, antennas, and embedded systems for diverse sectors, including military and medical",
    icon: <FaRegLightbulb className="text-4xl mx-auto" />,
  },
  {
    title: "Robotics and Automation Solutions",
    description: "We provide high-quality robotic equipment and drones for industrial automation and specialized applications, backed by local R&D to deliver custom.",
    icon: <FaRobot className="text-4xl mx-auto" />,
  },
  {
    title: "Specialized Products",
    description: "We offer specialized products like LiDAR surveillance stations, smart weather stations, and rugged equipment for critical applications, ensuring advanced monitoring",
    icon: <FaBoxes className="text-4xl mx-auto" />,
  },
];

const OurServices = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-[#f4f7fa]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#021d3b] mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-6 rounded-lg shadow-lg">
              <div className="icon-container text-[#c71625] mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#021d3b] mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
