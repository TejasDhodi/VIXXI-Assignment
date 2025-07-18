import React from 'react'
import Slider from 'react-slick';
import { CommonSliderType } from '../types/commonSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommonSlider = ({ settings, className, sliderData, sliderInd }: CommonSliderType) => {
  return (
    <Slider {...settings} className={className}>
      {
        sliderInd === 2 ? sliderData.slider2?.map((img: string, index: number) => (
          <div className="slider_content" key={index}>
            <img src={img} alt="" height={30} width={200} />
          </div>
        )) : sliderData.slider3?.map(({description, img, title}, index) => (
          <div className="slider_content third" key={index}>
            <div className="icon">
              <img src={img}width="40" height="40" loading="lazy" />
            </div>
            <div className="content">
              <div className="icon-title">{title}</div>
              <div className="icon-text">{description}</div>
              <div className="icon-link"><a href="" title="">Learn More</a></div>
            </div>
          </div>
        ))
      }
    </Slider>
  )
}

export default CommonSlider;
