// import Head from "next/head";
import styles from "./styles/Contents.module.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_bg}>
        <div className={styles.home_bg_wrap}>
          <Image
            className={styles.home_img}
            src="/images/tasting-img1540w.jpg"
            alt="テイスティング中の画像"
            width={1540}
            height={1027}
            priority
          />
        </div>
      </div>
      <nav className={styles.home_nav}>
        <h1 className={styles.header_title_txt}>
          <span>Tasting Note</span>
        </h1>
        <ul className={styles.home_nav_list}>
          <li className={styles.home_nav_item}>
            <button type="button" className={styles.home_start_btn}>
              <Link href={"/pages/select"} scroll={false} passHref>
                START
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Home;
