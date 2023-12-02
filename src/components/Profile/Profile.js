import React from "react";
import style from "@/components/Profile/Profile.module.css"
import Image from "next/image";
const Profile = () => {
  return (
    <>
      <h1 className={style.judul}>Profil</h1>
      <div className={style.container}>
        <div className={style.logo}>
        <Image width={500} height={500} src="/image/profile/NCM.png" />
          <Image width={500} height={500} src="/image/profile/MBC.png" />
        </div>
        <div className={style.isi}>
          MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber
          Security Laboratory, merupakan salah satu entitas penelitian yang
          beroperasi di bawah Kementerian Komunikasi dan Multimedia (KK NCM).
          Fokus utama laboratorium ini adalah mempelajari dan mengembangkan
          pengetahuan di bidang Cyber Security, Big Data, dan Multimedia.
          <br/>
          <br/>
          Didirikan pada tanggal 4 Oktober 2019, MBC Laboratory telah menjadi
          pusat penelitian yang berdedikasi untuk memahami, mengatasi, dan
          mengembangkan solusi terkini dalam tiga bidang utamanya.
        </div>
      </div>
    </>
  );
};

export default Profile;
