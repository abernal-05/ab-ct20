//synth instrument 
//Project 2: reference - https://editor.p5js.org/owenroberts/sketches/rk89pTomm

function setup() {
  createCanvas(1366, 768);
}

function draw() {
  background('white');
  
  musicStaff();
  dNote();
  eNote();
  fShrp();
  aNote();
  bNote();
  gNote();
  cShrp();
  dNote2();
}

//music staff

function musicStaff() {
  
  //rectangle
  fill('white')
  stroke('black');
  strokeWeight(4);
  rect(60,600,800,70);
  
  
  //staff lines
  stroke('black');
  strokeWeight(4);
  line(60,653,860,653);
  
  stroke('black');
  strokeWeight(4);
  line(60,636,860,636);
  
  stroke('black');
  strokeWeight(4);
  line(60,618,860,618);
  
}


