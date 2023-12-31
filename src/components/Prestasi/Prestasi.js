"use client";
import React from "react";
import styles from "./Prestasi.module.css";
import Image from "next/image";
import { id } from "./[id]";
import Link from "next/link";

function Prestasi() {
  return (
    <>
    <h1 className={styles.judul}>Prestasi Kami</h1>
    <div className="flex gap-3">
    <div className={styles.slider}>
      {id.map(item => (
        <div className={styles.item} key={item.id}>
            <div className={styles.container}>
            <div className={styles.img}>
            <Image
              width={256}
              height={256}
              src={item.image}
              alt=""
            />
          </div>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Link href={item.url} className={styles.bottompost}>See More</Link>
        </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

export default Prestasi