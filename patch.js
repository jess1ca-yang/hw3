
function jessicaPatch(x, y) {
  noFill();
  stroke(238);
  fill(0, 6, 204);
  rect(x, y, 100, 100);
  
  
stroke("Red");
fill(225, 10, 112, 30);
rect(x+10, y+10, 80, 80);
rect(x+11, y+11, 80, 80);
stroke("orange");
rect(x+20, y+20, 60, 60);
stroke("225, 240, 214");
rect(x+25, y+25, 50, 50);
stroke(107, 171, 255);
  fill(211, 230, 225, 40)
  ellipse(x+50, y+50, 70, 70);
 

fill(255, 0, 0, 50);
rect(x+24, y+24, 52, 52);

rect(x+30, y+30, 40, 40);
  
  stroke(107, 171, 255);
  fill(173, 208, 255, 70);
  ellipse(x+50, y+40, 18, 18);
    
  stroke(107, 171, 255);
  ellipse(x+40, y+50, 18, 18);
  
  stroke(107, 171, 255);
  ellipse(x+60, y+50, 18, 18);
  
   stroke(107, 171, 255);
  ellipse(x+50, y+60, 18, 18);
}


jessicaPatch(50, 20);
 
jessicaPatch(width-100, height-100);
