import { createGlobalStyle } from "styled-components";
import * as color from "./GlobalColor";
import * as typeface from "./GlobalFont";

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body{
    padding: 0;
    margin: 0;
    font-family: ${typeface.poppins};
    overflow-x: hidden;
    z-index: 0;
    font-weight: ${typeface.$medium};
    background-color: ${color.$black};
  

    /* ::-webkit-scrollbar{
      display: none;
    } */
    h1,h2,h3,h4,h5,h6, p {
      margin: 0;
    }

    a, a:visited, a:hover {
    cursor: pointer;
  
    text-decoration: none;
   
    } 
  }
`;

export default GlobalStyle;
