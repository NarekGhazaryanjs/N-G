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
        dotSize: 2,
        dotsCount: 800,
        dotVelocity: 2,
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
            this.dir = (Math.random() * 3 | 0) * 2;
            this.step = 0
        }

        redrawDot() {
            let blur = 4;
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


let lessonsObjectInformation = {
    Web: `  
            <details>
                <summary> Frontend  դասընթացներ  </summary>  
                <div style="align-items: center">
                    
                    <img width='50px' src='../Home/Images/N2G.jpg' /> 
                     <br /> 
                      <h2 style='text-align: center', width: 100%> N2G Brains  </h2>
                     <br />
                </div>
                <div>
                     Այստեղ դուք կարող եք ծանոթանալ մեր կազմակերպության 
                     կողմից անց կացվող բոլոր դասընթացներին: Տեղեկություն գտնել
                     դասընթացների ծրագրերի մասին, ծանոթանալ մեր դասախոսների հետ,
                     որոնցից յուրաքանչյուրն հանդիսանում է իր գործի գիտակ:
                </div>
           

             <div>
                Frontend Web Programming Cource a-z 
             </div>
             <div>
                Այս դասընթացի շրջանակներում դուք կսովորեք Frontend վեբ
                ծրագրավորում՝ որը նախատեսված է վեբ կայքերի դիմային հատվածի
                պատրաստման համար:
                Այս կուրսի ընթացքում լինելու են ինչպես տեսական այնպես էլ
                պրակտիկ բազում աշխատանքներ, որի վերջնական արդյունքում դուք
                կուենանք 10+ պատրաստի կայքեր, ինչպես նաև խաղեր՝ Ձեր սեփական
                պորտֆոլիոի համար, ինչն էլ հետագայում բավական մեծ դեր է խաղում
                գործի ընդունվելու հարցում:
             </div>
                  

            <div>  
               Դասընթացի մանրամասներ 
            </div>

            <div>  
               Առաջին փուլ 2 ամիս 
            </div>
            
              
             
             <ol> 
               <li>  HTML5 </li>
               <li>  CSS3 </li>
               <li>  BOOTSTRAP </li>
               <li>  SASS </li>
               <li>  SCSS </li>
             </ol>
              
                 
                 
                 
             <div>  
                Երկրորդ փուլ 2 ամիս  
             </div>
            
              
             
             <ol> 
               <li> JAVASCRIPT ADVANCE  </li>
               <li> Axios  </li>
               <li> Lodash  </li>
               <li> Big O Notation  </li>
             </ol>

             <div>  
               Երրորդ փուլ 2 ամիս  
             </div>
         
           
          
          <ol> 
            <li> JAVASCRIPT ADVANCE  </li>
            <li> REACT  </li>
            <li> RECOIL  </li>
            <li> REDUX  </li>
            <li> GIT  </li>
          </ol>
                 
              

                  
              
            
                  
            
                      
                      
                      
                      
                      
              </div>
            </details> `,
    SMM: `  
            <details>
              <summary> SMM  դասընթացներ  </summary>  
              <p> some SMM  դասընթացներ </p>
            </details> `,
    HR: `   
            <details>
              <summary> HR  դասընթացներ  </summary>  
              <p> some HR  դասընթացներ </p>
            </details> `,
    Graphic_Design: `
            <details>
              <summary> Graphic_Design  դասընթացներ  </summary>  
              <p> some Graphic_Design  դասընթացներ </p>
            </details> `,
    English: ` 
            <details>
              <summary> Անգլերեն լեզվի դասընթացներ  </summary>  
              <p> some text </p>
            </details> `,
    QA: `   
            <details>
              <summary> QA  դասընթացներ  </summary>  
              <p> some qa text </p>
            </details> `,
}

let titleText = Array.from(document.getElementsByClassName(`main-navigation-list-items`))

titleText.map(el => {
    el.addEventListener(`click`, () => {
        let lessonDetailsBlock = document.querySelector(`.lesson-container-details-block`)
        lessonDetailsBlock.innerHTML = lessonsObjectInformation[el.innerText]
    })
})



