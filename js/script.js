let drum;
let kick;
let knock;
let step;
let rub;
let beat;
let beats;
let kickSound;
let rubSound;
let stepSound;

function preload(){
  drum=loadImage("assets/default.png");
  kick=loadImage("assets/kick.png");
  knock=loadImage("assets/knock.png");
  step=loadImage("assets/step.png");
  rub=loadImage("assets/rub.png");
  beat=loadSound("assets/beat.mp3");
  beats=loadSound("assets/sound.m4a");
  kickSound=loadSound("assets/kick2short.m4a");
  rubSound=loadSound("assets/rubdrum.m4a");
  stepSound=loadSound("assets/stepdrum.m4a");
}

function setup() {
  let canvas=createCanvas(windowWidth,windowHeight);
  canvas.parent="myContainer";

}

function draw() {
  background(255);

  push();
  image(drum,650,0,700,650);
  //image(this.kick,-200,0,100,100);
  pop();

  if (keyIsPressed==true && key=="k" && kickSound.isPlaying()==false){
    image(kick,900,330,90,100);
    kickSound.play();

  }else if(keyIsPressed==true && key=="n"){
    image(knock,200,200);
  }else if(keyIsPressed==true && key=="r" && rubSound.isPlaying()==false){
    image(rub,650,0,700,650);
    rubSound.play();
  }else if(keyIsPressed==true && key=="s" && stepSound.isPlaying()==false){
    image(step,650,0,700,650);
    stepSound.play();
  }
}



function kickPlay(){
  image(kick,150,200,70,70);
  kickSound.play();
}
