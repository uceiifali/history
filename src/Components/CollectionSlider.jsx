import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper';
// import imgs for slider
const CollectionSlider = ({ CollectionImg }) => {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        loop={true}
        className="mySwiper "
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {CollectionImg.map((item, i) => (
          <SwiperSlide
            key={i}
            className="w-[80vw] h-80 bg-[#EFEEEB]  flex items-center justify-center flex-col  p-6 "
          >
            <div className="bg-[#EFEEEB] p-5 ">
              <img className="w-full h-56  " src={item.src} alt={item.alt} />
              <h2 className="font-jost font-medium text-base uppercase pt-1 w-full  ">
                {item.name}
              </h2>
              <a
                href="/"
                className="font-jost text-sm font-normal w-full  underline"
              >
                {item.link}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollectionSlider;
