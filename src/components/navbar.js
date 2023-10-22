import style from "@/components/style/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className={`${style.container}`}>
        <div className="m-auto">
          <Link href="/">  
        <Image
        src="/image/MBC.png"
        width={250}
        height={250}
        alt="Picture of the author"
        />
        </Link>
        
        </div>
        <div className={`${style.list}`}>
        <Link href="/kegiatan">Kegiatan</Link>
        <Link href="/projek">Projek</Link>
        <Link href="/tentang">Tentang</Link>
        <Link href="/lainnya">Lainnya</Link>
        </div>
      </div>
    </>
  );
}
