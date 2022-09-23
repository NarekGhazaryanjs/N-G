
let canvas,ctx,w,h,particles = [];
let particleCount = 50;

function init(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    resizeReset()
    animationLoop()
}


function resizeReset(){
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight


    ctx.fillStyle = "blue";
    ctx.fillRect (0,0,w,h);
}
function animationLoop(){
    if(particles.length < particleCount){
        particles.push(new Particle())
    }
    ctx.globalCompositeOperation = "source-over"
    ctx.fillStyle = "rgba(0,8,55, .05)"
    ctx.fillRect(0,0,w,h)
    ctx.globalCompositeOperation = "lighter"

    drawScene()
    requestAnimationFrame(animationLoop)
}
function drawScene (){
    particles.map((p) => {
        p.update();
        p.draw()
    })
}



function getRandomInt(min,max){
    return Math.round(Math.random() * (max-min)) + min
}
function getAngle(x1,y1,x2,y2){
    let rad = Math.atan2(x2-x1,y2-y1);
    return(rad*180)/Math.PI
}

class Particle {
    constructor(){
       this.x = Math.random() * w
       this.y = Math.random() * h
       this.angle = Math.random() * 360;
       this.pangle = this.angle;
     

       this.speed = 3;
       this.blur = 5;
         this.style = "aqua";
    }
     draw(){
        ctx.save()
            ctx.beginPath()
            ctx.moveTo(this.px, this.py)
            ctx.lineTo(this.x,this.y)
            ctx.lineWidth = 1;

            ctx.shadowBlur = this.blur;
            ctx.shadwColor = this.style
            ctx.strokeStyle = this.style
            ctx.stroke();
            ctx.closePath()
            ctx.restore()
        }
        update(){
            this.px = this.x;
            this.py = this.y;
            
            
            this.radian = (Math.PI/180) * this.angle;

            this.x += this.speed * Math.sin(this.radian);
            this.y += this.speed * Math.cos(this.radian);
            if(this.x < 0 || this.y < 0 || this.y > h){
                this.angle += 90
            }
        }
        angleReset(){
            this.angle = this.pangle
        }
}

window.addEventListener("DOMContentLoaded",init)
window.addEventListener("resize",resizeReset)