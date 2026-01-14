import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerImgWrap}>
        <Image src="/gallery/bar6.webp" alt="Фирменный бар NEO" fill className={styles.footerImg} />
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerTitle}>Связаться с NEO</div>
        <a href="https://t.me/neo_coffee_experience" target="_blank" rel="noopener noreferrer">Telegram</a>
        <a href="mailto:info@neo-coffee.ru">info@neo-coffee.ru</a>
        <span>Москва и вся Россия</span>
      </div>
    </footer>
  );
}
