// macros

function setup() {
  createCanvas(g.artboard.w, g.artboard.h)
  background(230);
  fill(170);

  // learn a bit of processing!

  // Try out our "tiles" library <_rightOf>, <_below> ( thanks dxnn :)

  // How a bout some macros? infix macros...

}


function draw() {
  let shapes = linearize(shape_tree)
  shapes.forEach(draw_shape)
}
