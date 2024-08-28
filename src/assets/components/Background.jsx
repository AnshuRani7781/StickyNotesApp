/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import image from '../image.png';

const Background = () => {
  const svgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(svgRef.current, {
      duration: 2,
      scale: 0.5,
      opacity: 0,
      ease: 'power2.inOut',
      transformOrigin: 'center',
    })
      .fromTo(
        textRef.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          duration: 1,
          opacity: 1,
          scale: 1,
          ease: 'power2.inOut',
          transformOrigin: 'center',
        },
        '-=0.5'
      );  
      tl.set({}, {}, '+=2');
  }, []); 

  return (
    <div className="fixed w-full h-screen z-[2]">
      <div className="absolute top-[10%] w-full py-10 flex justify-center text-xl text-zinc-500 bg-zinc-800">
        Capture thoughts, stay organized—your Sticky Notes companion.
      </div>
      <img
        ref={svgRef}
        src={image}
        alt="SVG Transition"
        className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"
      />
      <h1
        ref={textRef}
        className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] leading-none tracking-tighter text-zinc-900 font-semibold">
        Sticky Notes.
      </h1>
    </div>
  );
};

export default Background;
