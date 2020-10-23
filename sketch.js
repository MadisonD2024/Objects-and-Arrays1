// let x0, y0;
// let dy0 = 0;

// let x1, y1;
// let dy1 = 0

let ball0;
let ball1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  ball0 = {
    x: random(0, 10),
    y: random(height),
    dy: 0
  }
  ball1 = {
    x: random(0, 10),
    y: random(height),
    dy: 0
  }

    // x0 = random(width);
  // x1 = random(width);
  // y0 = random(0,5);
  // y1 = random(0,300);

}


function draw() {
  background(200);
  ball0.x += ball0.dy;
  ball0.dy += 0.3;
  circle(ball0.x,ball0.y,30);

  ball1.x += ball1.dy;
  ball1.dy += 0.3;
  circle(ball1.x,ball1.y,30);

  if (ball0.x >= width) {
    ball0.dy = -0.95 * ball0.dy;
  }

  if (ball1.x >= width) {
    ball1.dy = -0.95 * ball1.dy;
  }
}
