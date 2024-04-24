export function startCanvasAnimation() {
    
    (function() {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
                                      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                  };
          window.requestAnimationFrame = requestAnimationFrame;
        })();
    
        // Terrain stuff.
        var terrain = document.getElementById("terCanvas"),
            background = document.getElementById("bgCanvas"),
            terCtx = terrain.getContext("2d"),
            bgCtx = background.getContext("2d"),
            
            width = window.innerWidth,
            height = document.body.offsetHeight;
            if (height < 20) {
                height = 20;
            }

            // Set initial canvas size
            resizeCanvas();

            // Resize canvas when window is resized
            window.addEventListener('resize', resizeCanvas);

            function resizeCanvas() {
            // Set canvas dimensions to match viewport
            terrain.width = window.innerWidth;
            terrain.height = window.innerHeight;

  // Call your drawing functions here to redraw on resize, if needed
}
    
        terrain.style.pointerEvents = 'none';
        terrain.width = background.width = width;
        terrain.height = background.height = height;
        terrain.style.zIndex = '9';
    
        // Some random points
        var points = [],
            displacement = 144,
            power = Math.pow(2,Math.ceil(Math.log(width)/(Math.log(2))));
        
        // set the start height and end height for the terrain
        points[0] = (height - (Math.random()*height/4))-displacement;
        points[power] = (height - (Math.random()*height/4))-displacement;
    
        // create the rest of the points
        for(var i = 1; i<power; i*=2){
            for(var j = (power/i)/2; j <power; j+=power/i){
                points[j] = ((points[j - (power/i)/2] + points[j + (power/i)/2]) / 2) + Math.floor(Math.random()*-displacement+displacement );
            }
            displacement *= 0.6;
        }
    
        // draw the terrain
        terCtx.beginPath();
                        
        for(i = 0; i<=width; i++){
            if(i === 0){
                terCtx.moveTo(0, points[0]);
            }else if(points[i] !== undefined){
                terCtx.lineTo(i, points[i]);
            }
        }
    
        terCtx.lineTo(width,terrain.height);
        terCtx.lineTo(0,terrain.height);
        terCtx.lineTo(0,points[0]);
        terCtx.fill();
    
    
        // Second canvas used for the stars
        bgCtx.fillStyle = '#191970'; //Sky
        bgCtx.fillRect(0,0,width,height);
    
        // stars
        function Star(options){
            this.size = Math.random()*1.2;
            this.speed = Math.random()*0;
            this.x = options.x;
            this.y = options.y;
        }
    
        Star.prototype.reset = function(){
            this.size = Math.random()*2;
            this.speed = Math.random()*.1;
            this.x = width;
            this.y = Math.random()*height;
        }
        
        Star.prototype.update = function(){
            this.x-=this.speed;
            if(this.x<0){
              this.reset();
            }else{
              bgCtx.fillRect(this.x,this.y,this.size,this.size); 
            }
        }
        
        function ShootingStar(){
            this.reset();
        }
        
        ShootingStar.prototype.reset = function(){
            this.x = Math.random()*width;
            this.y = 0;
            this.len = (Math.random()*80)+10;
            this.speed = (Math.random()*10)+12;
            this.size = (Math.random()*1)+0.1;
        // this is used so the shooting stars arent constant
            this.waitTime =  new Date().getTime() + (Math.random()*3000)+500;
            this.active = false;
        }
        
        ShootingStar.prototype.update = function(){
            if(this.active){
                this.x-=this.speed;
                this.y+=this.speed;
                if(this.x<0 || this.y >= height){
                  this.reset();
                }else{
                bgCtx.lineWidth = this.size;
                    bgCtx.beginPath();
                    bgCtx.moveTo(this.x,this.y);
                    bgCtx.lineTo(this.x+this.len, this.y-this.len);
                    bgCtx.stroke();
                }
            }else{
                if(this.waitTime < new Date().getTime()){
                    this.active = true;
                }			
            }
        }
    
        var entities = [];
        
        // init the stars
        for(i=0; i < height/10; i++){
            entities.push(new Star({x:Math.random()*width, y:Math.random()*height}));
        }
      
        // Add 12 shooting stars that just cycle.
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        
        
        //animate background
        function animate(){
            bgCtx.fillStyle = '#191970';
            bgCtx.fillRect(0,0,width,height);
            bgCtx.fillStyle = 'gold';
            bgCtx.strokeStyle = 'gold';
    
            var entLen = entities.length;
          
            while(entLen--){
                entities[entLen].update();
            }
            
            requestAnimationFrame(animate);
        }
        animate();
}
