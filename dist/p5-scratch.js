// What were aiming for:
// example: square(150, 200) below square(150, 150) -> shapes.square[0]

// globals -------------------------------

var g = {
  squareSize: 50,
  artboard: { w: window.innerWidth, h: window.innerHeight }
};

var shapes = {
  squares: []
};



// Functions ----------------------------

function createSquare(x, y) {
  shapes.squares.push({ w: g.squareSize, h: g.squareSize, x, y });
}

function drawSquare(s) {
  return rect(s.x, s.y, s.w, s.h);
}

function getLast(arr) {
  return arr[arr.length - 1]
}

function below(square2) {
  square1 = getLast(shapes.squares)
  createSquare(square1.x, square1.y + g.squareSize)
}

function above(square) {
  square1 = getLast(shapes.squares)
  createSquare(square1.x, square1.y - g.squareSize)
}

function rightOf(square2) {
  square1 = getLast(shapes.squares)
  createSquare(square1.x + g.squareSize, square1.y)
}

function leftOf(square2) {
  square1 = getLast(shapes.squares)
  createSquare(square1.x - g.squareSize, square1.y)
}

// P5 API -------------------------------

// pretend setup is where macro expansion happens: ie. eventually what happens here will be replaced
// by sweet js' `square` which is not yet created.
function setup() {
  createCanvas(g.artboard.w, g.artboard.h);
  background(150);
  fill(102);

  createSquare(
    g.artboard.w / 2 - g.squareSize / 2,
    g.artboard.h / 2 - g.squareSize / 2
  );

  // these verbs will eventually be replaced by macros : `square beside square`
  below()
  below()
  below()
  below()
  rightOf()
  above()
  above()
  above()
  above()
  above()
  above()
}

function draw() {
  shapes.squares.forEach(drawSquare);
}
