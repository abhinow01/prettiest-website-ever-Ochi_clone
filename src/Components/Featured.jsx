import React from 'react'
import {motion,useAnimation} from 'framer-motion'
const Featured = () => {
    const cards = [useAnimation(),useAnimation()];

    const handleHover = (index) =>{
   cards[index].start({y: "0"})
    }

  return (
    <div className='w-full py-10 '>
<div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
  <h1 className='text-7xl font-Neue_Montreal tracking-tight'>Featured Projects</h1>
</div>
<div className='px-20'>
<div className='cards w-full gap-10 flex mt-10 overflow-hidden'>    
<motion.div onHoverStart={()=>handleHover(0)} className='cardscontainer relative rounded-xl w-1/2 h-[75vh] '>
<h1 className='absolute text-[#CDEA68] overflow-hidden right-0 left-full -translate-x-1/2 -translate-y-1/2 top-1/2  font-Founders_Grotesk_X-Condensed text-8xl'>
  {"FYDE".split('').map((item,index)=>
  <motion.span initial={{y:"100%"}} animate={cards[0]} key={index}>{item}</motion.span>)}
</h1>
    <div className='w-full h-full rounded-xl overflow-hidden b'> 
    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
    </div>
</motion.div>
<div className='cardscontainer relative rounded-xl w-1/2 h-[75vh] '>
<h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2  font-Founders_Grotesk_X-Condensed text-8xl'>
  {"VISE".split('').map((item,index)=><span key={index}>{item}</span>)}
</h1>

    <div className='w-full h-full rounded-xl overflow-hidden'>
        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg' alt=" " />
        </div>
</div>
</div>
</div>
    </div>
  )
}

export default Featured