import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.css";

import { Main } from "./Main";
import { Header } from "./Header";
import { Footer } from "./Footer";
// JSX - Javascript - XML
ReactDOM.render(
  <div>
    
    <Header/>
    <Main/>
    <Footer/>
  </div>,
  document.getElementById("root")
);
