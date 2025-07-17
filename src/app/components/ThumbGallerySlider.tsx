// components/ThumbGallerySlider.tsx

'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
];


const ThumbGallerySlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Main Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="w-[80%] h-[400px]"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <h4>{src}</h4>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
          onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}        // ✅ Centered mode
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="w-[80%] h-[100px]"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={src}
              alt={`Thumb ${idx + 1}`}
              width={100}
              height={100}
              className="object-cover border cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
 export default ThumbGallerySlider