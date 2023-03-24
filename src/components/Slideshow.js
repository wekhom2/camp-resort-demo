import React, { useState } from "react";
import { images } from "../constants/";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Slideshow = () => {
  const sliderData = [
    images.adds10,
    images.slide2,
    images.slide4,
    images.slide3,
    images.adds15,
  ];

  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slide-container">
        <AiOutlineArrowLeft className="arrow-left" onClick={prevSlide} />

        <Banner
          title="JACARANDA BUSH CAMP"
          subtitle="Come experience the best accomodation in Maasai Mara"
        >
          <Link to="/rooms" className="btn-primary">
            find a room
          </Link>
        </Banner>

        <div className="slide-center">
          {sliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slides active" : "slides"}
                key={index}
              >
                {index === current && <img src={slide} />}
              </div>
            );
          })}
        </div>

        <AiOutlineArrowRight className="arrow-right" onClick={nextSlide} />
      </section>
    </>
  );
};

export default Slideshow;
