 // Sphere.jsx
import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";

import vertexShader from "../shaders/waveSphere.vert";
import fragmentShader from "../shaders/wave.frag";

const SphereMaterial = shaderMaterial(
  {
    uTime: 0,
    uScrollProgress: 0,

    uColourPalette: [
      new THREE.Vector3(0.49, 0.20, 0.80),
      new THREE.Vector3(0.12, 0.10, 0.11),
      new THREE.Vector3(0.50, 0.47, 0.97),
      new THREE.Vector3(0.46, 0.12, 0.47),
    ],

    uShowGrid: true,
    uGridSize: 24,
    uBackgroundColor: new THREE.Vector3(0.1216, 0.1137, 0.1098),
    uFade: 1.0,
  },
  vertexShader,
  fragmentShader
);

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function Sphere() {
  const mesh = useRef();
  const material = useMemo(() => new SphereMaterial(), []);
  const geometry = useMemo(() => new THREE.SphereGeometry(2, 256, 256), []);


  useFrame(({ clock }) => {
    material.uTime = clock.elapsedTime;
  });

  return <mesh ref={mesh} geometry={geometry} material={material} />;
}
