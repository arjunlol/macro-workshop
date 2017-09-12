function setup() {
    createCanvas(g.artboard.w, g.artboard.h);
    background(230);
    fill(170);
    below(below(square, circle), below(circle, circle));
}
function draw() {
    let shapes = linearize(shape_tree);
    shapes.forEach(draw_shape);
}