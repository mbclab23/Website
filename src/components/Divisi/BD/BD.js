import { id } from "./[id]";
import styles from "../BD/BD.module.css";
import Link from "next/link";
import Image from "next/image";

function BD() {
  return (
    <>
    <h1 className={styles.judul}>BIG DATA</h1>
    <div className={styles.container}>
        <div className={styles.gambar}>
        <Image width={3000} height={1000} src="/image/kosong.png" />
            {/* <h1 className={styles.subjudul}>BIGDATA</h1><br /><br />
            <h2>bla bla bla bla bla bla bla</h2> */}
        </div>
        <div className={styles.item2}>
            <h1 className={styles.subjudul}> BIG DATA</h1>
            <div className={styles.isi}>
          </div>
          <h2>Big data adalah kumpulan data yang sangat besar dan kompleks yang terdiri dari data terstruktur, semi-terstruktur, dan tidak terstruktur. Big data memiliki beberapa karakteristik, yaitu volume, kecepatan, dan variasi.</h2>
         
        </div>

      {/* {id.map(item => (
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
      ))} */}
    </div>
    </>
  );
}

export default BD;