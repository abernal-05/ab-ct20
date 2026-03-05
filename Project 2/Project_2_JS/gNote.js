function gNote() {
  //staff-note
  fill('#BEFFC1');
  stroke('black');
  circle(375,655,18);
  strokeWeight(3);
  
  var sounds = [];
  function preload() {
    var sound4 = loadSound('G-note.wav');
    sounds.push(sound4);   
	}

function keyTyped() {  
    if (key == 'g') {
      sounds[3].play();
      fill('#BEFFC1');
      circle(375,500,25);
      console.log("Sound played")
    }
  }
}

