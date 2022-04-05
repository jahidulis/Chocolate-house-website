import React from "react";
import img from "./clipart4285116.png";

const About = () => {
  return (
    <div className="min-w-full">
      <div className="grid grid-cols-4 items-center">
        <img className="col-span-1" src={img} alt="" />
        <h4 className="col-span-3 text-5xl font-serif text-pink-400">
          All We Care About Is Your Baby's Comfort
        </h4>
      </div>
    </div>
  );
};

export default About;
