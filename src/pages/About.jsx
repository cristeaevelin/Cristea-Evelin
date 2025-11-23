import TrueFocus from "../components/TrueFocus.jsx";

export default function About() {

  return (
    <div className="h-screen z-50 w-screen flex flex-col items-center border-b border-white/40 justify-center bg-[#1f1d1c]">
      <TrueFocus
        sentence="About me"
        manualMode={false}
        blurAmount={5}
        borderColor="#7D66FC"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />

      <div className="space-y-10 text-2xl mx-20 text-[#F7E6DE] font-comic">
        <p>
          My journey started with a fascination for the intersection of art and
          technology. Today, I specialize in crafting immersive digital
          experiences that not only look stunning but also provide exceptional
          user experiences.
        </p>

        <p>
          When I'm not coding or designing, you'll find me exploring the latest
          design trends, experimenting with new technologies, or contributing to
          open-source projects.
        </p>
      </div>
    </div>
  );
};