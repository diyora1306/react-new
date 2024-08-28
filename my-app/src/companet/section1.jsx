import React from "react";
import Photo from "./img/photo.png";

function section1() {
  return (
    <div>
      <div className="container">
        <div className="flex">
          <div className="img">
            <img src={Photo} alt="" />
          </div>
          <div className="text p-14">
            <p className="my-3 font-extrabold text-fuchsia-700">
              About Robot Games
            </p>
            <h1 className="text-3xl font-extrabold my-3 text-fuchsia-950		">
              You Robots is an Interactive <br />
              <span className="text-pink-800	">Card Games</span> <br />
            </h1>
            <p className="my-3  text-fuchsia-700">
              Gaming and Sports Template that is designed to build modern <br />
              Online Game, Gaming News Portal, Gaming Online News Portal, and
              other News <br /> services websites and it is suitable for <br />
              any kind of small business activity.
            </p>
            <button className="font-extrabold text-white bg-pink-900 px-11	text-base	rounded-md				">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default section1;
