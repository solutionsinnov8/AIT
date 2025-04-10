import React from 'react';

const HeroSection = () => {
  return (
    <div>
      {/* Top Image Section */}
      <div
        className="h-[50vh] bg-cover bg-center relative "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(2,29,59,0.8), rgba(2,29,59,0.9)), url('/img1.avif')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Empowering Innovation Through Technology
          </h1>
        </div>
      </div>

      {/* Intro Text Section */}
      <div className="py-16 px-6 md:px-12 bg-white text-gray-800 text-center max-w-[1200px] mx-auto my-[30px] rounded-xl">
        <h2 className="text-3xl font-semibold mb-6" style={{ color: '#c71625' }}>
        MESSAGE BY THE DIRECTOR
        </h2>
        <p className="text-lg leading-relaxed">
          At AIT, our vision is simple: to drive progress and innovation through the
          delivery of advanced technology solutions. From our partnerships with
          government and defense sectors to sourcing cutting-edge machinery
          and robotics, we’re dedicated to supporting Pakistan's growth in
          technology.
          <br /><br />
          We believe in fostering strong relationships with our clients and partners,
          founded on trust, quality, and precision. As we continue to evolve, our
          commitment remains steadfast – delivering value, enhancing capabilities,
          and empowering our clients to succeed in an increasingly tech-driven
          world.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
