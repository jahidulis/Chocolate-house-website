import React from "react";
import img from "./Freepngdownload-Transparent.png";

const About = () => {
  return (
    <div className="min-w-full">
      <div className="grid grid-cols-4 items-center">
        <img className="col-span-1" src={img} alt="" />
        <h4 className="col-span-3 text-5xl font-serif text-amber-900">
          All We Care About Is Your Taste
        </h4>
      </div>
    </div>
  );
};

export default About;
