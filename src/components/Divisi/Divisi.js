"use client";
import React from "react";
import styles from "./Divisi.module.css";
import Image from "next/image";
import { id } from "./[id]";
import Link from "next/link";

function Divisi() {
  return (
    <>
    <h1 className={styles.judul}>Divisi Kami</h1>
    <div className="flex gap-3">
    <div className={styles.slider}>
      {id.map(item => (
        <div className={styles.item} key={item.id}>
            <div className={styles.container}>
            <div className={styles.img}>
            <Image
              width={100}
              height={100}
              src={item.image}
              alt=""
            />
          </div>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Link href={item.url} className={styles.see} >See More</Link>
        </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

export default Divisi;