
var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 20; i++) {
    balls[i] = {
      x: random(0, width),
      y: random(0, height),
      dy: 0,
      display: function () {
        circle(this.x, this.y, 30);
        stroke(225);
      }
    }
  }
}

function draw() {
  colorMode(RGB)
  background(200, 100, 150);

  for (var i = 0; i < 10; i++) {
    balls[i].x += balls[i].dy;
    balls[i].dy += 5;
    balls[i].display();
    d = random(0, 60)
    circle(balls[i].x, balls[i].y, d);

    if (balls[i].x >= width) {
      balls[i].dy = -0.96 * balls[i].dy
    }

    if (balls[i].x <= 0) {
      balls[i].dy = 0.96 * balls[i].dy
    }
  }
}
function mousePressed() {
  if (mouseIsPressed) {
    colorMode(RGB);
    a = random(225);
    b = random(225);
    c = random(225);
    fill(a, b, c);
  }
}

class Ball {
  constructor(x, y) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.display = function () {
      stroke(225);
      circle(this.x, this.y, 20);
    }
  }
}
