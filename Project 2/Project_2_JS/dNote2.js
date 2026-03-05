function dNote2() {
  //staff-note
  fill('#FEB7FE');
  stroke('black');
  strokeWeight(4);
  circle(800,620,18);

  var sounds = [];

  function preload() {  
    var sound8 = loadSound('Final-D.wav');
    sounds.push(sound8);
	}

  function keyTyped() {      
    if (key == 's') {
      sounds[7].play();
      fill('#FEB7FE');
      circle(800,500,25);
      console.log("Sound played")
    }
  }
}

