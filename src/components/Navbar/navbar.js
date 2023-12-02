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
              className={style.Image}
            />
          </Link>
        </div>

        <div className={`${style.list}`}>
          <Link href="/">Beranda</Link>
          <Link href="/kegiatan">Kegiatan</Link>
          <Link href="/projek">Projek</Link>
          <Link href="/prestasi">Prestasi</Link>
          <div className={style.dropdown} onMouseLeave={closeDropdown}>
            <span onClick={toggleDropdown}>Tentang <i className="fas fa-caret-down"></i></span>
            {showDropdown && (
              <div className={style.dropdownContent}>
                <Link href="/">Divisi</Link>
                <Link href="/anggota/pembina">Pembina</Link>
                <Link href="/anggota/asisten">Asisten</Link>
              </div>
            )}
          </div>
          <Link href="/lainnya">Lainnya</Link>
        </div>
      </div>
    </>
  );
}
