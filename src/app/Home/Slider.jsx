"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="h-90 w-full flex flex-col items-center">
      <h1 className="text-5xl text-sky-500 my-5">Our Popular Porducts</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-30"
      >
        <SwiperSlide>
          <Image
            src="/one.jpg"
            alt="img"
            height={100}
            width={300}
            className="w-full h-auto"
          />
        </SwiperSlide>
        {/*  */}
        <SwiperSlide>
          <Image
            src="/two.jpg"
            alt="img"
            height={100}
            width={300}
            className="w-full h-auto"
          />
        </SwiperSlide>
        {/*  */}
        <SwiperSlide>
          <Image
            src="/three.jpg"
            alt="img"
            height={100}
            width={300}
            className="w-full h-auto"
          />
        </SwiperSlide>
        {/*  */}
        <SwiperSlide>
          <Image
            src="/four.jpg"
            alt="img"
            height={100}
            width={300}
            className="w-full h-auto"
          />
        </SwiperSlide>
        {/*  */}
        <SwiperSlide>
          <Image
            src="/five.jpg"
            alt="img"
            height={100}
            width={300}
            className="w-full h-auto"
          />
        </SwiperSlide>
        {/*  */}
      </Swiper>
    </div>
  );
};

export default Slider;
