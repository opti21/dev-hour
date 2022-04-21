import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import redirect from "nextjs-redirect";
import { useEffect } from "react";
import splitbee from "@splitbee/web";
import ReactPlayer from "react-player/youtube";

export default function Home() {
  useEffect(() => {
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    });

    splitbee.track();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Hour Podcast - Home</title>
        <meta content="Dev Hour Podcast - Home" property="og:title" />

        <meta content="Dev Hour Podcast" property="og:site_name" />

        <meta
          content="http://i3.ytimg.com/vi/7gEbHsHXdn0/hqdefault.jpg"
          property="og:image"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="http://i3.ytimg.com/vi/7gEbHsHXdn0/hqdefault.jpg"
        />
      </Head>

      <div>
        <h1>Dev Hour Podcast</h1>
        <h1>DEVHOUR</h1>
        <h1>FIRST EPISODE!!!</h1>
        <h2>
          Website Approved by{" "}
          <a href="https://t3.gg">
            <u>t3.gg</u>
          </a>
        </h2>
        <ReactPlayer url="https://www.youtube.com/watch?v=7gEbHsHXdn0" />
        <Image
          src={"https://c.tenor.com/E3BS4gXTT6AAAAAC/deez-nuts.gif"}
          alt="DEEZ NUTS"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
