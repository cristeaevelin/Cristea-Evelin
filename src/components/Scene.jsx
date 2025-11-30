// Scene.jsx
import { Canvas } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import Sphere from "./Sphere";

export default function Scene() {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  return (
    <div ref={ref} className="absolute inset-0 z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, -2, 6], fov: 50 }}
        gl={{ powerPreference: "high-performance" }}
      >
        <Sphere inView={inView} />
      </Canvas>
    </div>
  );
}
