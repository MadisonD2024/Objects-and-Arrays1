let x, y;
let dy = 0;

// Code in this function is run once, when the sketch is started.
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = 0;
}

// Code in this function is run once per frame. If it draws the same thing each
// time, the sketch is a static image. If it draws something different on
// different frames, the sketch is an animation.
function draw() {
  background(200);
  y += dy;
  dy += 0.3;
  circle(x,y,30);

  if (y >= height) {
    dy = -0.95 * dy;
  }
}
