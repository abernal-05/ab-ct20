let img;
function preload(){
  img = loadImage("https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/Home/kiki.png")
  console.log("Kiki loaded")
}

function setup(){
  createCanvas(4000, 4000);
}

function draw() {
  background("#DFB9D8");
  image(img,mouseX,mouseY,200,200)
  fill("#5C3D57")
  strokeWeight(6)
  stroke("#B18FAB") 
  text('Kiki!',mouseX,mouseY,1000);
  noCursor()
}