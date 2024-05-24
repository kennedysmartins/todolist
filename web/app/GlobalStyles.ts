"use client"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
    font-size: 62.5%;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html {
    min-height: 100vh;
    }

    body {
    background: linear-gradient(to bottom right, #f8f8ff, #aaaacd);
    color: #5f5e72;
    -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    button,
    textarea {
    font-family: "Roboto", sans-serif;
    outline: none;
    font-size: 1.6rem;
    }

    a {
    text-decoration: none;
    }

    button,
    a {
    cursor: pointer;
    transition: filter 0.2s;
    }

    button:hover,
    a:hover {
    filter: brightness(0.9);
    }
`;

export default GlobalStyle;
