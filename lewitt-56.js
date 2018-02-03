createCanvas(300, 300);
var counter = 0;
	while(counter < width) {
    line(counter, 10, counter, 290)
    counter = counter + 10
  }

counter = 10;
	while(counter < 310) {
    line(150, counter, 290, counter)
    counter = counter + 10
  }

counter = 150;
	while(counter < 310) {
    line(0, counter, 290, counter)
    counter = counter + 10
  }

