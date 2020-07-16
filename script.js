var clicks = 0;
var auto = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("darkslategray");
  fill("cornflowerblue");
  
  drawTitle();
  
  textSize(15);
  text("Current Count: " + clicks, 200, 200);
  
  drawTriangle();
  drawCircle();
  drawAuto();
  
  if (auto && frameCount % 60 === 0) {
    clicks += 2;
      }
}

function drawCircle() {
  fill("cornflowerblue");
  noStroke();
  ellipse(200, 100, 100, 100);
  
  textSize(20);
  fill("darkslategray");
  text("CLICK", 200, 100);
}


function drawAuto() {
  fill("cornflowerblue");
  noStroke();
  ellipse(200, 250, 120, 80);
  
  textSize(20);
  fill("darkslategray");
  if (!auto) {
  text("Autoclicker\n25 Clicks", 200, 250);
    }
  else {
    textSize(15);
  text("You bought\nthe \nautoclicker", 200, 250);
    }
}

function drawTitle() {
  textAlign(CENTER, CENTER);
  textSize(30);
  text("CLICKER GAME", 200, 30);
}

function drawTriangle() {
  fill("cornflowerblue");
  beginShape();
  vertex(200, 300);
  vertex(225, 325);
  vertex(175, 325);
  vertex(200, 300);
  endShape();
}

function mouseClicked() {
  clicks++;
  var d = dist(mouseX, mouseY, 200, 250);
  if (d < 80 && clicks >= 25 && !auto) {
    clicks  -= 25;
    auto = true;
  }
}