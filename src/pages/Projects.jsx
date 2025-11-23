import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Card, CardContent } from "../components/Card";
import { Button } from "../components/Button";
import { projects } from "../data/loadProjects";
import { motion, AnimatePresence } from "framer-motion";
import WavePlane from "../components/WavePlane";
import Particles from "../components/Particles";
import ProjectShowcaseModal from "../components/ProjectShowcaseModal";
import TargetCursor from '../components/TargetCursor';


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative h-screen flex flex-col justify-center items-center border-b bg-[#1f1d1c]">
      <div className="z-40 items-center justify-center w-full pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>
      <h2 className="text-[260px] absolute z-40 top-0 font-bold text-white/40 font-dope tracking-3">
        Projects
      </h2>
      <div className="mx-8 absolute z-40">
        <TargetCursor 
        spinDuration={3}
        hideDefaultCursor={true}
        modalOpen={!!selectedProject}
      />
        <div className="grid md:grid-cols-4 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`}
              className="cursor-target"
            >
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-2">
                  <h3 className="text-2xl font-dope font-semibold text-white/60 tracking-2 mb-2 text-center">
                    {project.title}
                  </h3>
                  <p className="text-sm font-comic font-semibold text-white/60 text-center mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-center text-white/60">
                    <Button
                      variant="default"
                      onClick={() => setSelectedProject(project)}
                    >
                      Showcase
                    </Button>
                    {/* <button onClick={() => setSelectedProject(project)}>Showcase</button> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal – morph + content */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectShowcaseModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <Canvas
      className="z-20 h-1/2 w-full pointer-events-none" 
        camera={{ fov: 60, position: [0, 0, 5], far: 20, near: 0.001 }}
        gl={{
          alpha: false,
          antialias: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#1f1d1c', 0); 
        }}
      >
        <WavePlane />
      </Canvas>
    </section>
  );
}
