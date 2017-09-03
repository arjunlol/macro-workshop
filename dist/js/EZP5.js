var a_10 = 0;
function setup() {
  background(0);
  noStroke();
  fill(102);
}
function draw() {
  rect(a_10++ % width, 10, 2, 80);
}