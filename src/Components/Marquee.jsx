import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl text-white bg-[#FF3633]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 gap-10 overflow-hidden flex whitespace-nowrap '>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='marquee-item'
        >
          <h1 className='text-[22vw] leading-none font-Founders_Grotesk_X-Condensed font-semibold uppercase pt-10 pr-10 mb-4'>we are ochi</h1>
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='marquee-item'
        >
          <h1 className='text-[22vw] leading-none font-Founders_Grotesk_X-Condensed font-semibold uppercase pt-10 pr-10 mb-4'>we are ochi</h1>
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='marquee-item'
        >
          <h1 className='text-[22vw] leading-none font-Founders_Grotesk_X-Condensed font-semibold uppercase pt-10 pr-10 mb-4'>we are ochi</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
