import React from "react";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

type CarouselProps = {
  numberOfElements: number;
  backgroundColor: string;
};

export const Carousel = ({
  numberOfElements,
  backgroundColor,
}: CarouselProps) => {
  const [data, setData] = React.useState<string[]>([]);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchImageData = async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization:
            "qHhG0qZ4LBNshRczM35xWEUYEj3M4UYHQIX6YOzRgYtzCtlThxXfTPLZ",
        },
      };
      let response = await fetch(
        `https://api.pexels.com/v1/search?query=aurora&page=1&per_page=${numberOfElements}`,
        options
      );
      const data = await response.json();
      console.log(data);

      const newData = data.photos.map((el: any) => {
        return { img: el.src.landscape, title: el.alt, text: el.photographer };
      });
      console.log(newData);
      setData([...newData]);
    };
    if (numberOfElements) {
      fetchImageData();
    }
  }, [numberOfElements]);

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        behavior: "smooth",
        left: scrollRef.current.clientWidth / 2,
      });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        behavior: "smooth",
        left: -scrollRef.current.clientWidth / 2,
      });
    }
  };

  return (
    <div
      className={styles["carouselWrapper"]}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <button
        onClick={handlePrev}
        className={`${styles.slideButtons} ${styles.prev}`}
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className={`${styles.slideButtons} ${styles.next}`}
      >
        &#8594;
      </button>

      <div
        className={styles["carousel"]}
        style={{ backgroundColor: `${backgroundColor}` }}
        ref={scrollRef}
      >
        {data.map((el: any, index) => (
          <div key={index} className={styles["itemWrapper"]}>
            <Image
              className={styles["images"]}
              src={el.img}
              alt={"image"}
              key={index}
              height={500}
              width={500}
            ></Image>
            <h1 className={styles["title"]}>{el.title}</h1>
            <p>Fotograf: {el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
