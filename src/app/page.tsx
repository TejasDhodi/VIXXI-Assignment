'use client'
import CommonBg from "./components/CommonBg";
import { useEffect } from "react";
import useIsMobile from "./hook/UseIsMobile";
import heroData from '@/app/data/heroData.json'
import ringsCollection1 from '@/app/data/ringsCollection1.json'
import Cards from "./components/Cards";
export default function Home() {

  const isMobile = useIsMobile(); 
  useEffect(() => {
    console.log(ringsCollection1);
    
  }, [])
  return (
    <>
      <main>
        <CommonBg title={heroData.title} image={isMobile ? heroData.imageM : heroData.imageD} link={heroData.link} id="heroSection"/>
        <section className="silverRingCollection1">
          {
            ringsCollection1.map(({image1, image2, price, title}, index) => {
              return <Cards image1={image1} image2={image2} price={price} title={title} key={index}/>
            })
          }
        </section>
      </main>
    </>
  );
}
