let list_ellipse = [];
function setup()
{
	createCanvas(600, 600);
}

function draw()
{
	background(0, 0, 0);
	fill(255, 255, 255);
	if (list_ellipse.length > 0)
		for(let i = 0; i < list_ellipse.length; i++)
			ellipse(list_ellipse[i].mouseX, list_ellipse[i].mouseY, list_ellipse[i].r);
	ellipse(mouseX, mouseY, 100, 100);
}

function mousePressed()
{
	list_ellipse.push({'mouseX':mouseX, 'mouseY':mouseY, r:100});
}