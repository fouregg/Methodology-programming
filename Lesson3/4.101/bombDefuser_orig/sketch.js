
var bcenterX;
var bcenterY;
var bdiam;
var fuseEndX;
var fuseEndY;
let gameState;
let newState;
let secretKey1;
let secretKey2;
let timer;
let hotKey1, hotKey2, hotKey3;
let previousKey;

function setup() 
{
    createCanvas(512,512);
    textSize(32);
    strokeWeight(5);
    
    //initialise variables
    bdiam = 250;
    bcenterX = width/2;
    bcenterY = height/2;
    fuseEndX = bcenterX + 20;
    fuseEndY = bcenterY - bdiam/2 - 30;
    gameState = 0; // 0 - pregame
    
    secretKey1 = "F";
    secretKey2 = "D";
    hotKey1 = "T";
    hotKey2 = "B";
    hotKey3 = "Z";
    previousKey = "";
    timer = 600;
}


function draw()
{
    ////////////// UPDATE CODE///////////////
    
    //reset variables after random amounts were added
    bcenterX = width/2;
    bcenterY = height/2;
    
    //wobble the bomb
    if (gameState == 1) // move bomb only if we start game
    {
        bcenterX += random(-10,10);
        bcenterY += random(-10,10);
        timer = timer - 1;
        if (timer == 0)
            gameState = 2;
    }
    
    fuseEndX = bcenterX + 20;
    fuseEndY = bcenterY - bdiam/2 - 30;
    
    ////////////// DRAWING CODE///////////////
    
    background(100);    

    //draw the fuse
    noFill();
    stroke(200,100,0);

    line(
        bcenterX,
        bcenterY - bdiam/2, 
        fuseEndX,
        fuseEndY
        );
    
    //draw the bomb
    noStroke();
    fill(0);
    ellipse(bcenterX,bcenterY, bdiam, bdiam);
    fill(255);
    quad(
        bcenterX + 40, bcenterY - 60,
        bcenterX + 80, bcenterY - 60,
        bcenterX + 70, bcenterY - 30,
        bcenterX + 50, bcenterY - 30
    );
    
    //draw the flame 
    if (gameState == 1)
    {
        fill(255,255,0);
        noStroke();
        beginShape();
            vertex(fuseEndX, fuseEndY);
            vertex(fuseEndX + 20, fuseEndY - 20);
            vertex(fuseEndX + 20, fuseEndY - 50);
            vertex(fuseEndX - 10, fuseEndY - 30);
        endShape(CLOSE);
    }
    
    fill(255);
    
    if (gameState == 0)
    {
        text("Press any key to start", 20, 50);
    }
    if (gameState == 1)
    {
        text("Press a key to diffuse the bomb", 20, height - 50);
        text("Timer:" + timer, 20, 30);
    }
    if (gameState == 2)
    {
        text("Game over", 20, height/2);  
    }
    if (gameState == 3)
    {
        text("You won !", width/2, height/2);  
    }
    
    
}

function keyPressed()
{
    /*
    if (gameState == 0)
    {
        newState = 1;
    }
    if (gameState == 1)
    {
        newState = 2;
    }
    if (gameState == 2)
    {
        newState = 0;
    }
    if (newState == 3)
    {
        newState = 0;
    }
    gameState = newState;
    */
    // switch аналог оператор множественного ветвеления
    
    console.log(key);
    switch (gameState)
    {
        case 0:
            gameState = 1;
            break;
        case 1:
            if (previousKey == secretKey1 && key == secretKey2)
            {
                gameState = 3;
            }
            else if (key == hotKey1 || key == hotKey2 || key == hotKey3)
            {
                timer += 20; // timer = timer + 20;
            }
            else
            {
                timer = timer - 20;
            }
            
            break;
        case 2:
            timer = 600;
            gameState = 0;
            break;
        case 3:
            timer = 600;
            gameState = 0;
            break;
    }
    previousKey = key;
            
}







