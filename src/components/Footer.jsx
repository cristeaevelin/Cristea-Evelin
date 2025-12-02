export default function Footer() {
        return (
          <footer className="relative w-full border-t border-white/10">
            {/* Glow line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />
            <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-40 blur-[120px]"></div>

<div className="absolute inset-0 flex items-center justify-center">
  <div className="bg-purple-500 w-1/2 h-1/2 rounded-full opacity-50 blur-[90px]"></div>
</div>
      
            <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Branding */}
              <div className="text-center md:text-left">
              <h3 className="flex flex-col text-white font-druk text-5xl leading-[0.9]">
  Cristea
  <span className="font-key text-4xl mt-[-24px] ml-2 text-black">Evelin</span>
</h3>

                <p className="text-lg font-comic font-bold text-white/60 mt-1">
                Web Developer and Creative Coder
                </p>
              </div>
      
              {/* Socials */}
              <div className="flex flex-col items-center font-comic font-bold text-lg gap-2">
                <a
                  href="https://www.linkedin.com/m/in/cristea-evelin-031191152"
                  target="_blank"
                  className="text-white/60 hover:text-white transition-all hover:scale-110"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:cristeaevelin@gmail.com"
                  className="text-white/60 hover:text-white transition-all hover:scale-110"
                >
                  Email
                </a>
                <a
                  href="https://github.com/cristeaevelin"
                  target="_blank"
                  className="text-white/60 hover:text-white transition-all hover:scale-110"
                >
                  GitHub
                </a>
              </div>
            </div>
      
            <p className="text-center text-lg tracking-wide text-white/30 font-comic pb-6">
              © {new Date().getFullYear()} Cristea Evelin — All Rights Reserved
            </p>
          </footer>
        );
      }
      