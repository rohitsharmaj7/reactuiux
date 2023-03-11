import React from "react";
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../helper/containers';
import { Header } from "./containers";
import { Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer /> */}
  </div>
);

export default App;
