/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

const Background = () => {
  return (
    <div>
        <> 
        <div  className='fixed w-full h-screen z-[2]'>
        <div className=' absolute top-[10%] w-full py-10  flex justify-center text-xl text-zinc-500  bg-zinc-800'>Documents</div>
        <h1 className=' absolute left-1/2 top-1/2  -translate-x-[50%]  -translate-y-[50%] text-[13vw] leading-none tracking-tighter text-zinc-900 font-semibold' > Docs.</h1> 
        </div>
        </>
    </div>
  )
}

export default Background