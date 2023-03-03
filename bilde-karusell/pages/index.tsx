import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useEffect } from "react";
import { Carousel } from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  const [backgroundColor, setBackgroundColor] = React.useState("");
  const [numberOfElements, setNumberOfElements] = React.useState(4);
  const colors = ["#ECF2FF", "#3E54AC", "#655DBB", "#BFACE2"];

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <a href="https://www.pexels.com">Photos provided by Pexels</a>
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
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const options = {
//     method: "GET",
//     headers: {
//       Authorization: "qHhG0qZ4LBNshRczM35xWEUYEj3M4UYHQIX6YOzRgYtzCtlThxXfTPLZ",
//     },
//   };
//   let response = await fetch(
//     "https://api.pexels.com/v1/search?query=travel&per_page=5",
//     options
//   );
//   let data = await response.json();
//   return { props: { data } };
// }
