import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"


const App = () => {
  return (
    <main>
        <img 
          className="absolute top-0 right-0 opacity-60 -z-1"
        src="/img/gradient.png" alt="gradient-png" />
        {/* Blur Effect */}
        <div className="h-0 w-[60rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#4B8AFE] -rotate-[40deg] -z-10">  
        </div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>

    </main>
  )
}
export default App