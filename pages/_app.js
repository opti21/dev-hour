import PlausibleProvider from "next-plausible";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="devhour.live">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
