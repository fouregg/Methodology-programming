let objects =[];
const lenObjects = 10;

function setup()
{
   createCanvas(1000, 1000);
   for(let i = 0; i < lenObjects; i++)
    // posX: 20 - начальная позиция откуда начинаем отрисовку элементов
    // i + 1 - сдвиг на 1 для корректного отображения элементов в строке
    // % 5 - определяет сколько элементов будет в строке
    // * 20 - расстояние между центрами двух элементов 
    // posY: все точно так-же за исключением Math.floor(). 
    // Math.floor() округляет результат деления до целочисленного при этом в округляет в меньшую сторону
    // Math.floor(i / 5) = i // 5
    objects.push({
        posX: 50 + ((i + 1) % 5) * 100, 
        posY: 50 + Math.floor(i / 5) * 100,
        color: color(Math.random() * 255, Math.random() * 255, Math.random() * 255),
        radius: 50 + Math.random() * 50
    });
    
}



function draw()
{
    background(0);
   
    for(let i = 0; i < objects.length; i++)
    {
        fill(objects[i].color);
        ellipse(objects[i].posX, objects[i].posY, objects[i].radius);
    }
}