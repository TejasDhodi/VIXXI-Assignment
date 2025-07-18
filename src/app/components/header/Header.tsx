'use client'
import useIsMobile from '@/app/hook/UseIsMobile';
// import { menuItems } from '@/app/utils/menuItems';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import menuItems from '@/app/data/menuItems.json';

const Header = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState<boolean>(false);
  const [addBg, setAddBg] = useState(false);
  const [showLastNav, setShowLastNav] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const lastScrollY = useRef(0);

  const handleDropdownToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const isMobile = useIsMobile();

  const getScroll = () => {
    const top = window.scrollY;
    console.log({top});
    
    if (top === 0) {
      setAddBg(false);
      setShowLastNav(false);
      lastScrollY.current = 0;
      return;
    }
  
    if (top >= 100 && !addBg) {
      setAddBg(true);
    } else if (top < 100) {
      setAddBg(false);
    }
  
    if (top > lastScrollY.current && top > 100) {
      setShowLastNav(false);
    } else {
      setShowLastNav(true);
    }

    lastScrollY.current = top;
  }

  useEffect(() => {
    window.addEventListener("scroll", getScroll);
    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  return (
    <header className={addBg ? "showBg" : ""} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className="topHead">
        <p>AW25 Modern Rodeo - Now Live</p>
      </div>
      <nav className="top_navbar">
        <div className="hamburger" onClick={() => setToggleHamburgerMenu(!toggleHamburgerMenu)}>
          <Image
            src={`/images/Hamburger_icon${addBg ? "-dark" : ""}.svg`}
            alt="Hamburger Menu"
            width={20}
            height={20}
          />
        </div>

        <div className={`hamBurgerItems ${toggleHamburgerMenu ? 'active' : ''}`}>
          <button
            onClick={() => setToggleHamburgerMenu(!toggleHamburgerMenu)}
            className="close_btn"
          >
            Close
          </button>

          <div className="searchBar_container">
            <input type="search" id="searchBar" placeholder="SEARCH" />
            <Image src="/images/Search_icon-dark.svg" alt="search icon" width={25} height={25} />
          </div>

          <ul className="menuItems">
            {menuItems.map(({ title, content }, index) => (
              <li className={`menuList ${content ? 'hasContent' : ''}`} key={index}>
                <Link href="#" onClick={() => handleDropdownToggle(index)}>
                  {title}
                  {content && (
                    <Image
                      src="/images/Plus_icon.svg"
                      height={20}
                      width={15}
                      alt="Add Icon"
                    />
                  )}
                </Link>

                {content && (
                  <ul className={`content ${activeIndex === index ? 'active' : ''}`}>
                    {content.map((currElem, subIndex) => (
                      <li key={subIndex}>
                        <Link href="#">{currElem}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Link href="/">
          <Image src={`/images/${isMobile ? "Mobile" : "Desktop"}_logo${addBg ? "-dark" : ""}.svg`} alt="Desktop Logo" width={188} height={27} className={`brandLogo ${addBg ? "changeColor" : ""}`}/>
        </Link>

        <div className="navRight">
          <Link href="/">
            <Image
              src={`/images/Search_icon${addBg ? "-dark" : ""}.svg`}
              alt="Search Logo"
              width={25}
              height={25}
            />
          </Link>
          <Link href="/">
            <Image
              src={`/images/Shop_icon${addBg ? "-dark" : ""}.svg`}
              alt="Shop Logo"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </nav>
      <ul className={`bottom_navbar ${(showLastNav || isHover) ? 'show' : 'hide'}`}>
        <li><Link href="" className={addBg ? "dark" : "light"}>Shop All</Link></li>
        <li><Link href="" className={addBg ? "dark" : "light"}>New In</Link></li>
        <li><Link href="" className={addBg ? "dark" : "light"}>Best Sellers</Link></li>
        <li><Link href="" className={addBg ? "dark" : "light"}>Shop Gold</Link></li>
        <li><Link href="" className={addBg ? "dark" : "light"}>Shop Silver</Link></li>
        <li><Link href="" className={addBg ? "dark" : "light"}>PERL</Link></li>
        <li><Link href="" className={addBg ? "dark" : "light"}>Modern Rodeo</Link></li>
      </ul>
    </header>
  );
};

export default Header;
