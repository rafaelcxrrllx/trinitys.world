import React from 'react';
import flower from './assets/flower.svg';
import "./FlowerOfLife.css";
import "./styles.css"
import {motion} from "framer-motion";
import Clouds from './Clouds';
import FlowerCarousel from "./FlowerCarousel"
function FlowerOfLife() {

  
    return (
        <div className='FlowerDiv'>
            {/* <FlowerCarousel /> */}
            <motion.img     
            initial={{ opacity: 0 }} // Initial opacity and scale of the image
            animate={{ opacity: 1, y: -33 }} // Fade in and scale in animation
            exit={{ opacity: 0, scale: 72 }} // Scale out animation when component exits
            transition={{  duration: 1 }} // Duration of the animation
            src={flower} id="flower" className="Spinning-logo" alt="logo" />
            <div className='Paragraph'>
                <h2>
                    Emanating from the Divine Mind
                </h2>
                <p>
                    From subtle to dense, the tree of life unfolded and my spirit descended to matter. The physical body I am within, houses me 
                    in this mental where I can observe and experience all worldly sensations. What a beautiful experience it is indeed...to love
                    and be loved! Believe me when I say you are unconditional love. 
                </p>
            </div>
            <Clouds/>
        </div>
        
    );
}

export default FlowerOfLife;
