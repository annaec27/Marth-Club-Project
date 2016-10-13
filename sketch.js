function setup() {
  createCanvas( windowWidth, windowHeight);
}

function draw() {
  fill(144, mouseY*.3, mouseX*.3, 50);
  rect( mouseX , mouseY , 100 , 100 );
}
