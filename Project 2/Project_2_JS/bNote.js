function bNote() {
  //staff-note
  fill('#BDB4FF');
  stroke('black');
  circle(605,635,18);
  strokeWeight(3); 
  
  var sounds = [];

  function preload() {
    var sound6 = loadSound('B-Note.wav');
    sounds.push(sound6);
  }

function keyTyped() {    
    if (key == 'b') {
      sounds[5].play();
      fill('#BDB4FF');
      circle(605,500,25);
      console.log("Sound played")
    }
  }
}

