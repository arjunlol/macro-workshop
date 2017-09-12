// macros

macro _below_ {
  rule infix {$lhs | $rhs} => {
    below($lhs, $rhs)
  }
}

macro _right_ {
  rule infix {$lhs | $rhs} => {
    right($lhs, $rhs)
  }
}

function setup() {
  createCanvas(g.artboard.w, g.artboard.h)
  background(230);
  fill(170);
}


function draw() {
  let shapes = linearize(shape_tree)
  shapes.forEach(draw_shape)
}
