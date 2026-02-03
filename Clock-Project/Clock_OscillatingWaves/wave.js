//3:53am 2ft, 9:55am 6ft, 4:59pm -1ft, 11:39 4ft 

const d = new Date();
let TideHeight = d.getHours();

console.log(TideHeight);



class Wave {
  constructor(shift, color) {
    this.x = [];
    this.y = [];
    this.size = 10;
    this.num = 55;
    
    if (0 < TideHeight <= 4) 
    {this.amplitude = 85;} else if (4 < TideHeight <=10)
    {this.amplitude = 390;} else if (10<= TideHeight<=16) 
    {this.amplitude = 95;} else if (16<TideHeight<=0) 
    {this.amplitude = 250;}
    
    
    this.angle = 0;
    this.period = 1.5;
    
    this.shift = shift;
    this.color = color;
  }
  
  displayWave() {
    noStroke();
    fill(this.color);
    for (let i=0; i<this.num; i++) {
      this.angle = i/(this.num-1) * 360 * this.period;
      this.x[i] = this.amplitude*cos(this.angle + this.shift);
      this.y[i] = i*this.size;
      rect(this.x[i], this.y[i], this.size, this.size);
    }
    this.shift += 1;
  }
}