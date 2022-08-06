import React from 'react'

// import data
import { hero } from '../data';
// import components
import Stats from './Stats';


const Hero = () => {
    const { title, subtitle, buttonText } = hero;
  return (
    <section id="hero" className='h-[850px] w-full bg-hero bg-right bg-black  bg-no-repeat text-white pt-[225px] pb-[254px]
    relative mb-12 lg:bg-center lg:mb-28'>
        <div className='container mx-auto text-center'>
                  {/* title */}
        <h1 className='text-2xl lg:text-[64px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold mb-[30px]'>
          <span className='text-teal-500'>Why Wait ? </span>{title}
        </h1>
         {/* subtitle */}
         <h1 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>{subtitle}</h1>
         {/* button */}
         <button className='bg-slate-300/20 text-teal-500 hover:bg-slate-300/40 px-10 py-2 mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px]'>{buttonText}</button>
         {/* stats */}
         <div className='-top-[70px] relative'>
          <Stats />
        </div>
        </div>
    </section>
  )
}

export default Hero