function setup() {
  createCanvas( windowWidth, windowHeight);
}

function draw() {
  fill(0, 255, mouseX*.3, 50);
  rect( mouseX , mouseY , 100 , 100 );
}
