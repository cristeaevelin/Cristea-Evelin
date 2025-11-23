import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";

export default function Scene() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas camera={{ position: [0, -2, 6], fov: 50 }}>
        <Sphere />
      </Canvas>
    </div>
  );
}
