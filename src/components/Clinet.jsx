import React from 'react'
import { clinet } from '../data'

const Clinet = () => {
  return (
    <div className='container mx-auto p-5 mt-14 font-mono'>
        <div className='grid md:grid-cols-2'>
            <div className='tracking-wider'>
                <h1 className='text-5xl text-teal-400'>Our clients</h1>
                <h2 className='text-7xl md:mt-[150px] mt-10'>Pleasure to work with</h2>
            </div>
            <div className='grid grid-cols-2 gap-10 md:mt-20 mt-10 '>
                {
                    clinet.map((item,index)=>{
                        const {image}=item
                        return(
                            <div key={index} className='bg-white md:p-5 p-3 rounded-lg hover:scale-90 duration-500'>
                                <img src={image} alt="" />
                            </div>
                        )
                    })
                }
            </div>


        </div>
    </div>
  )
}

export default Clinet