let maxDist;
function setup()
{
  createCanvas(800, 800); 
  maxDist = dist(0, 0, width / 2, height / 2);
}



function draw()
{
   background(0);
   noStroke();

   for(let i = 0; i < 20; i++) // rows
   {
        for(let j = 0; j < 20; j++) // columns
        {
            if (i % 2 == 0)
                fill(255);
            else
                (fill(255, 0, 255));
            let distance = dist(mouseX, mouseY, 50 + i * 30, 50 + j * 30);
            let radius = distance / maxDist;
            ellipse(50 + i * 30, 50 + j * 30, radius * 30, radius * 30);
        }
   }
}