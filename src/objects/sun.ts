import * as THREE from 'three';

export default function createSun() {
    const geometry = new THREE.SphereGeometry(50, 28, 20);
    const material = new THREE.MeshBasicMaterial({
        color: 0xFFB724,
        wireframe: true,
    });
    
    return new THREE.Mesh(geometry, material);
};
