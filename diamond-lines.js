var counter = 2;
var xOne = 169
var xTwo = 171
while(counter < 160) {
  line(xOne, counter, xTwo, counter)
  counter = counter + 10;
  xOne = xOne - 10;
  xTwo = xTwo + 10;
}

while(counter < 330) {
  var counterDown = 170;
  var xOneDown = 10;
  var xTwoDown = 330;
  line(xOne, counter, xTwo, counter)
  counter = counter + 10;
  xOne = xOne + 10;
  xTwo = xTwo - 10;
}
