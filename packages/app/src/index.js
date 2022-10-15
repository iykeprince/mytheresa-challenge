import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "@mytheresa/scss/lib/global.css"

ReactDOM.render(<App />, document.querySelector("#root"))
// ReactDOM.hydrate(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.documentElement
// );