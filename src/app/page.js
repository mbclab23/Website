import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function Home() {

  return (
    <>
    <div style={{
       zIndex: -1,
       position: "fixed",
       width: "100vw",
       height: "100vw"
    }}>
    <Image src="/Lawrencium.png"
    alt="bgImage"
    layout="fill"
    objectFit="cover"
    >
    </Image>
    </div>
      
      <h1 className="text-center">Dashboard</h1>
    </>
  );
}
