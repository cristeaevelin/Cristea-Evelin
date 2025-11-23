import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Scene from "../components/Scene";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const pRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { filter: "blur(10px) brightness(0.5)", opacity: 0 },
      {
        filter: "blur(0px) brightness(1)",
        opacity: 1,
        duration: 1.6,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      subRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        delay: 0.4,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        delay: 0.7,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="h-screen relative">
         <Scene />
      <div className="relative top-0 h-screen w-full flex justify-center pt-8 px-4 bg-[#1f1d1c]">
        <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-40 blur-[120px]"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-purple-500 w-1/2 h-1/2 rounded-full opacity-50 blur-[90px]"></div>
        </div>
              

        <div className="w-[93vw] z-10">
          <div className="relative z-0 top-0 flex flex-col items-center text-center px-6">
            <h1  ref={titleRef} className="text-[315px] tracking-[5.5px] font-druk mb-4 text-[#F6F6E2] -mt-[30px] relative">
              CRISTEA
              <span ref={subRef} className="absolute left-1/2 -translate-x-1/2 bottom-[30px] text-[200px] font-key text-[#1f1d1c] leading-none">
                Evelin
              </span>
            </h1>
          </div>

          <div>
            <p   ref={pRef} className="text-center text-white font-comic text-2xl py-2 px-20">
              Passionate digital designer and developer with over 5 years of experience
              creating innovative web solutions that blend aesthetic beauty with functional excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
