function aNote() {
  //staff-note
  fill('#FFF3C7');
  stroke('black');
  circle(485,645,18);
  strokeWeight(3); 
  
  
var sounds = [];

  function preload() {
     var sound5 = loadSound('A-Note.wav');
    sounds.push(sound5);
  }

function keyTyped() {   
    if (key == 'a') {
      sounds[4].play();
      fill('#FFF3C7');
      circle(485,500,25);
      
      console.log("Sound played")
    }
  }
}

