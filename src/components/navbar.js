import style from "@/components/style/navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className={`${style.container}`}>
        <div className="m-auto">
        <Image
        src="/image/MBC.png"
        width={250}
        height={250}
        alt="Picture of the author"
    />
        </div>
        <div className={`${style.list}`}>
          <h1>Beranda</h1>
          <h1>Kegiatan</h1>
          <h1>projek</h1>
          <h1>Tentang</h1>
          <h1>Lainnya</h1>
        </div>
      </div>
    </>
  );
}
