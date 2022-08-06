import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { service } from "../data";

const Services = () => {
  return (
    <div className="container mx-auto p-5 mt-10 font-mono">
      <div className="text-left">
        <h1 className="text-5xl font-semibold text-teal-500">OUR SERVICES</h1>
        <h1 className="text-2xl mt-2">Web designing and development</h1>
      </div>

      <div className="grid md:grid-cols-2 mt-3">
       <div className="">
        <p className="mt-16 max-w-[500px] text-gray-400">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.Pellen tesque libero ut justo, ultrices in ligula.</p>
       <p className="mt-10 max-w-[500px] text-gray-400">Website development is the most important aspect for most businesses or organizations. We at Mentegoz, design Websites/ E-commerce platforms after a complete analysis of your business pattern and codes accordingly. We provide web design and development along with a package of SEO (Search engine optimization) for enhanced business growth. We work cordially with you to enhance user experience which supports your business development by expanding your audience worldwide.</p>
       <p className="mt-10 max-w-[500px] text-gray-400">Website development is the most important aspect for most businesses or organizations. We at Mentegoz, design Websites/ E-commerce platforms after a complete analysis of your business pattern and codes accordingly. We provide web design and development along with a package of SEO (Search engine optimization) for enhanced business growth. </p>
       <div className="flex items-center w-[180px] gap-x-2 mt-7 text-lg bg-teal-600 justify-center py-3 hover:bg-teal-900 hover:scale-90 duration-300">
       <button className="">Read More</button>
       <FaArrowRight className="text-white" size={15}/>
       </div>
       </div>
       <div className="md:mt-44 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {
                service.map((item)=>{
                        const {icon,title,subtitle}=item;
                        return(
                            <div key={title}>
                                <div className="flex max-w-full  flex-col gap-y-4 bg-teal-700 p-7 rounded-md tracking-wide hover:bg-teal-900 hover:-translate-y-5 duration-300">
                                    <h1>{icon}</h1>
                                    <h1 className="font-bold text-xl">{title}</h1>
                                    <p className="text-gray-300">{subtitle}</p>
                                </div>
                                
                            </div>
                        )
                })
            }
        </div>
       </div>
      </div>
    </div>
  );
};

export default Services;
