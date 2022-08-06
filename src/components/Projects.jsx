import React from "react";
import { project } from "../data";

const Projects = () => {
  return (
    <div className="container mx-auto p-5 mt-14 font-mono">
      <div className="tracking-wide">
        <h4 className="text-teal-400">OUR PROJECTS</h4>
        <h1 className="text-5xl max-w-[600px] mt-2 ">Take A Look At Our Latest Projects</h1>
      </div>
         <div className="grid grid-cols-1 md:grid-cols-2 mt-20 pb-10 gap-10 cursor-pointer">
          {
              project.map((item)=>{
                const {title,image,subtitle}=item;
                return (
                  <div className="text-white relative" key={title}>
               <div className="group ">
                <div className="absolute top-0 bg-black/30  md:w-[600px] h-[250px] min-w-[373px] md:h-[400px] rounded-md"></div>
               <img className="group-hover:scale-90 duration-500 rounded-md" src={image} alt={title} />
               </div>
              <div className="absolute top-[150px] md:top-[250px] left-[80px]  p-7 rounded-md 
              bg-slate-200/20 text-black/90 hover:bg-slate-300/40 px-10 py-2 backdrop-blur-md tracking-wider">
              <h1 className="md:text-3xl" >{title}</h1>
               <p className="">{subtitle}</p>
              </div>
                </div>
                )
              })
          }
         </div>
    </div>
  );
};

export default Projects;
