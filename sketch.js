
let balls = [];
let ball0;
let ball1;
let myBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    balls[i] = new Ball(width/2, height/2); }

myBall = new Ball(100,250, 50);

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
}

function draw() {
  background(200);
  for (let ball of balls) {
  myBall.update();
  myBall.display(); }

for (let i = 0; i < balls.length; i++) {
  circle(balls[i].x,balls[i].y,30) }

  ball0.x += ball0.dy;
  ball0.dy += 5;
  circle(ball0.x,ball0.y,30);

  ball1.x += ball1.dy;
  ball1.dy += 5;
  circle(ball1.x,ball1.y,30);


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
  class Ball {
    construtor(x,y,diameter) {
      this.x = 100;
      this.y = 250;
      this.diameter = 50;
    }

      update() {
      this.x = this.x + 5
      this.y = this.y + 10
      }
      display() {
        circle(this.x,this.y,this.diameter)
      }
    }