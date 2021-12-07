
function preload(){
  let img=loadImage("assets/handsup.jpg");

}

function setup() {
  let canvas=createCanvas(windowWidth,windowHeight);
  canvas.class("background");
}

function draw() {
  background(249, 231, 159);
  image(img,0,0,windowWidth,windowHeight);
}
