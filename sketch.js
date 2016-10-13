function setup() {
  createCanvas( windowWidth, windowHeight);
}

function draw() {
  fill(150, 2, 10, 50);
  ellipse( mouseX , mouseY , 100 , 100 );
  fill(255, 255, 102, 150);
   ellipse(mouseX, mouseY, 50, 50);
  fill(255, 153, 51, 100);
  ellipse(mouseX, mouseY, 75, 75);
  fill(153, 255, 51, 200);
  ellipse(mouseX, mouseY, 25, 25);
}
