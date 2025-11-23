import { useRef, useMemo } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import fragmentShader from "../shaders/wave.frag";
import vertexShader from "../shaders/wave.vert";


const DEFAULT_COLOUR_PALETTE = [
  new Vector3(1.0, 0.5, 0.5),  
  new Vector3(0.5, 0.4, 0.6),        
  new Vector3(0.0, 0.5, 0.5),    
  new Vector3(0.5, 0.4, 0.6),       
];

const INITIAL_UNIFORMS = {
  uTime: 0,
  uScrollProgress: 0,
  uColourPalette: DEFAULT_COLOUR_PALETTE,
  uShowGrid: true,
  uGridSize: 24,
  uBackgroundColor: new Vector3(0.1216, 0.1137, 0.1098),
};

const BackgroundFAQMaterial = shaderMaterial(
  INITIAL_UNIFORMS,
  vertexShader,
  fragmentShader
);

extend({ BackgroundFAQMaterial });

const BackgroundFAQ = () => {
  const { viewport } = useThree();

  const planeWidth = useMemo(
    () => Math.round(viewport.width + 2),
    [viewport.width]
  );
  const planeHeight = useMemo(
    () => Math.round(viewport.height * 2),
    [viewport.height]
  );
  const planeSize = useMemo(
    () => Math.max(planeWidth, planeHeight),
    [planeWidth, planeHeight]
  );
  const planeSegments = useMemo(() => planeSize * 8, [planeSize]);

  const shaderMaterialRef = useRef();

  useFrame(({ clock }) => {
    if (!shaderMaterialRef.current) return;
    shaderMaterialRef.current.uTime = clock.elapsedTime;
  });

  return (
    <mesh
    position={[0, 0, 0]} // TRICHIU: aproape lipit de camera
rotation={[0, 0, 0]}

    >
     <planeGeometry args={[viewport.width * 1.2, viewport.height * 1.2, 320, 320]} />
      <backgroundFAQMaterial
        ref={shaderMaterialRef}
        key={BackgroundFAQMaterial.key}
        uTime={0}
        uScrollProgress={0}
        uColourPalette={DEFAULT_COLOUR_PALETTE}
        uShowGrid={true}
        uGridSize={24}
        depthWrite={true}
        uOpacity={1.2}
      />
    </mesh>
  );
};

export default BackgroundFAQ;
