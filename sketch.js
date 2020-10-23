let x0, y0;
let dy0 = 0;

let x1, y1;
let dy1 = 0

let ball0;
let ball1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball0 = {
    x: random(width),
    y: random(height),
    dy: 0
  }
  // x0 = random(width);
  // x1 = random(width);
  // y0 = random(0,5);
  // y1 = random(0,300);

  ball1 = {
    x: random(width),
    y: random(height),
    dy: 0
  }
}


function draw() {
  background(200);
  ball0.y += ball0.dy;
  ball0.dy += 0.3;
  circle(ball0.x,ball0.y,30);

  ball1.y += ball1.dy;
  ball1.dy += 0.3;
  circle(ball1.x,ball1.y,30);

  if (ball0.y >= height) {
    ball0.dy = -0.95 * ball0.dy;
  }

  if (ball1.y >= height) {
    ball1.dy = -0.95 * ball1.dy;
  }
}
