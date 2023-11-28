import React from "react";
import style from "@/components/Sejarah/Sejarah.module.css";
import Image from "next/image";
const Sejarah = () => {
  return (
    <>
      <h1 className={style.judul}>Sejarah</h1>
      <div className={style.kotak}>
        <div className={style.item}>
          <div>
            <h1 className={style.tahun}>2019</h1>
            <h1 className={style.tahun}>2020</h1>
            <h1 className={style.tahun}>
              <br />
            </h1>
            <h1 className={style.tahun}>2021</h1>
            <h1 className={style.tahun}>2022 - Seterusnya</h1>
          </div>
          <div className={style.img}>
            <Image
              width={60}
              height={60}
              src="/image/ilustration/garis.svg"
              alt="Illustration"
            />
            <Image
              width={60}
              height={60}
              src="/image/ilustration/bulet.svg"
              alt="Illustration"
              className={style.bulet}
            />
          </div>
          <div className={style.desc}>
            <div>
              <h1 className={style.subjudul}>MBC Laboratory Berdiri</h1>
              <div>
                MBC Laboratory didirikan di bawah naungan Kementerian Komunikasi
                dan Multimedia (KK NCM) dengan fokus pada tiga bidang utama:
                Cyber Security, Big Data, dan Multimedia.
              </div>
            </div>
            <div>
              <h1>Kolaborasi dan Integrasi Pengetahuan</h1>
              <div>
              MBC Laboratory menjadi wadah kolaboratif bagi peneliti, akademisi,
              dan profesional. Kolaborasi antar divisi meningkat, memungkinkan
              integrasi pengetahuan dan keahlian dalam pengembangan solusi
              lintas disiplin.
              </div>
            </div>
            <div>
              <h1>Pengembangan Seluruh Divisi</h1>
              <div>
              MBC Laboratory memantapkan seluruh divisi, melakukan studi
              mendalam tentang masing-masing bidang yang ditekuni
              </div>
            </div>
            <div>
              <h1>Pusat Penelitian Unggulan</h1>
              <div>
              MBC Laboratory berkembang menjadi pusat penelitian unggulan yang
              memimpin dalam pemahaman dan penanganan tantangan kompleks dalam
              Cyber Security, Big Data, dan Multimedia.
              </div>
            </div>
            <div>
              <h1>Inovasi dan Kontribusi pada Era Digital</h1>
              <div>
              MBC Laboratory terus berkomitmen untuk menyediakan solusi inovatif
              melalui riset dan pengembangan. Garda terdepan dalam memberikan
              kontribusi pada perkembangan teknologi dan keamanan di era digital
              yang terus berkembang.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sejarah;
