import * as THREE from 'three';

export default function createScene() {
    const spaceImage = new THREE.TextureLoader().load("./public/textures/space.png");
    
    const scene = new THREE.Scene();
    scene.background = spaceImage;

    const light = new THREE.PointLight(0xffffff, 1.0);
    light.position.set(60, 20, 100);
    light.castShadow = true;
    scene.add(light);

    return scene;
};
