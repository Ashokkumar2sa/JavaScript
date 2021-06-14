
var a = 0;

var sponge = [];

function setup() {
  createCanvas(1500, 900, WEBGL);
  normalMaterial();
  var b = new Box(0, 0, 0, 400);
  sponge.push(b);
}

function mousePressed() {
  // Generate the next set of boxes
  var next = [];
  for (var i = 0; i < sponge.length; i++) {
    var b = sponge[i];
    var newBoxes = b.generate();
    next = next.concat(newBoxes);
  }
  sponge = next;
}

function draw() {
  background(51);
  rotateX(a);
  rotateY(a * 0.4);
  rotateZ(a * 0.1);

  for (var i = 0; i < sponge.length; i++) {
    sponge[i].show();
  }
  a += 0.01;
}
