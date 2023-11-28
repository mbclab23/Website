import Image from "next/image";
import "./globals.css";

import Divisi from "@/components/Divisi/Divisi";
import Visi from "@/components/VisiMisi/Visi";
import Sejarah from "@/components/Sejarah/Sejarah";
import Profile from "@/components/Profile/Profile";



export default function Home() {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
      <Profile/>
      <Divisi />
      <Visi />
      <Sejarah />
    </div>
    </>
  );
}