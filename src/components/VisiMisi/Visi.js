import React from "react";
import style from "@/components/VisiMisi/Visi.module.css";
const Visi = () => {
  return (
    <>
      <h1 className={style.judul}>Visi & Misi</h1>
      <div className={style.kotak}>
        <div className={style.item}>
          <h1 className={style.subJudul}>Visi</h1>
          <div className={style.desc}>
          Menjadi Laboratorium unggulan dalam pengembangan teknologi Multimedia
          Application, Big Data, dan Cybersecurity dengan mendorong eksplorasi
          dan merancang riset yang memberikan dampak positif dan mengikuti
          perkembangan teknologi masa kini serta menjadi lingkungan yang
          membentuk, mematangkan, dan mempersiapkan skill asisten MBC Laboratory
          agar dapat bersaing di Industri. -- Kawah Candradimuka
          </div>
        </div>
        <div className={style.item}>
          <h1 className={style.subJudul}>Misi</h1>
          <div className={style.desc}>
          <br/>1. Menjadi lingkungan yang mendukung pembelajaran dan penelitian jangka
          panjang.
          <br/>2. menciptakan lingkungan yang fokus pada pertumbuhan pribadi
          dan profesional serta mendukung career
          <br/>3. Menjadi pusat informasi
          Teknologi, Multimedia, dan Softskill yang berguna bagi mahasiswa
          <br/>
          <br/> “Work Life Balance bukan berarti melakukan sesuatu secara singkat namun efektif” 
          </div>
        </div>
      </div>
    </>
  );
};

export default Visi;
