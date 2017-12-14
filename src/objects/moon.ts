import * as THREE from 'three';

export default function createMoon() {
    const geometry = new THREE.SphereGeometry(2, 50, 50);
    const material = new THREE.MeshPhongMaterial({
        color: 0x999999,
        flatShading: true,
        shininess: 0
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return mesh;
};
