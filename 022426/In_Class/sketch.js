function setup() {
  createCanvas(400, 400);

  positions = [];

  for (let i = 0; i < 100; i++) {
    fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
    positions.push(sqr());
  }
  print(JSON.stringify(positions));
}

function sqr() {
  let x = random(0, width);
  let y = random(0, height);
  let w = random(0, width);
  square(x, y, w);
  return { x: x, y: y, width: w };
}

function draw() {
  //background(220);
}
