import { Swiper, SwiperSlide } from "swiper/react";
// import Carousel from "react-bootstrap/Carousel";
import portadaSlider from "../../assets/imgSlider1.jpg";
import secondSlider from "../../assets/imgSlider2.jpg";
import thirdSlider from "../../assets/imgSlider3.jpg";
import "./Slider.css";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
export default function Slider() {
  return (
    <>
      <div className="relative">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="sliderContainer"
        >
          <SwiperSlide>
            <img src={portadaSlider} alt="Playa de San Juan de la Arena" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={secondSlider} alt="Playa de San Juan de la Arena" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thirdSlider} alt="Playa de San Juan de la Arena" />
          </SwiperSlide>
        </Swiper>
        <h1 className="sliderTitle">
          ENCUENTRA LAS MEJORES <br />
          OPINIONES SOBRE
          <br /> PLAYAS ASTURIANAS
        </h1>
      </div>
    </>
  );
}
