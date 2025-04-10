import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">Contact Us</h2>
        <p className="text-lg text-white mb-12">Reach out to us for more information or queries. We're always ready to assist you!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Location */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 transform">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 2c2.21 0 4 1.79 4 4 0 1.66-.73 3.16-1.88 4.18-.14.16-.28.33-.42.49-.32.34-.65.68-.98 1.01-1.27 1.32-2.7 2.67-4.21 3.85-1.51-1.18-2.94-2.53-4.21-3.85-.33-.33-.66-.67-.98-1.01-.14-.16-.28-.33-.42-.49C8.73 9.16 8 7.66 8 6c0-2.21 1.79-4 4-4z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Location</h3>
            <p className="text-lg text-gray-600">C-4, Lane 7, Gulistan Apartments, Gulistan Colony, Rawalpindi</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 transform">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l4 4 3-3 6 6 3-3 4 4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-lg text-gray-600">+92 51-5150490            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 transform">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.5 6l9 6 9-6M2.5 12l9 6 9-6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-lg text-gray-600">info@pk-ait.com
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="mailto:info@pk-ait.com"
            className="inline-block bg-indigo-600 text-white text-lg py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors duration-300"
          >
            Send us an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
