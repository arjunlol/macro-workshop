function setup() {
    createCanvas(g.artboard.w, g.artboard.h);
    background(230);
    fill(170);
    _below(// _below(_below(square, square), _below(square, square))
    // _rightOf(square, square)
    _rightOf(square, square), _below(square, circle));
}
function draw() {
    let shapes = linearize(shape_tree);
    shapes.forEach(draw_shape);
}