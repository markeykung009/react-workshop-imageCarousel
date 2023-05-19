import React, { useState } from "react";
import ImageData from "./ImageData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const length = ImageData.length;

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current === length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <section className="slider">
      <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide} />
      <AiOutlineArrowRight className="rightArrow" onClick={nextSlide} />
      {ImageData.map((el, idx) => {
        return (
          <div className={idx === current ? "slide active" : "slide"} key={idx}>
            {current === idx && (
              <div>
                <img src={el.image} alt={el.title} className="image" />
                <p>{el.title}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
