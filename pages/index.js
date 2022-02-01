import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import redirect from "nextjs-redirect"

const Redirect = redirect("https://youtu.be/4v8ek9TEeOU?t=41")

export default function Home() {
  return (
    <Redirect>
    <div className={styles.container}>
      <Head>
        <title>Dev Hour Podcast - Home</title>
        <meta content="Dev Hour Podcast - Home" property="og:title" />

        <meta content="Dev Hour Podcast" property="og:site_name" />

        <meta
          content="https://cdn.discordapp.com/attachments/806262681920602143/937883694788657222/Dev_hour.jpg"
          property="og:image"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div>
        <h1>Dev Hour Podcast</h1>
      </div>
    </div>
    </Redirect>
  );
}
