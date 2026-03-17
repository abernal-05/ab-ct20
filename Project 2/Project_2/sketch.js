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

var sounds = [];

  function preload() {
    var sound1 = loadSound('D-note.wav');
	sounds.push(sound1);
    var sound2 = loadSound('E-note.wav');
    sounds.push(sound2);
    var sound3 = loadSound('FSharp.wav');
    sounds.push(sound3);  
    var sound4 = loadSound('G-note.wav');
    sounds.push(sound4);
    var sound5 = loadSound('A-Note.wav');
    sounds.push(sound5);
    var sound6 = loadSound('B-Note.wav');
    sounds.push(sound6);
    var sound7 = loadSound('CSharp.wav');
    sounds.push(sound7);
    var sound8 = loadSound('Final-D.wav');
    sounds.push(sound8);
  }

function keyTyped() {   
	if (key == 'f') {
	sounds[2].play();
    fill('#FAC7BA');
    circle(275,500,25);
    console.log("Sound played")
    }
    if (key == 'g') {
      sounds[3].play();
      fill('#BEFFC1');
      circle(375,500,25);
      console.log("Sound played")
    } 
    if (key == 'e') {
	 sounds[1].play();
    fill('#B5E8FA');
    circle(180,668,25);
      console.log("Sound played")
    }     
    if (key == 's') {
      sounds[7].play();
      fill('#FEB7FE');
      circle(800,500,25);
      console.log("Sound played")
    }  
    if (key == 'a') {
      sounds[4].play();
      fill('#FFF3C7');
      circle(485,500,25);     
      console.log("Sound played")
    }
    if (key == 'b') {
      sounds[5].play();
      fill('#BDB4FF');
      circle(605,500,25);
      console.log("Sound played")
    }
    if (key == 'c') {
      sounds[6].play();
      fill('#9ACCBC');
      circle(700,500,25);
        console.log("Sound played")
    }
    if (key === 'd') {
    sounds[0].play();
    fill('#FEB7FE');
    circle(90,680,25);
    console.log("Sound played")
    }
 }