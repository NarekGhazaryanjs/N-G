(() => {
    const cnv = document.createElement(`canvas`)
    const ctx = cnv.getContext(`2d`)

    let cw, ch, cx, cy;

    function resizeCanvas() {
        cw = cnv.width = innerWidth;
        ch = cnv.height = innerHeight;
        cx = cw / 2;
        cy = ch / 2;
    }


    resizeCanvas()
    window.addEventListener(`resize `, resizeCanvas);

    const cfg = {
        bgFillColor: `rgba(0, 8, 55, .05)`,
        dirsCount: 9,
        stepsToTourn: 20,
        dotSize: 1.5,
        dotsCount: 100,
        dotVelocity: 5,
        distance: 200,
    }

    document.body.append(cnv)

    function drawRect(color, x, y, w, h, shadowBlur) {
        ctx.shadowColor = `rgba(0, 8, 55, .05)`
        ctx.shadowBlur = shadowBlur || 1
        ctx.fillStyle = color
        ctx.fillRect(x, y, w, h)
    }

    class Dot {
        constructor() {
            this.pos = {
                x: cx,
                y: cy
            };
            this.dir = (Math.random() * 5 | 0) * 2;
            this.step = 0
        }

        redrawDot() {
            let blur = 1;
            let color = `aqua`;
            let size = cfg.dotSize;

            let x = this.pos.x - size / 2
            let y = this.pos.y - size / 2


            drawRect(color, x, y, size, size, color, blur)
        }
        moveDot() {
            this.step++
            this.pos.x += dirsList[this.dir].x * cfg.dotVelocity;
            this.pos.y += dirsList[this.dir].y * cfg.dotVelocity;
        }

        changeDir() {
            if (this.step % cfg.stepsToTourn === 0) {
                this.dir = Math.random() > .5 ? (this.dir + 1) % cfg.dirsCount : (this.dir + cfg.dirsCount - 1) % cfg.dirsCount;
            }
        }
        killDot(id) {
            let percent = Math.random() * Math.exp(this.step / cfg.distance);
            if (percent > 100) {
                dotsList.splice(id, 1)
            }
        }
    }

    let dirsList = []

    function createDiros() {
        for (let i = 0; i < 360; i += 360 / cfg.dirsCount) {
            let x = Math.cos(i * Math.PI / 180);
            let y = Math.sin(i * Math.PI / 180);
            dirsList.push({
                x: x,
                y: y
            });
        }
    }
    createDiros()


    let dotsList = []

    function addDot() {
        if (dotsList.length < cfg.dotsCount && Math.random() > .8) {
            dotsList.push(new Dot())
        }
    }

    function refreshDots() {
        dotsList.forEach((i, id) => {
            i.moveDot();
            i.redrawDot();
            i.changeDir();
            i.killDot(id);
        })
    }






    function loop() {
        drawRect(cfg.bgFillColor, 0, 0, cw, ch)
        addDot()
        refreshDots()


        requestAnimationFrame(loop)
    }
    loop()


})()






