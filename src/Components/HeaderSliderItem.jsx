import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper';
// import imgs for slider

const HeaderSliderItem = ({ SliderImg }) => {
  //   console.log(SliderImg);
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          350: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {SliderImg.map((item, i) => (
          <SwiperSlide
            key={i}
            className="w-[99vw] flex items-center justify-center flex-col "
          >
            <img
              className="w-full h-80 border-8 border-[#EFEEEB]"
              src={item.src}
              alt={item.alt}
            />
            <h2 className="font-jost text-lg uppercase mt-1">{item.name}</h2>
            <p className="font-jost text-base font-bold">{item.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSliderItem;
