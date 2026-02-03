//wall art 1261, circles and/or rings

let w = 250;

function setup() {
  createCanvas(300, 300);
}


function draw() {
  
  spirals();

}  
  
function spirals() {

 stroke("black");
  strokeWeight(15);
  while(w >= 25) { 
    ellipse(width/2,height/2,w,w);
    w = w-50;
  }

}
  

