import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <main className="relative">
      {/* Fondo con efecto de granado/texturizado (SVG embebido) */}
      <div 
        className="fixed inset-0 -z-20 bg-zinc-950"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.10'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Tus elementos existentes */}
      <img 
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/img/gradient.png" 
        alt="gradient-png" 
      />
      <div className="h-0 w-[60rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#4B8AFE] -rotate-[40deg] -z-10"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features/>
      <Contact />
    </main>
  );
};

export default App;