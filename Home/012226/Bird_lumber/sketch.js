//wall drawing 583H&F
//three squares, second square
//has 2x2 grid

function setup() {
  
  createCanvas(1200, 800);
  
}

function draw() {
 //call custom funcs
  
  firstSquare();
  
  secondSquare();
  
  thirdSquare();
  
  console.log("drawing complete");
}

//first square
function firstSquare() {
  
   //black bg
  fill('black');
  square(40,20,325);
  
  //yellow square
  stroke('white');
  strokeWeight(1);
  fill('yellow');
  square(50,33,300);
  
  //grey square
  noStroke();
  fill('grey');
  square(75,58,250);
  
  //black bg
  fill('black');
  square(375,20,325);
  
  //white accent
  stroke('white');
  strokeWeight(1);
  square(387,33,300);
  
}


//second square
function secondSquare() {
  
  //q1
  noStroke();
  fill('purple');
  square(388,35,150)
  
  //q2
  noStroke();
  fill('green');
  square(537,34,150);
  
  //q3
  noStroke();
  fill('grey');
  square(388,183,150);
 
  //q4
  noStroke();
  fill('orange');
  square(537,184,149);
  
}

function thirdSquare() {
  //black bg
  fill('black');
  square(710,20,325);
  
  //yellow square
  stroke('white');
  strokeWeight(1);
  fill('purple');
  square(722,33,300);
  
  //grey square
  noStroke();
  fill('green');
  square(745,58,250);
  
}