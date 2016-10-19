//simple shapes (ellipse, rect, arc, line)

function setup() {
	createCanvas(800,600);
	background(200);
	strokeWeight(2);
}


function draw() {
	textSize(32);
	background(100);
	text("X:" + mouseX, 10, 30);
	text("Y:" + mouseY, 10, 60);

	ellipse(400, 200, 200, 200);
	ellipse(360, 170, 40, 40);
	ellipse(435, 170, 40, 40);
	ellipse(360, 170, 10, 10);
	ellipse(435, 170, 10, 10);
	
	rect(350, 300, 100, 180);

	arc(400, 230, 80, 80, 0, PI, CHORD);

	rect(350, 500, 40, 90);

	rect(410,500,40,90);

	rect(460,340,100,25);

	rect(240,340,100,25);



}