// DOM selectors 
const stars = document.getElementById('stars'); 
const starsCtx = stars.getContext('2d'); 
 
// global variables 
let screen, starsElements, starsParams = { speed: 0.7, number: 1000, extinction: 3 }; 
 
// run stars 
setupStars(); 
updateStars(); 
 

 
// update stars on resize to keep them centered 
window.onresize = function() { 
    setupStars(); 
}; 
 
// star constructor 
function Star() { 
    this.x = Math.random() * stars.width; 
    this.y = Math.random() * stars.height; 
    this.z = Math.random() * stars.width; 
 
    this.move = function() { 
        this.z -= starsParams.speed; 
        if (this.z <= 0) { 
            this.z = stars.width; 
        } 
    }; 
 
    this.show = function() { 
        let x, y, rad, opacity; 
        x = (this.x - screen.c[0]) * (stars.width / this.z); 
        x = x + screen.c[0]; 
        y = (this.y - screen.c[1]) * (stars.width / this.z); 
        y = y + screen.c[1]; 
        rad = stars.width / this.z; 
        opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1; 
 
        starsCtx.beginPath(); 
        starsCtx.fillStyle = "rgba(21, 200, 206, " + opacity + ")"; 
        starsCtx.arc(x, y, rad, 0, Math.PI * 0.7); 
        starsCtx.fill(); 
    } 
} 
 
// setup <canvas>, create all the starts 
function setupStars() { 
    screen = { 
        w: window.innerWidth, 
        h: window.innerHeight, 
        c: [ window.innerWidth, window.innerHeight] 
    }; 
    window.cancelAnimationFrame(updateStars); 
    stars.width = screen.w; 
    stars.height = screen.h; 
    starsElements = []; 
    for (let i = 0; i < starsParams.number; i++) { 
        starsElements[i] = new Star(); 
    } 
} 
 
// redraw the frame 
function updateStars() { 
    starsCtx.fillStyle = "rgb(0,8,55)"; 
    starsCtx.fillRect(0, 0, stars.width, stars.height); 
    starsElements.forEach(function (s) { 
        s.show(); 
        s.move(); 
    }); 
    window.requestAnimationFrame(updateStars); 
}



const partnersArray = [
    {
        name: 'Sharp Brains',
        url: 'https://sharpbrains.com/'
    },

    {
        name: 'Think Engineering',
        url: 'Ithink.am'
    },

    {
        name: 'Narf',
        url: 'facebook.com'
    }
]

const partnersBlock = document.querySelector('main section');

partnersArray.map(partner => {
    const partnerBlock = document.createElement('div');
    const partnerUrl = document.createElement('a');
    partnerUrl.innerText = partner.name
    partnerUrl.href = partner.url;
    partnerUrl.target = '_blank';
    partnerBlock.append(partnerUrl);
    partnersBlock.append(partnerBlock)
})
