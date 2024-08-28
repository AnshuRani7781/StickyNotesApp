/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AddCardForm = ({ onAddCard, onClose }) => {
  const colors = ['red', 'green', 'blue', 'purple', 'orange', 'silver', 'seagreen'];
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [tagTitle, setTagTitle] = useState('');
  const [tagColor, setTagColor] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    const newCard = { desc, date, close: true, tag: { isOpen: true, tagTitle, tagColor } };
    onAddCard(newCard);
    setDesc('');
    setDate('');
    setTagColor('');
    setTagTitle('');
  };

  return (
    <div className='fixed top-0 left-0 z-[4] w-full h-full bg-zinc-700/50 flex justify-center items-center'>
     <motion.button
        type='button'
        className='absolute text-[40px] font-bold top-2 right-2 text-red-600'
        onClick={onClose}
        whileHover={{ scale: 1.2, rotate: 90, color: '#f00' }} // Change color and scale when hovered
        transition={{ type: 'spring', stiffness: 300 }}
      >
        &times;
      </motion.button>
      <form onSubmit={handlesubmit} className="flex flex-col gap-4 border-2 border-gray-300 p-6 rounded-lg  shadow-lg">
        <textarea
          className='p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-zinc-950'
          required
          placeholder='Description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          className='p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-zinc-950'
          placeholder='Date'
          required
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-zinc-950"
          type="text"
          placeholder="Tag Title"
          value={tagTitle}
          onChange={(e) => setTagTitle(e.target.value)}
          required
        />
        <div className='flex gap-2 mt-2'>
          {colors.map((color, index) => (
            <motion.div
              key={index}
              className='w-8 h-8 rounded-full cursor-pointer'
              onClick={() => setTagColor(color)}
              style={{
                backgroundColor: color,
                border: tagColor === color ? '3px solid black' : 'none',
              }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
        <button type='submit' className='p-3 rounded-lg bg-zinc-900 text-white hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-400'>
          Add Card
        </button>
      </form>
    </div>
  );
};

AddCardForm.propTypes = {
  onAddCard: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddCardForm;
