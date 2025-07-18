'use client'
import CommonBg from "./components/CommonBg";
import { useEffect, useRef, useState } from "react";
import useIsMobile from "./hook/UseIsMobile";
import heroData from '@/app/data/heroData.json'
import coreCollections from '@/app/data/coreCollection.json'
import ringsCollection1 from '@/app/data/ringsCollection1.json'
import perlData from '@/app/data/perlData.json'
import Cards from "./components/Cards";
import ThumbGallerySlider from "./components/ThumbGallerySlider";
import CommonSlider from "./components/CommonSlider";
import sliderData from '@/app/data/sliderData.json';

export default function Home() {

  const [nav, setNav] = useState(null);
  const isMobile = useIsMobile();
  const sliderRef = useRef(null);

  const sliderSetting = {
    asNavFor: nav,
    ref: sliderRef,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 900, 
        settings: {
          slidesToShow: 1,
          centerPadding: "70px",
          autoplay: false,
        },
      },
    ]
  };

  useEffect(() => {
      setNav(sliderRef.current);
    }, []);

  return (
    <>
      <main>
        <CommonBg title={heroData.title} image={isMobile ? heroData.imageM : heroData.imageD} link={heroData.link} id="heroSection" />
        <section className="silverRingCollection1">
          {
            ringsCollection1.slice(0, 8).map(({ image1, image2, price, title }, index) => {
              return <Cards image1={image1} image2={image2} price={price} title={title} key={index} />
            })
          }
        </section>
        <section className="coreCollection">
          <CommonBg title={coreCollections.title} image={isMobile ? coreCollections.imageM : coreCollections.imageD} link={coreCollections.link} id="coreCollections" />
        </section>

        <section className="coreRingsCards">
          {
            ringsCollection1.slice(8, 16).map(({ image1, image2, price, title }, index) => {
              return <Cards image1={image1} image2={image2} price={price} title={title} key={index} />
            })
          }
        </section>

        <section className="perl">
          <CommonBg title={perlData.title} image={isMobile ? perlData.imageM : perlData.imageD} link={perlData.link} id="perl" />
        </section>

        <section className="perlRingsCards">
          {
            ringsCollection1.slice(16, 32).map(({ image1, image2, price, title, label }, index) => {
              return <Cards image1={image1} image2={image2} price={price} title={title} label={label} key={index} />
            })
          }
        </section>

        <section className="shortDescription">
          <h1>Every piece is made from 925 Sterling Silver, designed in London and hallmarked at the Goldsmiths&apos; Assay Office</h1>
          <img src="https://www.sergedenimes.com/cdn/shop/files/Hallmark_24.svg?v=1707316242&width=160" alt="" className="hallmark"/>
          <video
            autoPlay
            playsInline
            loop
            muted
            preload="none"
            className="desktop serge-videolazyload"
            poster="https://www.sergedenimes.com/cdn/shop/files/preview_images/93170c1e79144e81b325ed9dbae4d7da.thumbnail.0000000000_1200x.jpg?v=1734372161"
          >
            <source
              src={isMobile ? "https://www.sergedenimes.com/cdn/shop/videos/c/vp/bd7b46223dfd4b93b3d3e24f8b54b71a/bd7b46223dfd4b93b3d3e24f8b54b71a.HD-720p-1.6Mbps-39770511.mp4?v=0" : "https://www.sergedenimes.com/cdn/shop/videos/c/vp/93170c1e79144e81b325ed9dbae4d7da/93170c1e79144e81b325ed9dbae4d7da.SD-480p-0.9Mbps-39770512.mp4?v=0"}
              type="video/mp4"
            />
            <img
              src="https://www.sergedenimes.com/cdn/shop/files/preview_images/93170c1e79144e81b325ed9dbae4d7da.thumbnail.0000000000_1200x.jpg?v=1734372161"
              alt="Video fallback"
            />
          </video>
        </section>

        <ThumbGallerySlider />
        <section className="thirdliderSection">
          <div className="shadow one"></div>
          <CommonSlider settings={sliderSetting} sliderData={sliderData} sliderInd={3} className="thirdSlider"/>
          <div className="shadow two"></div>
        </section>
      </main>
    </>
  );
}
