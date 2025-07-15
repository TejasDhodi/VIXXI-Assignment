'use client'

import { menuItems } from '@/app/utils/menuItems'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState<boolean>(false)
    const [subMenuItems, setSubMenuItems] = useState("");

    return (
        <header>
            <nav className='top_navbar'>
                <div className="hamburger" onClick={() => setToggleHamburgerMenu(!toggleHamburgerMenu)}>
                    <Image
                        src="/images/Hamburger_icon.svg"
                        alt='Hamburger Menu'
                        width={20}
                        height={20}
                    />
                </div>
                <div className={`hamBurgerItems ${toggleHamburgerMenu ? "active" : ""}`}>
                    <button onClick={() => setToggleHamburgerMenu(!toggleHamburgerMenu)} className='close_btn'>close</button>
                    <div className="searchBar_container">
                        <input type="search" name="" id="searchBar" placeholder='SEARCH' />
                        <Image 
                            src="/images/Search_icon.svg"
                            alt='search icon'
                            width={25}
                            height={25}
                        />
                    </div>
                    <ul className="menuItems">
                        {
                            menuItems.map(({ title, content }, index) => {
                                return (
                                    <li className={`menuList ${content ? "hasContent" : ""}`} key={index}>
                                        <Link href="#" onClick={() => setSubMenuItems(title)}>
                                            {title}
                                            {content && <Image 
                                                src="/images/Plus_icon.svg"
                                                height={20}
                                                width={20}
                                                alt='Add Icon'
                                            />}
                                        </Link>
                                        {
                                            content &&
                                            <ul className={`content ${title === subMenuItems ? "active" : ""}`}>
                                                {
                                                    content.map((currElem, index) => <li key={index}><Link href="">{currElem}</Link></li>)
                                                }
                                            </ul>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Link href="/">
                    <Image
                        src="/images/Desktop_logo.svg"
                        alt='Desktop Logo'
                        width={188}
                        height={27}
                    />
                </Link>

                <div className="navRight">
                    <Link href="/">
                        <Image
                            src="/images/Search_icon.svg"
                            alt='Search Logo'
                            width={20}
                            height={20}
                        ></Image>
                    </Link>
                    <Link href="/">
                        <Image
                            src="/images/Shop_icon.svg"
                            alt='Shop Logo'
                            width={20}
                            height={20}
                        ></Image>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
