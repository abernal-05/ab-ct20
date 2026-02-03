//Help from Coding Tutorial by Patt Vira
//line for 0
//fix hour assignment



let waves;

function setup() {
  createCanvas(400, 400);
  background("#A5C7E8");
  angleMode(DEGREES);
  waves = new Pack(1, 0, color("#6D85E6"));
}

function draw() {
  background("#A5B2E8");
  waves.display();
  Line01();
  Line02();
  Line03();
  Line04();
  Line05();
}

function Line01() {
  fill("#6D85E6");
  noStroke();
  text('0',205,400);
  strokeWeight(2.5);
  stroke("#D5C5E8");
  line(200,0,200,400);
}

function Line02() {
  fill("#6D85E6");
  noStroke();
  text('-1',102,400);
  strokeWeight(2.5);
  stroke("#D5C5E8");
  line(100,0,100,400);
}

function Line03() {
  fill("#6D85E6");
  noStroke();
  text('4',305,400);
  strokeWeight(2.5);
  stroke("#D5C5E8");
  line(300,0,300,400);
}

function Line04() {
  fill("#6D85E6");
  noStroke();
  text('-2',52,400);
  stroke("#D5C5E8");
  strokeWeight(2.5);
  line(50,0,50,400);
}

function Line05() {
  fill("#6D85E6");
  noStroke();
  text('6',385,400);
  strokeWeight(2.5);
  stroke("#D5C5E8");
  line(395,0,395,400);
}