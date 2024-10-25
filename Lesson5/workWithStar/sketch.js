let starPositionX;
let starPositionY;
let starDirectionX;
let starDirectionY;
let maxDist;

function setup()
{
   createCanvas(800, 800);
   starPositionX = [];
   starPositionY = [];
   starDirectionX = [];
   starDirectionY = [];
   numStars = 100;   
   maxDist = dist(0, 0, width / 2, height / 2);

   for (let i = 0; i < numStars; i++)
   {
        starPositionX.push(width / 2);
        starPositionY.push(height / 2);
        starDirectionX.push(random(-1, 1));
        starDirectionY.push(random(-1, 1));
   }
}



function draw()
{
    background(0);
    fill(255);
    noStroke();

    for (let i = 0; i < numStars; i++)
    {
        let d = dist(width / 2, height / 2, starPositionX[i], starPositionY[i]);
        let r = d / 20;
        let s = d * 2 / maxDist + 0.1;
        ellipse(starPositionX[i], starPositionY[i], r);
        starPositionX[i] += starDirectionX[i] * s;
        starPositionY[i] += starDirectionY[i] * s;
        
        if(d > maxDist)
        {
            starPositionX[i] = width / 2;
            starPositionY[i] = height / 2;
        }
    }
}