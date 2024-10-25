let tree;

function setup()
{
   createCanvas(800, 800);
   tree = 
    {
        posX: 20,
        posY: 720,
        width: 60,
        height: 130,
        leafColor: color(10, 100, 10),
        leafWidth: 40,
        leafHeight: 90,

        drawTree: function()
        {
            fill(color(87, 85, 13));
            rect(this.posX, this.posY, this.width / 2, this.height - this.leafHeight);
            fill(this.leafColor);
            triangle(
                this.posX + this.width / 4 - this.leafWidth / 2, this.posY + (this.height - this.leafHeight) - this.height + this.leafHeight, 
                this.posX + this.width / 4, this.posY - this.height/2,
                this.posX + this.width / 4 + this.leafWidth / 2, this.posY + (this.height - this.leafHeight) - this.height + this.leafHeight,
            );
            triangle(
                this.posX + this.width / 4 - this.leafWidth / 2, this.posY - this.leafHeight/4 + (this.height - this.leafHeight) - this.height + this.leafHeight, 
                this.posX + this.width / 4, this.posY - this.leafHeight,
                this.posX + this.width / 4 + this.leafWidth / 2, this.posY - this.leafHeight/4 + (this.height - this.leafHeight) - this.height + this.leafHeight,
            )
        }
    }
}



function draw()
{
    background(0);
    fill(0,250, 10);
    rect(0, height - 40, width, 40);
    tree.drawTree();
}