const TMP = 20; // const - переменная, которая является константовой, то есть не изменяемой
let x = 10; // Объявление переменной
var y = 10; // Устаревшее объявление переменной 
function setup()
{
    createCanvas(500, 500);
}

function draw()
{
    //background(255);
    fill("#A01025");
    circle(mouseX, mouseY, 40); // built-in variable - переменные, которые сразу доступны и определены до начала нашего кода
    if (mouseIsPressed)
    {
        fill("#1030A0");
        rect(mouseX, mouseY, 20, 20);
    }
        
}

function mousePressed() // function buil-in - вызывается автоматически, когда происходит нажате кнопки мыши
{
    fill("#10A020");
    circle(mouseX, mouseY, 140);
}


