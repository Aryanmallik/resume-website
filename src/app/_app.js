// import '../styles/styles.css';
// import '../styles/global.css';
import Head from "next/head";
import Home from "./page";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/public/images/favicon.ico" />
      </Head>
      <div className="app-container">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
