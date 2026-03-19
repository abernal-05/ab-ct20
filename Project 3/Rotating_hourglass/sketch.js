// Artwork sources:
// https://www.yoshitomonara.org/en/
// https://www.linavonti.com/prints
// https://www.janainatschape.net/2009-2005
//https://alekustn.darkroom.com/collections/small-sizes

//TO-DO
//Code Random-Crop function that picks from list
//https://stackoverflow.com/questions/20496746/random-image-display-without-repeat-with-javascript
//marquee function for dynamic text?

function setup() {
  createCanvas(600, 450);
}

function draw() {
  background(220);
  Recycled();
  frame01();
  frame02();
  frame03();
  frame04();
  frame05();
  frame06();
}

//Assigned prints to an array
var artwork = [];

function preload() {
  img = loadImage('https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/AdobeStock_231528747.jpeg');
  console.log('image loaded');
  
  var image1 = loadImage('https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/Angel.jpg');
  artwork.push(image1);
  var image2 = loadImage('https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/DoNotDisturb.jpg');
  artwork.push(image2);
  var image3 = loadImage('https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/deadofnight.jpg');
  artwork.push(image3);
  var image4 = loadImage('https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/MoonBlossom.webp');
  artwork.push(image4);
  var image5 = loadImage('https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/Moonlight.webp');
 artwork.push(image5);
  var image6 = loadImage('https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/alekustn01.jpg');
  artwork.push(image6);
  var image7 = loadImage('https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/alekustn02.jpg');
  artwork.push(image7);
  var image8 = loadImage('https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/alekustn03.jpg');
  artwork.push(image8);
  var image9 = loadImage('https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/image-asset.webp');
  artwork.push(image9);
  var image10 = loadImage('https://raw.githubusercontent.com/abernal-05/ab-ct20/refs/heads/main/Woods.jpg');
  artwork.push(image10);
}

function Recycled() {
  paper = img.get(0,0,600,50)
  image(paper,0,400);
  fill("#5C3D57");
  text('Until next quarter',220,425);
}



//random from array
function frame01() { 
    let RandoImg = (Math.floor(Math.random() * artwork.length));       
  
    newImg = artwork[RandoImg];
  
    CropImg = newImg.get(20,60,200,200)
    image (CropImg,0,0);  
  }
function frame02() {
    let RandoImg = (Math.floor(Math.random() * artwork.length));       
  
    newImg = artwork[RandoImg];
  
    CropImg = newImg.get(220,60,200,200)
    image (CropImg,0,200);
  }
function frame03() {
    let RandoImg = (Math.floor(Math.random() * artwork.length));       
  
    newImg = artwork[RandoImg];
  
    CropImg = newImg.get(220,260,200,200)
    image (CropImg,200,200);
}

function frame04() {
  let RandoImg = (Math.floor(Math.random() * artwork.length));       
  
    newImg = artwork[RandoImg];
  
    CropImg = newImg.get(420,460,200,200)
    image (CropImg,200,0);
}

function frame05() {
  let RandoImg = (Math.floor(Math.random() * artwork.length));       
  
    newImg = artwork[RandoImg];
  
    CropImg = newImg.get(620,660,200,200)
    image (CropImg,400,0);
}

function frame06() {
  let RandoImg=(Math.floor(Math.random()*artwork.length));
  newImg = artwork[RandoImg];
  
  CropImg = newImg.get(620,660,200,200)
  image (CropImg,400,200);
}

