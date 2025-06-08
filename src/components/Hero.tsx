const Hero = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-zinc-100">
          <h2 className="text-5xl sm:text-6xl md:text-9xl font-family-zentry mt-20 ">
            Bienvenidos a EXPLO<span className="text-[#4B8AFE] ">BYTE</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Explora soluciones innovadoras diseñadas para impulsar tu negocio. 
            Nuestro equipo de desarrolladores está listo para ayudarte a alcanzar tus metas.
          </p>
          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-600/30">
              Comenzar
            </button>
            <button className="px-8 py-3 border border-white/20 hover:border-white/40 rounded-lg font-medium text-zinc-50 transition-all duration-300 hover:bg-white/10">
              Saber más
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-sky-500/10 rounded-xl -rotate-3"></div>
          <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video flex flex-col border border-gray-700 shadow-2xl">
            <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"></div>
              </div>
              <div className="text-xs text-gray-400 ml-4">contactar-explobyte.js</div>
            </div>
            
            {/* Código JavaScript */}
            <div className="flex-1 p-4 overflow-auto font-mono text-sm">
              <div className="text-gray-400">
                <span className="text-purple-400">function</span> <span className="text-blue-400">contactarExplobyte</span><span className="text-gray-400">(</span><span className="text-orange-300">mensaje</span><span className="text-gray-400">) </span><span className="text-gray-400"> {'{'}</span>
              </div>
              <div className="text-gray-400 ml-4">
                <span className="text-purple-400">if</span> <span className="text-gray-400">(</span><span className="text-blue-400">quieresNuestrosServicios</span><span className="text-gray-400">) {'{'}</span>
              </div>
              <div className="text-gray-400 ml-8">
                <span className="text-blue-400">agendar</span><span className="text-gray-400">.</span><span className="text-blue-400">reunion</span><span className="text-gray-400">();</span>
              </div>
              <div className="text-gray-400 ml-4">
                <span className="text-gray-400">{'}'} </span><span className="text-purple-400">else</span> <span className="text-gray-400">{'{'}</span>
              </div>
              <div className="text-gray-400 ml-8">
                <span className="text-blue-400">enviarConsulta</span><span className="text-gray-400">(</span><span className="text-orange-300">mensaje</span><span className="text-gray-400">);</span>
              </div>
              <div className="text-gray-400 ml-4">
                <span className="text-gray-400">{'}'}</span>
              </div>
              <div className="text-gray-400">
                <span className="text-gray-400">{'}'}</span>
              </div>
              <div className="text-gray-400 mt-4">
                <span className="text-gray-400">// Ejemplo de uso:</span>
              </div>
              <div className="text-gray-400">
                <span className="text-blue-400">contactarExplobyte</span><span className="text-gray-400">(</span><span className="text-green-400">"Hola, necesito ayuda para digitalizar mi negocio"</span><span className="text-gray-400">);</span>
              </div>
              <div className="text-gray-400 mt-2">
                <span className="text-gray-400">// Resultado: Agenda una reunión o envía tu consulta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero