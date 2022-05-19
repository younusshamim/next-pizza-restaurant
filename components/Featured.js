import styles from "../styles/Featured.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "right") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("left")}
      >
        <Image
          src="/img/arrowl.png"
          layout="fill"
          objectFit="contain"
          alt="arrow left"
        />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} layout="fill" objectFit="contain" alt="featured" />
          </div>
        ))}
      </div>

      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image
          src="/img/arrowr.png"
          layout="fill"
          objectFit="contain"
          alt="arrow right"
          onClick={() => handleArrow("right")}
        />
      </div>
    </div>
  );
};

export default Featured;
