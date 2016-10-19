function setup(){
	createCanvas(800,600);
	background(200);
	strokeWeight(2);
}

function draw(){

beginShape();//robot's body
vertex(325, 230);//up-left
vertex(470, 230);//up-right
vertex(470, 450);//down-right
vertex(325, 450);//down-left
fill(79, 123, 193);//blue
endShape(CLOSE);

beginShape();//head
vertex(350, 150);
vertex(445, 150);
vertex(445, 230);
vertex(350, 230);
fill(193, 79, 111);//red
endShape(CLOSE);

beginShape();//right-arm
vertex(470, 250);
vertex(500, 250);
vertex(540, 400);
vertex(505, 400);
fill(193, 79, 111);//red
endShape(CLOSE);

beginShape();//left-arm
vertex(325, 250);
vertex(295, 250);
vertex(260, 400);
vertex(300, 400);
fill(193, 79, 111);//red
endShape(CLOSE);

beginShape();//left-leg
vertex(350, 450);
vertex(380, 450);
vertex(380, 580);
vertex(340, 580);
fill(193, 79, 111);//red
endShape(CLOSE);

beginShape();//left-leg
vertex(445, 450);
vertex(415, 450);
vertex(440, 580);
vertex(480, 580);
fill(193, 79, 111);//red
endShape(CLOSE);

}