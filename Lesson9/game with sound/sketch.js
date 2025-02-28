let rocket;
let bullet;
let baseline;
let meteors = [];
let score;
let backMusic;
let shootSound;
let imgMusicOff;
let imgMusicOn;
let hitSound;
let backPlay;
let soundPlay;
let soundVolume = 0.5;

let playGame = true;
const countMeteors = 5;

let musicSlider;
let soundSlider;
let btnRestart;

function preload()
{
    soundFormats('mp3'); // format sounds support
    backMusic = loadSound('assets/sounds/BackgroundMusic.mp3'); // connect sound from directory
    shootSound = loadSound('assets/sounds/shootSound.mp3');
    hitSound = loadSound('assets/sounds/hitSound.mp3');
    imgMusicOff = loadImage('assets/img/volume-mute.svg');
    imgMusicOn = loadImage('assets/img/volume-up.svg');
    backPlay = true;
    soundPlay = true;
}

function addMeteors()
{
    meteors.push(
        {
            x: random(width),
            y: -random(100) - 10,
            fly: function() { this.y += 2 },
            draw: function() { fill(200); rect(this.x, this.y, 30, 30) },
            checkOut: function() { this.y + 30 > height ? this.y = -10 : ""},
            coliderRocket: function() {
                if (dist(this.x, this.y, rocket.x, rocket.y) < 20)
                {
                    playGame = false;
                }
            }
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
        meteors[i].coliderRocket();
    }
}

function createHTMLElements()
{
    musicSlider = createSlider(0, 1, 0.4, 0.01); 
    musicSlider.size(70);
    musicSlider.style('transform', 'rotate(-90deg)');
    musicSlider.style('transform-origin', 'left top');
    musicSlider.hide();

    soundSlider = createSlider(0, 1, 0.4, 0.01); 
    soundSlider.size(70); 
    soundSlider.style('transform', 'rotate(-90deg)');
    soundSlider.style('transform-origin', 'left top');
    soundSlider.hide();

    btnRestart = createButton("Restart");
    btnRestart.style('background-color', '#007bff');
    btnRestart.style('color', 'white');
    btnRestart.style('border', 'none');
    btnRestart.style('padding', '10px 20px');
    btnRestart.style('font-size', '16px');
    btnRestart.style('border-radius', '5px');
    btnRestart.style('cursor', 'pointer');
    btnRestart.mousePressed(() => {
        restart();
    });
}

function restart()
{
    createCanvas(600, 600);
    score = 0;
    playGame = true;
    meteors = [];
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

                                hitSound.play();

                                score++;
                            }
                            
                        }
                    }
                }
                shootSound.play();
                this.canShoot = false;
            }
        },
        checkOut: function()
        {
            if (this.x > width + 5)
                this.x = -5;
            if (this.x < -5)
                this.x = width + 5;
        },
    }

    backMusic.loop();
    backMusic.setVolume(0.05);
    hitSound.setVolume(soundVolume);
    shootSound.setVolume(soundVolume);      

    soundSlider.position(width - 85, 100);
    musicSlider.position(width - 45, 100); 
    btnRestart.position(width / 2, height / 2 + 60);


    btnRestart.hide();
    musicSlider.hide();
    soundSlider.hide();
}

function setup()
{
    createHTMLElements();
    restart();
}

function mousePressed()
{
    if (mouseX > width - 40 && mouseX < width - 30 && mouseY > 10 && mouseY < 20 + activeMusic * 80)
    {
        activeMusic = 1;
        musicSlider.show();
    }
    else
    {
        activeMusic = 0;
        musicSlider.hide();
    }
    if (mouseX > width - 80 && mouseX < width - 70 && mouseY > 10 && mouseY < 20 + activeSound * 80)
    {
        activeSound = 1;
        soundSlider.show();
    } 
    else
    {
        activeSound = 0;
        soundSlider.hide();
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

function drawImages()
{
    textSize(12);
    fill(0);
    text("Sound", width - 90, 30);
    text("Music", width - 50, 30);
    if (backPlay)
        image(imgMusicOn, width - 40, 5);
    else
        image(imgMusicOff, width - 40, 5);
    if (soundPlay)
        image(imgMusicOn, width - 80, 5);
    else
        image(imgMusicOff, width - 80, 5);
}

function sliderLogic()
{
    backMusic.setVolume(musicSlider.value());
    hitSound.setVolume(soundSlider.value());
    shootSound.setVolume(soundSlider.value());  
    if (musicSlider.value() < 0.1)
        backPlay = false;
    else
        backPlay = true;   
    if (soundSlider.value() < 0.1)
        soundPlay = false;
    else
        soundPlay = true;
}

function draw()
{
    if (playGame)
    {
        background(240);
        rocket.draw();
        rocket.movement();
        rocket.checkOut();
        flyMeteors();
        drawScore();
        bulletLogic();
        drawImages();
        sliderLogic();
        btnRestart.hide();
    }
    else
    {
        textSize(40);
        text("Game Over", width / 2 - 100, height / 2);
        textSize(30);
        text("Press restart", width / 2 - 80, height / 2 + 40);
        btnRestart.show();
    }
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
    if (keyCode == 77)
    {
        
    }
    if (keyCode == 78)
    {
        
    }
}

