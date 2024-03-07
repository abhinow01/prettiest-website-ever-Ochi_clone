import React from 'react'    
import { FaArrowUp } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>  
       {["We Create","Eye Opening","Presentations"].map((item,i)=>(
       <div className="masker" key={i}>
       <h1 className="uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-medium ">{item}</h1>
       </div>
       ))}               
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>
         {["For Public and private companies","From the first pitch to IPO"].map((element,i)=>(
            <p className='text-md font-light tracking-tight leading-none' key={i}>{element}</p>
         ))}
         <div className='start flex flex-row items-center gap-5 '>
            <div className='px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full '> start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full'>
                <span className='rotate-[45deg]'><FaArrowUp /></span>
                </div>
                
         </div>
        </div>
        
    </div>
  )
}

export default LandingPage

// font-['Founders_Grotesk']