import { createGlobalStyle } from "styled-components";
import HandelGotDBol from "./fonts/HandelGotDBol.ttf";
import Montserrat from "./fonts/Montserrat.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "HandelGotDBol";
        src: local("HandelGotDBol"), url(${HandelGotDBol}), format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: local("Montserrat"), url(${Montserrat}), format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    :root {
        --primaryColor: #F26B35;
        --secondaryColor: #373435;
    }

    body {
        background-color: var(--secondaryColor);
        color: white;
        font-family: "Montserrat";
    }

    /* h2 {
        font-family: "HandelGotDBol";
        font-weight: lighter;
    } */
    
    ::-webkit-scrollbar { width: 7px; }

    ::-webkit-scrollbar-track {
        background-color: rgb(9, 14, 25);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--primaryColor);
        border-radius: 10px;
    }
`;

export default GlobalStyle;