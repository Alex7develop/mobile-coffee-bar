import Image from "next/image";
import styles from "./Gallery.module.css";

const images = [
  "/gallery/bar1.png",
  "/gallery/bar2.png",
  "/gallery/bar3.png",
  "/gallery/bar4.png",
  "/gallery/bar5.png",
  "/gallery/bar7.png",
];

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      {images.map((src, i) => (
        <div key={src} className={styles.galleryItem}>
          <Image src={src} alt={`bar image ${i+1}`} fill style={{objectFit:'cover'}}/>
        </div>
      ))}
    </div>
  );
}
