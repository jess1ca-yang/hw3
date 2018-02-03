createCanvas(310, 310);
var counter = 0;
	while(counter < 310) {
    line(counter, 10, counter, 300)
    counter = counter + 10;
  }

counter = 10;
	while(counter < 310) {
    line(150, counter, 300, counter)
    counter = counter + 10;
  }

counter = 150;
	while(counter < 310) {
    line(0, counter, 300, counter)
    counter = counter + 10;
  }

counter = 0;
var upRight = 150;
  while(counter < 160) {
    line(0, upRight, counter, 150)
    counter = counter + 10;
    upRight = upRight + 10;
    
 }

var xDown = 10;
var yDown = 160;
while(xDown < 150) {
    line(xDown, 300, 150, yDown)
    xDown = xDown + 10;
    yDown = yDown + 10;
    
 }

counter = 160;
upRight = 160;
  while(counter < 300) {
    line(150, upRight, counter, 150)
    counter = counter + 10;
    upRight = upRight + 10;
    
 }


xDown = 150;
yDown = 150;
while(xDown < 300) {
    line(xDown, 300, 300, yDown)
    xDown = xDown + 10;
    yDown = yDown + 10;
    
 }


upRight = 290;
counterTwo = 160;
  while(counterTwo < 310) {
    line(150, upRight, counterTwo, 300)
    upRight = upRight - 10;
    counterTwo = counterTwo + 10;
    
 }



upRight = 290;
counterTwo = 160;
  while(counterTwo < 300) {
    line(counterTwo, 150, 300, upRight)
    upRight = upRight - 10;
    counterTwo = counterTwo + 10;
    
 }
