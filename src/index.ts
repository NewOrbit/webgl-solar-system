import * as THREE from 'three';

import createScene from "./scene";
import createEarth from "./objects/earth";
import createMoon from "./objects/moon";
import createSun from "./objects/sun";

const scene = createScene();

// create all the objects we wish to render

const sun = createSun();
sun.position.x = 0;
sun.position.y = 0;
sun.position.z = 160;
scene.add(sun);

const earthGravityGroup = new THREE.Group();

const earth = createEarth();
earthGravityGroup.add(earth);

const moon = createMoon();
moon.position.x = 0;
moon.position.y = 3;
moon.position.z = -12;
earthGravityGroup.add(moon);

earthGravityGroup.rotation.x = 0.5;
scene.add(earthGravityGroup);

// create our camera

const camera = new THREE.OrthographicCamera(-160, 160, 90, -90);
camera.position.x = 60;
camera.lookAt(earth.position);

// set up rendering

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
document.body.appendChild(renderer.domElement);

const animate = () => {
	requestAnimationFrame(animate);
	render();
};

const render = () => {
	earth.rotation.y += 0.01;
	earthGravityGroup.rotation.y += 0.01;
	sun.rotation.y += 0.001;
	renderer.render(scene, camera);
};

// kick off rendering

animate();
