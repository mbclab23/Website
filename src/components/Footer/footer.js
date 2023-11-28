import Image from 'next/image';
import style from '@/components/Footer/footer.module.css'
export default function Footer() {
  return (
    <>
      <div className={style.container}>
        <div>
          Copyright MBC Laboratory. All Right Reserved.
        </div>
        <div className={style.logo}>
          <Image width={30} height={30} src="/image/logo/ig.png"/>
          <Image width={30} height={30}  src="/image/logo/linkedin.png"/>
          <Image width={30} height={30}  src="/image/logo/Line.png"/>
        </div>
      </div>
    </>
  );
}
