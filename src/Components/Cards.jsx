import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5 '>
    <div className='cardcontainer  h-[50vh] w-1/2'>
     <div className='relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center'>
        <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt=''/>
        <button className='absolute px-5 rounded-full py-1 border-2 left-10 bottom-10 '>&copy; 2019-2023</button>
     </div>
    </div>
    <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
     <div className='relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]'>
     <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' alt=''/>
        <button className='absolute px-3 rounded-full py-1 border-2 left-8 bottom-10 capitalize '>rating 5.0 on clutch</button>
     </div>
     <div className='relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]'>
     <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' alt=''/>
        <button className='absolute px-3 rounded-full py-1 border-2 left-8 bottom-10 capitalise '>Business</button>
     </div>

    </div>
    </div>
  )
}

export default Cards