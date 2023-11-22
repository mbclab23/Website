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
          <Image width={40} height={40} src="/image/logo/ig.png"/>
          <Image width={40} height={40}  src="/image/logo/linkid.png"/>
        </div>
      </div>
    </>
  );
}
