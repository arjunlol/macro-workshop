var scene_3 = new THREE.Scene();
var camera_4 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1e3);
var renderer_5 = new THREE.WebGLRenderer();
renderer_5.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer_5.domElement);
var geometry_6 = new THREE.BoxGeometry(1, 1, 1);
var material_7 = new THREE.MeshBasicMaterial({ color: 6528e1 });
var cube_8 = new THREE.Mesh(geometry_6, material_7);
scene_3.add(cube_8);
camera_4.position.z = 5;
var animate_9 = function () {
  requestAnimationFrame(animate_9);
  cube_8.rotation.x += .05;
  cube_8.rotation.y += .03;
  renderer_5.render(scene_3, camera_4);
};
animate_9();