import * as THREE from 'three';

const spaceImage = new THREE.TextureLoader().load("./public/textures/space.png");
const earthTexture = new THREE.TextureLoader().load("./public/textures/earth.jpg");
const moonTexture = new THREE.TextureLoader().load("./public/textures/moon.png");

let scene = new THREE.Scene();
scene.background = spaceImage;

let camera = new THREE.OrthographicCamera(-160, 160, 90, -90);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
document.body.appendChild(renderer.domElement);

let light = new THREE.PointLight(0xffffff, 1.0);
light.position.set(60, 20, 100);
light.castShadow = true;
scene.add(light);

var earthGeometry = new THREE.SphereGeometry(7, 140, 100);
var earthMaterial = new THREE.MeshPhongMaterial({
	map: earthTexture,
	flatShading: true,
	shininess: 0
});
var earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.castShadow = true;
earth.receiveShadow = true;

var moonGeometry = new THREE.SphereGeometry(2, 50, 50);
var moonMaterial = new THREE.MeshPhongMaterial({
	map: moonTexture,
	flatShading: true,
	shininess: 0
});
var moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.castShadow = true;
moon.receiveShadow = true;

moon.position.x = 0;
moon.position.y = 3;
moon.position.z = -12;

var earthGravityGroup = new THREE.Group();
earthGravityGroup.add(earth);
earthGravityGroup.add(moon);
scene.add(earthGravityGroup);

earthGravityGroup.rotation.x = 0.5;

var sunGeometry = new THREE.SphereGeometry(50, 28, 20);
var sunMaterial = new THREE.MeshBasicMaterial({
	color: 0xFFB724,
	wireframe: true,
});
var sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

sun.position.x = 0;
sun.position.y = 0;
sun.position.z = 160;

camera.position.x = 60;

camera.lookAt(earth.position);

function animate(): void {
	requestAnimationFrame(animate)
	render()
}

function render(): void {
	let timer = 0.002 * Date.now()
	earth.rotation.y += 0.01;
	earthGravityGroup.rotation.y += 0.01;
	sun.rotation.y += 0.001;
	renderer.render(scene, camera)
}

animate()
