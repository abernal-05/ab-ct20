function eNote() {
  //staff-note
  fill('#B5E8FA');
  stroke('black');
  circle(180,668,18);
  strokeWeight(3);
  
  var sounds = [];

  function preload() {   
    var sound2 = loadSound('E-note.wav');
    sounds.push(sound2);
  }

function keyTyped() {  
    if (key == 'e') {
	 sounds[1].play();
    fill('#B5E8FA');
    circle(180,668,25);
      console.log("Sound played")
	}
  }
}
