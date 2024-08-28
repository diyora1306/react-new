import React from "react";
import Boy from "./img/boy.png";
import Stars from "./img/stars.png";

function section3() {
  return (
    <div>
      <div className="container">
        <div className="text text-center">
          <p className="my-3 font-extrabold text-fuchsia-700">Testimonial</p>
          <h1 className="text-3xl font-extrabold my-3 text-fuchsia-950">
            Gamer <span className="text-pink-800">Reviews</span>
          </h1>
        </div>
        <div className="flex">
          <div className="img">
            <img src={Boy} alt="" />
          </div>
          <div className="text">
            <img className="m-2	" src={Stars} alt="" />
            <div className="text1">
              <h1 className="text-fuchsia-950 font-extrabold m-2	">
                Gaming and Sports Template that is designed to <br /> build
                modern Online Game, Gaming News Portal, <br /> Gaming Online
                News Portal, and other News <br /> services websites and it is
                suitable for any kind of <br />
                small business activity.
              </h1>
              <p className=" font-extrabold m-2 text-pink-800">Dulal HD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default section3;
