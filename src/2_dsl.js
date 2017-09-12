// macros

macro below {
  rule infix {$lhs | $rhs} => {
    _below($lhs, $rhs)
  }
}

macro rightOf {
  rule infix {$lhs | $rhs} => {
    _rightOf($lhs, $rhs)
  }
}

function setup() {
  createCanvas(g.artboard.w, g.artboard.h)
  background(230);
  fill(170);


  // _below(_below(square, square), _below(square, square))
  // _rightOf(square, square)

  (square rightOf square) below (square below circle)
}


function draw() {
  let shapes = linearize(shape_tree)
  shapes.forEach(draw_shape)
}
