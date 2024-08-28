import React from "react";
import Gamix from "./img/gamix.png";
import Xat from "./img/xat.png";
import Telefon from "./img/telefon.png";
import Joy from "./img/joy.png";

function footer() {
  return (
    <div className="bg-purple-900 p-3.5		">
      <div className="container">
        <div className="flex">
          <div className="text">
            <img className="m-3.5	" src={Gamix} alt="" />
            <h1 className="m-3.5 font-extrabold text-white			">
              Gaming and Sports Template that is <br /> designed to build modern
              Online <br />
              Game, Gaming News Portal,News <br /> services websites and it is
              suitable for <br />
              any kind of small business activity.
            </h1>
          </div>
          <div className="text1">
            <ul>
              <h1 className="m-3.5 font-extrabold text-white">Company</h1>
              <li className="m-3.5 font-extrabold text-white">
                <a href="">Help Center</a>
              </li>
              <li className="m-3.5 font-extrabold text-white">
                <a href="">About</a>
              </li>
              <li className="m-3.5 font-extrabold text-white">
                <a href="">Blog</a>
              </li>
              <li className="m-3.5 font-extrabold text-white">
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="text1">
            <ul>
              <h1 className="m-3.5 font-extrabold text-white">Games & Cards</h1>
              <li className="m-3.5 font-extrabold text-white">
                <a href="">All</a>
              </li>
              <li className="m-3.5 font-extrabold text-white">
                <a href="">Actions Cards</a>
              </li>
              <li className="m-3.5 font-extrabold text-white">
                <a href="">Hero Games</a>
              </li>
              <li className="m-3.5 font-extrabold text-white">
                <a href="">Robots Games</a>
              </li>
            </ul>
          </div>
          <div className="text1">
            <ul>
              <h1 className="m-3.5 font-extrabold text-white">Contact us</h1>
              <li className="m-3.5 font-extrabold text-white flex	">
                <img src={Xat} alt="" />
                <a className="" href="">
                  contact@example.com
                </a>
              </li>
              <li className="m-3.5 font-extrabold text-white flex">
                <img src={Telefon} alt="" />
                <a className="mr-[50px]" href="">
                  +152 534-468-854
                </a>
              </li>
              <li className="m-3.5 font-extrabold text-white flex">
                <img src={Joy} alt="" />
                <a className="m-3.5" href="">
                  View on Google map
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
