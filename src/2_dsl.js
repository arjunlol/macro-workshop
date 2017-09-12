// macros

function setup() {
  createCanvas(g.artboard.w, g.artboard.h)
  background(230);
  fill(170);
}


function draw() {
  let shapes = linearize(shape_tree)
  shapes.forEach(draw_shape)
}
