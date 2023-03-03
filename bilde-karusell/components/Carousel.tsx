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
  const [images, setImages] = React.useState<string[]>([]);
  const [title, setTitles] = React.useState<string[]>([]);
  const [text, setText] = React.useState<string[]>([]);
  const [counter, setCounter] = React.useState<number>(0);
  const [active, setActive] = React.useState(0);

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
        `https://api.pexels.com/v1/search?query=ocean&page=1&per_page=${numberOfElements}`,
        options
      );
      const data = await response.json();
      console.log(data);

      const newImages = data.photos.map((el: any) => el.src.landscape);
      setImages([...newImages]);
      const newTitles = data.photos.map((el: any) => el.alt);
      setTitles([...newTitles]);
      const newText = data.photos.map((el: any) => el.photographer);
      setText([...newText]);
    };

    fetchImageData();
  }, [numberOfElements]);

  useEffect(() => {
    setActive(counter);
  }, [counter]);

  const NextSlide = () => {
    counter < images.length - 1 ? setCounter(counter + 1) : setCounter(0);
  };

  const PreviousSlide = () => {
    counter == 0 ? setCounter(images.length - 1) : setCounter(counter - 1);
  };

  return (
    <>
      <div
        className={styles["carousel"]}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <div>
          <p>
            {counter + 1}/{images.length}
          </p>
        </div>
        <>
          <button
            onClick={PreviousSlide}
            className={`${styles.slideButtons} ${styles.prev}`}
          >
            forrige
          </button>
          <button
            className={`${styles.slideButtons} ${styles.next}`}
            onClick={NextSlide}
          >
            neste
          </button>
        </>
        <div className={counter == active ? styles["slide"] : styles["hidden"]}>
          <>
            <Image
              src={images[counter]}
              alt="image"
              className={styles["images"]}
              width={500}
              height={500}
            ></Image>
            <div>
              <h1 className={styles["h1"]}>{title[counter]}</h1>
              <p>Fotograf: {text[counter]}</p>
            </div>
          </>
        </div>
      </div>
    </>
  );
};
