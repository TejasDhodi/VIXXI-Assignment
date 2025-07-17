'use client'
import CommonBg from "./components/CommonBg";
import { useEffect } from "react";
import useIsMobile from "./hook/UseIsMobile";
import heroData from '@/app/data/heroData.json'
import coreCollections from '@/app/data/coreCollection.json'
import ringsCollection1 from '@/app/data/ringsCollection1.json'
import perlData from '@/app/data/perlData.json'
import Cards from "./components/Cards";
import ThumbGallerySlider from "./components/ThumbGallerySlider";
export default function Home() {

  const isMobile = useIsMobile();
  useEffect(() => {
    console.log(ringsCollection1);

  }, [])
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
          <h1>Every piece is made from 925 Sterling Silver, designed in London and hallmarked at the Goldsmiths' Assay Office</h1>
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
              src="https://www.sergedenimes.com/cdn/shop/videos/c/vp/93170c1e79144e81b325ed9dbae4d7da/93170c1e79144e81b325ed9dbae4d7da.SD-480p-0.9Mbps-39770512.mp4?v=0"
              type="video/mp4"
            />
            <img
              src="https://www.sergedenimes.com/cdn/shop/files/preview_images/93170c1e79144e81b325ed9dbae4d7da.thumbnail.0000000000_1200x.jpg?v=1734372161"
              alt="Video fallback"
            />
          </video>
        </section>

        <ThumbGallerySlider />
      </main>
    </>
  );
}
