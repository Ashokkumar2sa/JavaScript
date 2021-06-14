var s;
var scl = 20;
var food;

function setup(){
  createCanvas(600,600);
  s = new Snake();
  //delay the movement of the square for arcade effect
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl); //the canvas area is made into grid by this function so that our our food can be superimposed on snake ..
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}


function draw() {
 background(0);
  s.death();
  s.update();
  s.show();
  //if snake eat the food then new location for food
  if (s.eat(food)) {
   pickLocation();
  }
  
  // food:
  fill(242,242,242);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {// various effects on key press
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW){
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW){
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }
}

function Snake() { //
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
    
  }
  
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 4) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }
  
  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {    //id distance between tail and current is less than 1 then start fresh the snake loses its length
        this.total = 0;
        this.tail = [];
      }
    }
  }
  
  this.update = function () { // To update the length of our sanke
    for (var i = 0; i < this.tail.length-1; i++) { // the position of one block of snake body is the position that the next block  has currently
      this.tail[i] = this.tail[i+1];
    }
    this.tail[this.total-1] = createVector(this.x, this.y); // adds a new block to our snake
    
    //updating our position of sanke current head(this)
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;
    //avoid snake to go out of canvas
    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }
  
  this.show = function() {
    fill(1,254,0);
    for (var i = 0; i < this.total; i++){  // giving the block a rectangle form 
     rect(this.tail[i].x,this.tail[i].y, scl, scl);
    } 
    rect(this.x, this.y, scl, scl);
  }
}
