import React, { useEffect, useRef, filterRef } from 'react';
import './styles.css'; // Global Styling
import './BeatingHeart.css'; 
// import { startAuroraAnimation } from './AuroraAnimation';
import {motion, AnimatePresence} from "framer-motion";
import sunmoon from './assets/sun-moon.svg';

import skeleton from './assets/skeleton.svg';



function BeatingHeart() {


    return (      
        <div className='container'>
        <div
          animate={{ y: [0, -33, 0],  scale: [1, 1.2, 1] }} // Scale animation
          transition={{ duration: 6, repeat: Infinity }} // Repeat animation indefinitely
            className='sunmoon'>
            <img id='sunmoon' className="Spinning-logo" src={sunmoon} />
        </div>
        <motion.img 
         animate={{ y: [0, -33, 0] }} // Scale animation
         transition={{ duration: 6, repeat: Infinity }} // Repeat animation indefinitely
          className='skeleton' src={skeleton} />
        <div id="left-intro">
          <h3>
            Hello, my name is Trinity
          </h3>
          
          </div>
          <div id="right-intro">
          <h3>
            I breathe life into dreams.
          </h3>
          </div>
        </div>
        
        
      );
};

export default BeatingHeart;
