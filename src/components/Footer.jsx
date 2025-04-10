import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Solutions Innov8 Link */}
        <p className="text-lg mb-6">
          <a href="https://www.solutionsinnov8.com" className="font-bold text-indigo-500 hover:text-indigo-300 transition-colors duration-300">
            Solutions Innov8
          </a> - Crafting innovative solutions.
        </p>

        <div className="flex justify-center space-x-8 mb-6">
          {/* AIT Company Name */}
          <span className="text-white text-sm">AIT - Your Trusted Partner</span>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AIT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
