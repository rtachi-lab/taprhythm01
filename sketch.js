let m0,m1;
let bpm = 120;
let bpb = 4;
let bardur = bpb*60.0/bpm;
let barlen = 300;

let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('click1');
}
function setup() {
  let cnv = createCanvas(400, 400);
  cnv.mousePressed(canvasPressed);
  m0 = millis();
  m1 = 0;
  stroke(0);
  strokeWeight(3);
}

function draw() {
  background(220);
  tmpnt = m1/1000/bardur;
  pos = (tmpnt-floor(tmpnt))*barlen;
  line(pos+50, 50, pos+50, 150);
}

function canvasPressed() {
  m1 = millis()-m0;
  mySound.play();
}