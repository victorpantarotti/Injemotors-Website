import { createGlobalStyle } from "styled-components";
import HandelGotDBol from "./fonts/HandelGotDBol.ttf";
import Montserrat from "./fonts/Montserrat.ttf";

import "./normalize.css";

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
        background-color: black;
        color: white;
        font-family: "Montserrat";
    }
`;

export default GlobalStyle;