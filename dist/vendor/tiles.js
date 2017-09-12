// *** Globals
var g = {
  size: 50,
  squareSize: 50,
  artboard: { w: window.innerWidth, h: window.innerHeight }
}

//////////////////////////////////////////////////

// *** Shape Creation and Displaying

let shape_tree = {}

function shape() {
  return { x:300, y:300, dx:0, dy:0, a:0, b: g.squareSize, l: g.squareSize, r: 0, children: [] }
}

function square() {
  let s = shape()
  s.type = 'square'
  return s
}

function circle() {
  let s = shape()
  s.type = 'circle'
  return s
}

function draw_shape(s) {
  let shapes = { square: s => rect(s.x, s.y, g.size, g.size)
               , circle: s => ellipse(s.x+g.size/2, s.y+g.size/2, g.size, g.size)
               }
  return (shapes[s.type]||(x=>x))(s)
}


// *** Positional Prepositions

/* NOTE: Preposition functions may receive funcs or objects as params: ~square~ || return of ~square()~
 * This is to accomodate that SJS cannot handle macros being adjance to parens, as parens are delimiters.
 * so depending on the level of nesting of a preposition; it may receive a shape function or the result of it
 */
function _below(st1, st2) {
  let shape1 = extractShape(st1)
  let shape2 = extractShape(st2)
  shape1.dx = 0
  shape1.dy = shape2.b + shape1.a
  shape2.children.push(shape1)
  return fix_shape(shape2)
}

function _rightOf(st1, st2) {
  let shape1 = extractShape(st1)
  let shape2 = extractShape(st2)
  shape1.dx = shape2.r - shape1.l
  shape1.dy = 0
  shape2.children.push(shape1)
  return fix_shape(shape2)
}

// *** tree / shape manipulations

function fix_shape(s) {
  Object.assign(s, minmax(s))
  shape_tree = s // globalization is a menace
  return s
}

/**
  * are a function or an object.
 *
**/

/**
 * extractShape is used to determine if the incoming params are a function or an object.
 * To be used extensively in our preposition functions, as their inputs may vary depending if they are
 * called from within other prepositions.
 * @param {???} x - Possible function or object
 */
function extractShape(x) {
  if (typeof x === "function") {
    return x()
  } else {
    return x
  }
}

function deep_clone(o) {
  try { return JSON.parse(JSON.stringify(o)) } catch(e) { return {} }
}

function reduce_tree(tree, fun, acc) {
  if(!tree) return false
  acc = fun(acc, tree)
  if(!tree.children) return true
  return tree.children.forEach(node => reduce_tree(node, fun, deep_clone(acc)))
  // THINK: deep_cloning here replaces the acc each time we come back up, which is
  //        good for linearizing but bad for minmaxing.
}

function minmax(tree) {
  let sizes = {a:0, b:0, l:0, r:0}
  reduce_tree(tree, (acc, node) => {
    // too tired to unify sizes and acc
    sizes.a = Math.min(sizes.a, node.dy)
    sizes.r = Math.min(sizes.r, node.dx)
    sizes.b = Math.max(sizes.b, node.dy + g.squareSize)
    sizes.l = Math.max(sizes.l, node.dx + g.squareSize)
    return sizes
  }, 0)
  return sizes
}

function linearize(tree) {
  let nodes = [] // because it's 2:00am
  tree = deep_clone(tree)

  reduce_tree(tree, (acc, node) => {
    // now we mutate like it's 1999
    node.x = acc.dx += node.dx
    node.y = acc.dy += node.dy

    nodes.push(node)

    return acc
  }, {dx:tree.x, dy:tree.y})

  return nodes
}
