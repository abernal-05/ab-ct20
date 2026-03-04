function cShrp() {
  //staff-note
  fill('#9ACCBC');
  stroke('black');
  strokeWeight(4);
  circle(700,628,18);
  
  
  var sounds = [];

  function preload() {
    var sound7 = loadSound('CSharp.wav');
    sounds.push(sound7);
    }

  function keyTyped() {    
    if (key == 'c') {
      sounds[6].play();
      fill('#9ACCBC');
      circle(700,500,25);
        console.log("Sound played")
    }
  }
}
