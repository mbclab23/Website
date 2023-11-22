import React from 'react'
import Image from 'next/image'
import style from "@/components/Kontak/Kontak.module.css"
const Kontak = () => {
  return (
    <>
    <h1 className={style.judul}>Hubungi Kami</h1>
    <div className={style.container}>
        <div className={style.item}>
            <h1 className={style.subjudul}>Kunjungi Laboratorium kami di</h1>
            <h2>Telkom University,  TULT 10.04, Jl. Telekomunikasi. 1, Terusan Buahbatu - Bojongsoang, Telkom University, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257</h2>
        </div>
        <div className={style.item}>
            <h1 className={style.subjudul}>Ikuti Kami</h1>
            <div className={style.logo}>
          <Image width={40} height={40} src="/image/logo/ig.png"/>
          <Image width={40} height={40}  src="/image/logo/linkid.png"/>
          </div>
             
        </div>
    </div>
    </>
  )
}

export default Kontak