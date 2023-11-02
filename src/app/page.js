import Image from "next/image";
import "./globals.css";
import Hero from "@/components/Hero/Hero";
import Divisi from "@/components/Divisi/Divisi";
import Visi from "@/components/VisiMisi/Visi";

export default function Home() {

  return (
    <>
   <Hero/>
   <Divisi/>
   <Visi/>
    </>
  );
}
