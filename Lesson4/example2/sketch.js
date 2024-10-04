let x_pos;
let y_pos;
let x_offset;
function setup()
{
    createCanvas(800, 800);
    x_pos = 10;
    y_pos = 10;
    x_offset = [];
    for(let i = 0; i < 40; i++)
        x_offset.push(0);
}

function draw()
{
    //background(0);
    fill(255, 0, 255);
    
    /*
    for(let i = 0; i < 40; i++)
    {
        ellipse(x_pos + i * 20, y_pos + random(10, 100), 20, 20);
    }
    */
    
    for(let i = 0; i < 40; i++)
    {
        ellipse(x_pos + x_offset[i], y_pos + i * 20, 20, 20);
        x_offset[i] += random(0, 10);
    }
}