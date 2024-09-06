

function setup() 
{
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 400);

}

function draw()
{
    background(200);
    noStroke();

    fill(204, 101, 192);
    
    //triangle(18, 18, 18, 360, 81, 370);

    //rect(81, 81, 63, 83);

    //quad(100, 10, 216, 18, 216, 360, 144, 360);

    
    // ellipse(252, 144, 100, 72);

    //triangle(288, 18, 351, 360, 288, 360); 

    arc(479, 300, 280, 280, PI, 4/3 * PI);
}

