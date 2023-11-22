'use client'
import { useState } from 'react';
import style from "@/components/Navbar/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className={`${style.container}`}>
        <div className={`${style.list}`}>
          <Link href="/">  
            <Image
              src="/image/MBC.png"
              width={250}
              height={250}
              alt="Logo"
            />
          </Link>
        </div>

        <div className={`${style.list}`}>
          <Link href="/">Beranda</Link>
          <Link href="/kegiatan">Kegiatan</Link>
          <Link href="/projek">Projek</Link>
          <div className={style.dropdown} onMouseLeave={closeDropdown}>
            <span onClick={toggleDropdown}>Tentang</span>
            {showDropdown && (
              <div className={style.dropdownContent}>
                <Link href="/tentang/subhalaman1">Sub Halaman 1</Link>
                <Link href="/tentang/subhalaman2">Sub Halaman 2</Link>
                <Link href="/tentang/subhalaman2">Sub Halaman 2</Link>
                <Link href="/tentang/subhalaman2">Sub Halaman 2</Link>
              </div>
            )}
          </div>
          <Link href="/lainnya">Lainnya</Link>
        </div>
      </div>
    </>
  );
}
