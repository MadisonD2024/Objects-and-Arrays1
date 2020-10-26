// let x0, y0;
// let dy0 = 0;

// let x1, y1;
// let dy1 = 0

let balls = [];
let ball0;
let ball1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  balls = [
  ball0 = {
    x: random(0, 10),
    y: random(height),
    dy: 0
  },
  ball1 = {
    x: random(0, 10),
    y: random(height),
    dy: 0
  }
]

    // x0 = random(width);
  // x1 = random(width);
  // y0 = random(0,5);
  // y1 = random(0,300);

}


function draw() {
  background(200);
for (let i = 0; i < balls.length; i++) {
  circle(balls[i].x,balls[i].y,30) }

  // balls.x += balls.dy;
  // balls.dy += 0.3;
  // circle(balls.x,balls.y,30);

  ball0.x += ball0.dy;
  ball0.dy += 5;
  circle(ball0.x,ball0.y,30);

  ball1.x += ball1.dy;
  ball1.dy += 5;
  circle(ball1.x,ball1.y,30);

  // if (balls.x >= width) {
  //   balls.dy = -0.95 * balls.dy; }

  if (ball0.x >= width) {
    ball0.dy = -0.96 * ball0.dy
  }

  if (ball1.x >= width) {
    ball1.dy = -0.96 * ball1.dy
  }

    if (ball0.x <= 0) {
      ball0.dy = 0.96 * ball0.dy
    }
  
    if (ball1.x <= 0) {
      ball1.dy = 0.96 * ball1.dy
    }

    // if (ball0.x >= width) {
    //   ball0.dy = 0.95 * ball0.dy
    // }
  
    // if (ball1.x >= width) {
    //   ball1.dy = 0.95 * ball1.dy; }

    // if (ball0.x >= width) {
    //   ball0.dy = 0.95 * ball0.dy;
    // }
  
    // if (ball1.x >= width) {
    //   ball1.dy = 0.95 * ball1.dy;
  } 
  function mousePressed() {
    if (mouseIsPressed) {
      colorMode(RGB);
      a = random(225);
      b = random(225);
      c = random(225);
      fill(a,b,c);
    }
  }
// }