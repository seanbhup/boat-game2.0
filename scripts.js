var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 640;

document.body.appendChild(canvas);

var backgroundImage = new Image();
backgroundImage.src = "background.png";

function draw(){
	context.drawImage(backgroundImage, 0,0);
	requestAnimationFrame(draw);
}

draw();