import React, { useState, useRef } from 'react';
import Card from './Card';
import { TiDocumentAdd } from "react-icons/ti";
import { motion } from "framer-motion";
import AddCardForm from './AddCardForm';

const Foreground = () => {
  const [data, setData] = useState([
    {
      desc: "<p>Lorem, ipsum dolor sit amet niti expedita magni harum, repellat ",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "red" }
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

  const ref = useRef(null);

  return (
    <div ref={ref} className='fixed top-0 left-0 w-full h-screen bg-gray-200/20 z-[3] flex gap-7 flex-wrap'>
      {data.map((item, index) => (
        <Card key={index} data={item} constrainTsRef={ref} />
      ))}
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
