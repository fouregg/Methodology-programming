// В этом случае стрелочная реализация функции без фигурных скобок подразумевает, что на место вызова вернется расчитаное выражение после стрелки
const difTwoVariables = (x, y) => x - y; 
let countFlowers = 10;
let massFlowers = [];
function setup()
{
   createCanvas(800, 800);
   for(let i = 0; i < countFlowers; i++)
        massFlowers.push(
        {
            x: random(50, 750),
            y: height - (100 + random(100)),
            h: 100 + random(100),
            drawFlower: function()
            {
                noFill();
                strokeWeight(10);
                stroke(0, 200, 50);
                curve
                (
                    this.x + 200, this.y + this.h,
                    this.x, this.y,
                    this.x, this.y - this.h,
                    this.x - 200, this.y - (this.h + 100)
                );

                noStroke();
                fill(255, 255, 0);
                ellipse(this.x + 45, this.y - this.h, 70, 50);
                ellipse(this.x - 45, this.y - this.h, 70, 50);
                ellipse(this.x, this.y - this.h + 45, 50, 70);
                ellipse(this.x, this.y - this.h - 45, 50, 70);

                fill(255, 100, 0);
                ellipse(this.x, this.y - this.h, 50, 50)
            }
        });
}

function draw()
{
   background(255);
   for(let i = 0; i < massFlowers.length; i++)
   {
        massFlowers[i].drawFlower();
   }
}

// Общее описание функции, методов называется сигнатурой функции или методы
function sumTwoVariables(x, y) // x, y - параметры функции, а функция с параметрами называется параметризированной
{
    return x + y;
}

