function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    stroke(209, 73, 60);
    fill(249, 100, 77);
  } else if (key == 'G') {
    stroke(124, 201, 80);
    fill(194, 234, 107);
  } 
  else if (key == 'B') {
    stroke(59, 135, 206);
    fill(95, 213, 252); 
  }
  else if (key == 'O') {
    stroke(234, 114, 39);
    fill(255, 156, 58); 
  }
   else if (key == 'P') {
    stroke(234, 86, 155);
    fill(255, 117, 183); 
  }
  else if (key == 'Y') {
    stroke(229, 193, 64);
    fill(255, 247, 104); 
  }
  else if (key == '1') {
    diameter = 5;
  }
  else if (key == '2') {
    diameter = 15;
  }
  else if (key == '3') {
    diameter = 30;
  }
}
