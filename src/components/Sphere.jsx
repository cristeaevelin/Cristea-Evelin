// Sphere.jsx
import { useRef, useMemo } from "react";
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

export default function Sphere({ inView = true }) {
  const meshRef = useRef(null);

  // 🔥 mult mai puțini vertecși, aproape același look
  const geometry = useMemo(
    () => new THREE.SphereGeometry(2, 64, 64),
    []
  );

  const material = useMemo(() => new SphereMaterial(), []);

  useFrame(({ clock }) => {
    if (!inView) return;        // nu mai animăm când sfera nu e în viewport
    material.uTime = clock.elapsedTime;
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}
