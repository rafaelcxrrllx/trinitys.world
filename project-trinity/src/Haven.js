import React from 'react';
import "./styles.css"
import "./Haven.scss"
import {motion} from "framer-motion";
import moon from './assets/planets/moon.svg';
import earth from './assets/planets/earth.svg';
import sol from './assets/planets/sol.svg';
import mars from './assets/planets/mars.svg';
import venus from './assets/planets/venus.svg';
import jupiter from './assets/planets/jupiter.svg';
import saturn from './assets/planets/saturn.svg';
import neptune from './assets/planets/neptune.svg';
import uranus from './assets/planets/uranus.svg';
import pluto from './assets/planets/pluto.svg';
import mercury from './assets/planets/mercury.svg';


function Haven() {

  
    return (
		<div class="Heaven-container">
			<div class="Haven-container">
				{/* <!-- orbits --> */}
				<div class="orbit orbit-1">
					<img src={moon} />
				</div>
				<div class="orbit orbit-2">
				<img src={mercury} />
				</div>
				<div class="orbit orbit-3">
				<img src={venus} />
				</div>
				<div class="orbit orbit-4">
				<img src={sol} />
				</div>
				<div class="orbit orbit-5">
				<img src={mars} />
				</div>
				<div class="orbit orbit-6">
				<img src={jupiter} />
				</div>
				<div class="orbit orbit-7">
				<img src={saturn} />
				</div>
				<div class="orbit orbit-8">
				<img src={uranus} />
				</div>
				<div class="orbit orbit-9">
				<img src={neptune} />
				</div> 
				<div class="orbit orbit-10">
				<img src={pluto} />
				</div> 
				<div id="terra" class="orbit orbit-11">
				<img src={earth} />
				</div> 
			</div>
		</div>
		

    );
}

export default Haven;
