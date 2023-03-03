import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useEffect } from "react";
import { Carousel } from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  const [backgroundColor, setBackgroundColor] = React.useState("");
  const [numberOfElements, setNumberOfElements] = React.useState(4);
  const colors = [
    "#eeeeee",
    "#C6CBFF",
    "#C0B3D3",
    "#C7E9DB",
    "#81B3C5",
    "#265566",
  ];

  function handleNumberChange(event: any) {
    setNumberOfElements(event.target.value);
  }
  function handleColorChange(event: any) {
    setBackgroundColor(event.target.value);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" />
      </Head>

      <div className={styles["container"]}>
        <>
          <Carousel
            numberOfElements={numberOfElements}
            backgroundColor={backgroundColor}
          ></Carousel>
          <div>
            {colors.map((color) => (
              <button
                className={styles["colorButton"]}
                style={{
                  backgroundColor: `${color}`,
                }}
                key={color}
                onClick={() => setBackgroundColor(color)}
              ></button>
            ))}
          </div>
          <input
            className={styles["input"]}
            placeholder="antall elementer"
            value={numberOfElements}
            onChange={handleNumberChange}
          ></input>
          <input
            className={styles["input"]}
            value={backgroundColor}
            placeholder="bakgrunnsfarge"
            onChange={handleColorChange}
          ></input>
        </>

        <a
          style={{ paddingTop: "10rem", color: "#0e0e0e" }}
          href="https://www.pexels.com"
        >
          Photos provided by Pexels
        </a>
      </div>
    </>
  );
}
