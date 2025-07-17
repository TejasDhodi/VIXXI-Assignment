import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstSliders from '@/app/data/firstSlides.json';

function ThumbGallerySlider() {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const slides = [1, 2, 3, 4, 5, 6];

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
    centerPadding: "40px",
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <div className="slider-container">
      <h2>Slider Syncing (AsNavFor)</h2>

      <h4>First Slider</h4>
      <Slider {...mainSliderSettings}>
        {firstSliders.map(({content, detail}) => (
            <div className="slider_content" key={content}>
              <h2>&quot;{detail}&quot;</h2>
              <p>{content}</p>
            </div>
        ))}
      </Slider>

      <h4>Second Slider</h4>
      <Slider {...thumbSliderSettings}>
        {slides.map((num) => (
          <div key={num}>
            <img src="/images/carouselimg.svg" alt={`Thumb ${num}`} />
            <h3>{num}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ThumbGallerySlider;
