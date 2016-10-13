function setup() {
  createCanvas( windowWidth, windowHeight);
}

function draw() {
  fill(mouseY*.4, 255, mouseX*.3, 50);
  rect( mouseX , mouseY , 100 , 100 );
}
