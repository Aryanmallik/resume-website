import '../styles/global.css'; 
import { TitleProvider } from '../contexts/TitleContext'; 

function MyApp({ Component, pageProps }) {
  return (
    <TitleProvider>
      <Component {...pageProps} />
    </TitleProvider>
  );
}

export default MyApp;

