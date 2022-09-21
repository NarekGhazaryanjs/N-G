let color;

let randomcolor = () => {
    color = `aqua`
}
randomcolor();

(function () {

    let canvas = document.createElement(`canvas`),
        ctx = canvas.getContext(`2d`),
        w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,
        particles = [],
        proparties = {
            bgColor: 'rgb(0, 8, 55)',
            particleRadius: 1,
            particaleCount: 200,
            particaleMaxVelocity: 0.3,
            linelength: 120,

        }

    document.body.append(canvas)


    window.onresize = function () {
        w = canvas.width = innerWidth,
        h = canvas.height = innerHeight
    }

    class Partical {
        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.velocityX = Math.random() * (proparties.particaleMaxVelocity * 4) - proparties.particaleMaxVelocity;
            this.velocityY = Math.random() * (proparties.particaleMaxVelocity * 2) - proparties.particaleMaxVelocity;
            this.life = Math.random() * proparties.particlelive ;
        }


        position() {
            if (this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0) {
                this.velocityX = this.velocityX * -1
            } else {
                this.velocityX
            }
            if (this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0) {
                this.velocityY = this.velocityY * -1
            } else {
                this.velocityY
            }

            this.x = this.x + this.velocityX;
            this.y = this.y + this.velocityY;

        }

        reDrow() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, proparties.particleRadius, 0, Math.PI * 2)
            ctx.closePath();
            ctx.fillStyle = color
            ctx.fill();
        }

    }

    function reDrawBackground() {
        ctx.fillStyle = proparties.bgColor;
        ctx.fillRect(0, 0, w, h)
    }

    function drawlines() {
        let x1, y1, x2, y2, length, opacity
        for (let key in particles) {
            for (let j in particles) {
                x1 = particles[key].x
                y1 = particles[key].y
                x2 = particles[j].x
                y2 = particles[j].y
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
                if (length < proparties.linelength) {
                    opacity = 1 - length / proparties.linelength;
                    ctx.lineWidth = "0.05"
                    ctx.strokeStyle = color,
                     ctx.beginPath();
                    ctx.moveTo(x1, y1)
                    ctx.lineTo(x2, y2)
                    ctx.closePath()
                    ctx.stroke()
                }
            }
        }
    }

    function reDrowParticles() {
        for (let key in particles) {
            particles[key].position();
            particles[key].reDrow();
        }
    }

    function loop() {
        reDrawBackground();
        reDrowParticles();
        drawlines()
        requestAnimationFrame(loop);
    }

    function init() {
        for (let i = 0; i < proparties.particaleCount; i++) {
            particles.push(new Partical)
        }
        loop()
    }
    init()
}())