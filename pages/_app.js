// import '../styles/styles.css';
// import '../styles/global.css';
import Head from 'next/head';
import Home from '.'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>N!gga</title>
        <meta name="🤓" content="I take photos🤓" />
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