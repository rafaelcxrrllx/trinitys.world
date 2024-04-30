import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
    './assets/flower-1.svg',
  'image2.jpg',
  'image3.jpg',
  // Add more image paths as needed
];

const FlowerCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <motion.img
        key={index} // Ensures Framer Motion animates when index changes
        src={images[index]}
        alt={`Image ${index + 1}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '100%' }}
      />
    </div>
  );
};

export default FlowerCarousel;
