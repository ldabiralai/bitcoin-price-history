import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";

import App from "./App";

const globalStyles = css`
  * {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1.25;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  body {
    margin: 0;
    padding: 0 6px;
    background: #ebf0f6;
  }
`;

ReactDOM.render(
  <>
    <Global styles={globalStyles} />
    <App />
  </>,
  document.getElementById("root")
);
