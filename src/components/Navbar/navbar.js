'use client'
import style from "@/components/Navbar/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [showMenu, setShowMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setShowMenu(false); // Menutup menu utama ketika menu hamburger diklik
    setShowAboutMenu(false); // Menutup menu "Tentang" ketika menu hamburger diklik
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowAboutMenu(false); // Menutup menu "Tentang" ketika menu hamburger diklik
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleAboutClick = () => {
    setShowAboutMenu(!showAboutMenu);
  };

  return (
    <>
      <div className={`${style.container} ${showMenu ? style.responsive : ''}`}>
        <div className={style.image}>
          <Link href="/">  
            <Image
              src="/image/MBC.png"
              width={250}
              height={250}
              alt="Logo"
              className={style.Image}
            />
          </Link>
        </div>

        <div className={style.list}>
          <Link href="/">Beranda</Link>
          <Link href="/kegiatan">Kegiatan</Link>
          <Link href="/projek">Projek</Link>
          <Link href="/prestasi">Prestasi</Link>
          <div className={style.dropdown} onMouseLeave={closeMenu}>
            <span onClick={toggleMenu}>Tentang <i className="fas fa-caret-down"></i></span>
            {showMenu && (
              <div className={style.dropdownContent}>
                <Link href="/">Divisi</Link>
                <Link href="/anggota/pembina">Pembina</Link>
                <Link href="/anggota/asisten">Asisten</Link>
              </div>
            )}
          </div>
          <Link href="/lainnya">Lainnya</Link>
        </div>

        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-[20%] right-0 bottom-0 flex justify-center items-center h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[120%] right-0 bottom-0 flex justify-center items-center h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            {(!showAboutMenu || showMenu) && (
              <>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                  <Link href="/">Beranda</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                  <Link href="/kegiatan">Kegiatan</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                  <Link href="/projek">Projek</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                  <Link href="/prestasi">Prestasi</Link>
                </li>
              </>
            )}
            <li onClick={handleAboutClick} className='p-4 text-2xl hover:text-gray-500'>
              Tentang
            </li>
            {showAboutMenu && (
              <ul>

                <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                  <Link href="/anggota/pembina">Pembina</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                  <Link href="/anggota/asisten">Asisten</Link>
                </li>
                
              </ul>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
