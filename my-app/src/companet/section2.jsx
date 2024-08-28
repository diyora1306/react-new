import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Pagination } from "swiper/modules";
import Video from "./img/video.png";
import Img from "./img/img.png";

function section2() {
  return (
    <>
      <div className="container">
        <div className="text text-center">
          <p className="my-3 font-extrabold text-fuchsia-700">Streamer</p>
          <h1 className="text-3xl font-extrabold my-3 text-fuchsia-950">
            Featured <span className="text-pink-800">Streamer</span>
          </h1>
        </div>
        <Swiper
          slidesPerView={"2"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="img">
              <img src={Video} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={Img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={Video} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={Img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={Video} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={Img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={Video} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={Img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src={Video} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default section2;
