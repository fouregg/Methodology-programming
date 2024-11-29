let rocket;
let bullet;
let baseline;
let meteors = [];
let score;
const countMeteors = 5;

function addMeteors()
{
    meteors.push(
        {
            x: random(width),
            y: -random(100) - 10,
            fly: function() { this.y += 2 },
            draw: function() { fill(200); rect(this.x, this.y, 30, 30) },
            checkOut: function() { this.y + 30 > height ? this.y = -10 : ""}
        }
    )
}

function flyMeteors()
{
    for(let i = 0; i < meteors.length; i++)
    {
        meteors[i].fly();
        meteors[i].draw();
        meteors[i].checkOut();
    }
}

function setup()
{
    createCanvas(600, 600);
    score = 0;
    for (let i = 0; i < countMeteors; i++)
    {
       addMeteors();
    }
    baseline = height - 100;
    rocket = 
    {
        x: width/2,
        y: baseline,
        thrust: false,
        moveLeft: false,
        moveRight: false,
        canShoot: true,
        movement: function()
        {
            if(this.thrust && this.y > 0)
                this.y -= 2;
            else if (this.y < baseline)
                this.y += 3;
            
            if (this.moveLeft)
                this.x -= 2;
            if (this.moveRight)
                this.x += 2;
        },
        draw: function()
        {
            // body
            fill(180);
            beginShape();
                vertex(this.x + 10, this.y + 60);
                vertex(this.x + 10, this.y + 20);
                vertex(this.x + 15, this.y );
                vertex(this.x + 20, this.y + 20);
                vertex(this.x + 20, this.y + 60);
            endShape(CLOSE);

            //tail
            fill(255, 0, 0);
            beginShape();
                vertex(this.x, this.y + 60);
                vertex(this.x + 10, this.y + 40);
                vertex(this.x + 10, this.y + 60);
            endShape(CLOSE);
            beginShape();
                vertex(this.x + 30, this.y + 60);
                vertex(this.x + 20, this.y + 40);
                vertex(this.x + 20, this.y + 60);
            endShape();

            // when flying
            if (rocket.thrust)
            {
                fill(255, 150, 0);
                beginShape();
                    vertex(this.x + 10, this.y + 60);
                    vertex(this.x + 13, this.y + 80);
                    vertex(this.x + 15, this.y + 70);
                    vertex(this.x + 18, this.y + 80);
                    vertex(this.x + 20, this.y + 60);
                endShape(CLOSE);
            }
        },
        shoot: function()
        {
            if (this.canShoot)
            {
                bullet = 
                {
                    x: this.x,
                    y: this.y - 40,
                    fly: function() {this.y -= 4},
                    draw: function() { fill(100); rect(this.x + 10, this.y + 25, 2, 15); },
                    checkMeteor: function()
                    {
                        for(let i = 0; i < meteors.length; i++)
                        {
                            if (dist(this.x, this.y, meteors[i].x, meteors[i].y) <= 15)
                            {
                                meteors.splice(i, 1);
                                addMeteors();
                                score++;
                            }
                            
                        }
                    }
                }
                this.canShoot = false;
            }
        },
        checkOut: function()
        {
            if (this.x > width + 5)
                this.x = -5;
            if (this.x < -5)
                this.x = width + 5;
        }
    }
}

function drawScore()
{
    fill(200);
    textSize(24);
    text(`Score: ${score}`, 0, 20);
}

function bulletLogic()
{
    if (bullet != null || bullet != undefined)
    {
        bullet.fly();
        bullet.draw();
        bullet.checkMeteor();
    }
    if ((bullet != undefined || bullet != null) && bullet.y < 0)
    {
        bullet = null;  
        rocket.canShoot = true;
    }
}

function draw()
{
   background(10);
   rocket.draw();
   rocket.movement();
   rocket.checkOut();
   flyMeteors();
   drawScore();
   bulletLogic();
}

function keyPressed()
{
    if (keyCode == 87)
        rocket.thrust = true;
    if (keyCode == 68)
        rocket.moveRight = true;
    if (keyCode == 65)
        rocket.moveLeft = true;
    if (keyCode == 32)
        rocket.shoot();
}

function keyReleased()
{
    if (keyCode == 87)
        rocket.thrust = false;
    if (keyCode == 68)
        rocket.moveRight = false;
    if (keyCode == 65)
        rocket.moveLeft = false;
}

