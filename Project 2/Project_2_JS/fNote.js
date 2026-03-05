function fShrp() {
  //staff-note
  fill('#FAC7BA');
  stroke('black');
  circle(275,660,18);
  strokeWeight(3);
  
  
var sounds = [];
  function preload() {
    var sound3 = loadSound('FSharp.wav');
    sounds.push(sound3);  
  }

function keyTyped() {   
	if (key == 'f') {
	sounds[2].play();
    fill('#FAC7BA');
    circle(275,500,25);
      console.log("Sound played")
	}
}
}
