// import '../styles/styles.css';
// import '../styles/global.css';
import Home from '.'

function MyApp({ Component, pageProps }) {
  return <div>
    {/* <Home/> */}
    <Component {...pageProps} />
  </div>
}

export default MyApp;