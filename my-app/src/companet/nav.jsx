import React from "react";
import Logo from "./img/logo.png";

function nav() {
  return (
    <div className="max-[1140px]:p-8">
      <div className="container">
        <div className="flex">
          <div className="img">
            <img src={Logo} alt="" />
          </div>
          <div className="text max-[1140px]:hidden">
            <a className="m-2.5 font-extrabold text-fuchsia-700			" href="">
              Home
            </a>
            <a className="m-2.5	font-extrabold text-fuchsia-700		" href="">
              Games
            </a>
            <a className="m-2.5	font-extrabold text-fuchsia-700		" href="">
              About
            </a>
            <a className="m-2.5	font-extrabold text-fuchsia-700		" href="">
              Contact
            </a>
          </div>
          <div className="btnn">
            <button className="font-extrabold text-white bg-pink-900 px-11	text-base	rounded-md				">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default nav;
