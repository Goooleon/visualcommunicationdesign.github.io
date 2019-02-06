var canvas;
var mic;

var elmnt = document.getElementById("content");
var scrollHoogte = elmnt.scrollHeight;
var scrollBreedte = elmnt.scrollWidth;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, scrollHoogte);
}

function setup() {
  canvas = createCanvas(windowWidth, scrollHoogte);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
   mic = new p5.AudioIn();
   mic.start();
  //background(175);
}

function keyPressed() {
  clear();
}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
   var vol = mic.getLevel();
   ellipse(width / 2, height / 2, vol * width);
}