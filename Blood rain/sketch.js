

var drops = [];
var bubbles = [];
function setup() {
  createCanvas(1450, 900);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
  for (var i = 0; i < 4; i++) {
    bubbles[i] = new Bubble(); 
  }
}

function Bubble(){
  this.x = random(0, width);
  this.y = random(0, height);
  
  this.display = function() {
   stroke(255);
    strokeWeight(0);
    fill(255 ,51,51 );
    ellipse(this.x, this.y, 48, 48);
    ellipse(this.x+20,this.y+20,48,48);
    ellipse(this.x+40,this.y+20,48,48);
    ellipse(this.x+40,this.y-20,48,48);
    ellipse(this.x+30,this.y-20,48,48);
    ellipse(this.x+50,this.y,48,48);
  }
  
  this.move = function() {
    this.x = this.x += 1 ;
    this.y = this.y + random(-1, 1);
    
    if(this.x >= width){
    this.x = 0;
    }
  }
}


function mouseClicked(){
  bubbles.push(new Bubble());
}

function keyPressed(){
  bubbles.splice(Bubble.length-1,1);
}

function draw() {
  background(255, 153, 153);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

