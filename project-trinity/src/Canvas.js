
import './styles.css'; // Global Styling
import { startCanvasAnimation } from './CanvasAnimation';
import {motion, AnimatePresence} from "framer-motion";
import React, { useState } from 'react';
import "./Canvas.css";
import { useEffect } from 'react'; // Import useEffect




function Canvas() {

    useEffect(() => {
        startCanvasAnimation();
        }, []);

  return (
    <motion.div 
        initial={{ opacity: 0 }} // Initial opacity and scale of the image
        animate={{ opacity: 1}} // Fade in and scale in animation
        transition={{ delay: 3, duration: 1 }}>
        <canvas class="canvas" id="bgCanvas"></canvas>
        <canvas class="canvas" id="terCanvas"></canvas>
    </motion.div> 
  );
}

export default Canvas;
