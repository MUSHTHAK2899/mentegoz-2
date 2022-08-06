import React from "react";
import { why } from "../data";

const Why = () => {
  return (
    <div className="container mx-auto p-5 mt-14 font-mono">
        <div className="tracking-wider">
        <h4 className="text-teal-500 text-xl">WHY US</h4>
          <h1 className="text-5xl max-w-[800px] ">Our Working Process To Help You Boost Your Business</h1>
        </div>
      <div className="grid  md:grid-cols-2 mt-20">
        <div className="flex flex-col gap-14">
        {
            why.map((item,index)=>{
                const {icon,title,subtitle}=item
                return(
                    <div key={index}>
                        <div className="flex items-center gap-x-5">
                        <h1>{icon}</h1>
                        <h1 className="text-2xl">{title}</h1>
                        </div>
                        <p className="mt-5 max-w-[500px]">{subtitle}</p>
                    </div>
                )
            })
        }
        </div>
        <div>
            <div className="mt-10 md:mt-0">
                <img className="md:h-[700px] h-[400px] w-[530px] rounded-lg " src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
