import { useInView } from "react-intersection-observer";

export default function Lazy3D({ children }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return <div ref={ref}>{inView ? children : null}</div>;
}
