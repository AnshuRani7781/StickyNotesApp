/* eslint-disable no-unused-vars */
import React, { useState, useRef,useEffect } from 'react';
import Card from './Card';
import { TiDocumentAdd } from "react-icons/ti";
import { motion } from "framer-motion";
import AddCardForm from './AddCardForm';
import gsap from 'gsap';
const Foreground = () => { 
  const ref = useRef(null);

  useEffect(() => {
    // Delay the start of this animation to match the end of the Background animation
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        duration: 1,
        opacity: 1,
        ease: 'power2.inOut',
        delay: 2, // Same as the delay used in the Background animation
      }
    );
  }, []);
  const [data, setData] = useState([
    {
      desc: "SAMPLE TEXTS ",
      close: true, 
      date: new Date().toLocaleDateString(),
      tag: { isOpen: true, tagTitle: "TITLE", tagColor: "red" }
    },
  ]);

  const [formVisible, setFormVisible] = useState(false);

  const handleAddCard = (newCard) => {
    setData([...data, newCard]);
    setFormVisible(false);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const handleToggleForm = () => {
    setFormVisible(!formVisible);
  };
  const handleRemoveCard = (index) => {
    const cardToRemove = ref.current.children[index];

    // Trigger the exit animation using gsap.fromTo
    gsap.fromTo(
        cardToRemove,
        { opacity: 1, x: 0 }, // Initial state
        { 
          duration: 0.6,
          opacity: 0,
          scale: .8,
          x: -100,
          ease: 'back.in(1.7)',
            onComplete: () => {
                // Remove the card from the state after the animation completes
                setData(data.filter((_, i) => i !== index));
            }
        }
    );
};

  return (
    <div  ref={ref} className='fixed top-0 left-0 w-full h-screen bg-gray-200/20 z-[3] flex gap-7 flex-wrap'> 
    
      {data.map((item, index) => (
       <motion.div
       key={index}
       initial={{ opacity: 0, scale: 0.8, rotate: -15, y: -100 }}
       animate={{ opacity: 1, scale: 1, rotate: 0,   y: [0, 7, 0] }}
       transition={{ duration: 0.7, ease: 'easeOut' }}
     >
        <Card key={index} data={item}  index={index} onRemoveCard={handleRemoveCard} constrainTsRef={ref} />
        </motion.div>
      ))
      }
      <div className='absolute left-[92%] top-[85%]'>
        <motion.span
          className='flex justify-center items-center rounded-full bg-zinc-900 w-13 h-13 p-3 cursor-pointer'
          whileHover={{ scale: 1.1, rotate: 90, color: '#f00' }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={handleToggleForm}
        >
          <TiDocumentAdd size="5em" color='#fff' />
        </motion.span>
        {formVisible && <AddCardForm onAddCard={handleAddCard} onClose={handleCloseForm} />}
      </div>
    </div>
  );
};

export default Foreground;
