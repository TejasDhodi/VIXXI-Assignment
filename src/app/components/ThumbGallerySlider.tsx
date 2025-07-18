import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderData from '@/app/data/sliderData.json';
import CommonSlider from "./CommonSlider";

function ThumbGallerySlider() {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const mainSliderSettings = {
    asNavFor: nav2,
    ref: sliderRef1,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  const thumbSliderSettings = {
    asNavFor: nav1,
    ref: sliderRef2,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <div className="slider-container">

      <Slider {...mainSliderSettings} className="brandText">
        {sliderData.slider1.map(({detail, content}, index) => (
            <div className="slider_content" key={index}>
              <h2>&quot;{detail}&quot;</h2>
              <p>{content}</p>
            </div>
        ))}
      </Slider>

      <CommonSlider settings={thumbSliderSettings} className="brandLogo" sliderData={sliderData} sliderInd={2}/>
    </div>
  );
}

export default ThumbGallerySlider;
