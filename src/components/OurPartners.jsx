
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick'; // Import react-slick
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // For custom next/previous arrows

const OurPartners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,  // Show 5 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // This helps in adding space between the images
    focusOnSelect: true,  // Allows image selection
    nextArrow: <FaArrowRight className="slick-next custom-arrow " />,  // Custom next arrow
    prevArrow: <FaArrowLeft className="slick-prev custom-arrow" />,   // Custom previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 logos on smaller screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 logo on mobile
        }
      }
    ]
  };

  return (
    <section id="partners" className="py-20 px-6 md:px-12 bg-[#f4f7fa]">
      <div className="max-w-5xl mx-auto">
        <Slider {...settings} className="">
          <div className="px-4"><img src="/images/2.png" alt="Partner 1" className=" w-full object-contain rounded-lg shadow-lg" /></div>
          <div className="px-4"><img src="/images/3.png" alt="Partner 2" className=" w-full object-contain rounded-lg shadow-lg" /></div>
          <div className="px-4"><img src="/images/4.webp" alt="Partner 3" className=" w-full object-contain rounded-lg shadow-lg" /></div>
          <div className="px-4"><img src="/images/a.png" alt="Partner 4" className=" w-full object-contain rounded-lg shadow-lg" /></div>
          <div className="px-4"><img src="/images/d.jpg" alt="Partner 5" className=" w-full object-contain rounded-lg shadow-lg" /></div>
          <div className="px-4"><img src="/images/h.webp" alt="Partner 6" className=" w-full object-contain rounded-lg shadow-lg" /></div>
        </Slider>
      </div>
    </section>
  );
};

export default OurPartners;
