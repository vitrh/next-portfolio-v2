import { createGlobalStyle } from "styled-components";
import GlobalStyle from "../theme/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
