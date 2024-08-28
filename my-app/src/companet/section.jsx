import React from "react";
import Rasm from "./img/rasm.png";

function section() {
  return (
    <div>
      <div className="container">
        <div className="flex">
          <div className="text p-14">
            <p className="my-3 font-extrabold text-fuchsia-700">
              Game Tournament Here
            </p>
            <h1 className="text-3xl font-extrabold my-3 text-fuchsia-950		">
              New <span className="text-pink-800	">Games</span> <br /> That You
            </h1>
            <p className="my-3  text-fuchsia-700">
              Gaming and Sports Template that is designed to build modern <br />
              Online Game, Gaming News Portal, Gaming Online News Portal, and
              other News <br /> services websites and it is suitable for <br />
              any kind of small business activity.
            </p>
            <button className="font-extrabold text-white bg-pink-900 px-11	text-base	rounded-md				">
              Get Started for Free
            </button>
          </div>
          <div className="img max-[1140px]:w-full">
            <img src={Rasm} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default section;
