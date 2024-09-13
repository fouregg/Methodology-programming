let sun = {
    x: 430, 
    y: 150, 
    r: 100, 
    color: "#FF9600"
};

let ground =
{
        x_begin: 0,
        width: 512,
        y_begin: 400,
        height: 112,
        color: "#C8A000"
};

function setup() 
{
    createCanvas(512,512);
    
}

function draw()
{
    background(150,150,255);
    
    //sun
    noStroke();
    fill(sun.color);
    ellipse(sun.x, sun.y, sun.r, sun.r);
    
    //tree
    stroke(0);
    fill(180,80,0);
    ellipse(256,360,40,100);
    fill(0,150,0);
    ellipse(256,300,120,120);
    
    //cloud
    noStroke();
    fill(255);
    ellipse(100,50,50,50);
    ellipse(130,50,30,30);
    ellipse(150,50,20,20);
    
    //ground
    fill(ground.color);
    rect(ground.x_begin, ground.y_begin, ground.width, ground.height);
    

}


