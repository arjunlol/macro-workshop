// our macros

// Whenever sweet.js sees `construct` it will replace it with the original syntax: `new THREE`
// The expansion of this macros is akin to a "find-and-replace";
// we aren't leveraging must of Sweet JS so much as endeavouring to make the act of writing 
// your code more pertinent to the domain you are in, or more personally understandeable to the author.
syntax construct = function(ctx) {
  return #`new THREE`
}

// TODO: syntax for loop -> "conveyor/repeater/do/loop/"



// our code

var scene = construct.Scene();
var camera = construct.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = construct.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = construct.BoxGeometry( 1, 1, 1 );
var material = construct.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = construct.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.05;
  cube.rotation.y += 0.03;

  renderer.render(scene, camera);
};

animate();