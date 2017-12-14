import * as THREE from 'three';

export default function createEarth() {
    const texture = new THREE.TextureLoader().load("./public/textures/earth.jpg");

    const geometry = new THREE.SphereGeometry(7, 140, 100);
    const material = new THREE.MeshPhongMaterial({
        map: texture,
        flatShading: true,
        shininess: 0
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return mesh;
};
