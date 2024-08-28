import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

import Nav from "./companet/nav";
import Section from "./companet/section";
import Section1 from "./companet/section1";
import Section2 from "./companet/section2";
import "./App.css";
import Section3 from "./companet/section3";
import Footer from "./companet/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
