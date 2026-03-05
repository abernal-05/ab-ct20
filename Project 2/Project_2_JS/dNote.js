function dNote() {
  //staff-note
  fill('#FEB7FE');
  stroke('black');
  circle(90,680,18);
  strokeWeight(3);
  
  var sounds = [];

  function preload() {
	var sound1 = loadSound('D-note.wav');
	sounds.push(sound1);
  }

 function keyTyped() {
    if (key === 'd') {
    //audio
    sounds[0].play();
    // circle
    fill('#FEB7FE');
    circle(90,680,25);
    console.log("Sound played")
    }
 }
}


