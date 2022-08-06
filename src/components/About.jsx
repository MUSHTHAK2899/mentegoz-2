import React from "react";
import { about } from "../data";
import { aboutList } from "../data";

const About = () => {
  const { title, title1, subtitle, image } = about;

  return (
    <section className="  w-full ">
      <div className="container mx-auto">
        <div className="flex flex-col p-5 lg:flex-row lg:gap-x-[100px]">
          {/* image */}
          <div className="flex  md:mt-28">
            <img className="h-[500px] w-full md:h-[600px] rounded-xl" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1  flex flex-col justify-end text-left p-3">
            <h2 className="title text-gray-600 ">{title1}</h2>
            <h2 className="title text-7xl text-teal-700 tracking-wide">
              {title}
            </h2>
            <p className="subtitle  text-gray-400 text-md leading-snug max-w-[650px] overflow-hidden">
              {subtitle}
            </p>
            <div className="flex justify-end md:mr-28 ">
              <button className=" bg-teal-600 px-7 py-2  text-white shadow-md shadow-teal-900 hover:scale-90 duration-500">
                Read More
              </button>
            </div>
          </div>
        </div>
        {/*list*/}
      
      </div>
    </section>
  );
};

export default About;
