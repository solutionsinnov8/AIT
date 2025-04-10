import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Import Swiper styles
import { Autoplay, Navigation, Pagination } from 'swiper'; // Import required modules

const OurPartners = () => {
  return (
    <section id="partners" className="py-20 px-6 md:px-12 bg-[#f4f7fa]">
      <div className="max-w-5xl mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Autoplay, Navigation, Pagination]} // Use the modules array to pass modules
        >
          <SwiperSlide><img src="/img2.jpeg" alt="Partner 1" className="w-full object-contain" /></SwiperSlide>
          <SwiperSlide><img src="/img2.jpeg" alt="Partner 2" className="w-full object-contain" /></SwiperSlide>
          <SwiperSlide><img src="/img2.jpeg" alt="Partner 3" className="w-full object-contain" /></SwiperSlide>
          <SwiperSlide><img src="/img2.jpeg" alt="Partner 4" className="w-full object-contain" /></SwiperSlide>
          <SwiperSlide><img src="/img2.jpeg" alt="Partner 5" className="w-full object-contain" /></SwiperSlide>
          <SwiperSlide><img src="/img2.jpeg" alt="Partner 6" className="w-full object-contain" /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurPartners;
