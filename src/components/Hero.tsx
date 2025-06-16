import { useState } from "react";

const Hero = () => {

  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);

    setTimeout(() => {
      setShowMessage(true);
    }, 2000);
  };

  const handleReset = () => {
    setIsRunning(false);
    setShowMessage(false);
  };

  const handleDinoJump = () => {
    const dino = document.getElementById('dino');
    if (dino) {
      dino.style.transform = 'translateY(-30px)';
      setTimeout(() => {
        dino.style.transform = 'translateY(0)';
      }, 300);
      setCount(prev => prev + 1);
    }
  }




  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-zinc-300">
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

        <div className="flex flex-col">
          <div className="mt-8 mb-8 flex justify-center items-center gap-20">
            <div className="relative h-20">
              <svg
                id="dino"
                className="absolute bottom-0 left-0 w-12 h-16 transition-transform duration-100"
                viewBox="0 0 48 64"
                style={{ transform: 'translateY(0)' }}
              >
                <path d="M12,40 L12,20 L24,20 L28,16 L36,16 L40,20 L40,40 L36,44 L28,44 L24,40 L12,40"
                  fill="#6b7280" stroke="#4b5563" stroke-width="2" />

                <circle cx="34" cy="24" r="2" fill="#111827" />

                <rect x="14" y="40" width="4" height="8" fill="#9ca3af" />
                <rect x="18" y="40" width="4" height="8" fill="#9ca3af" />
                <rect x="30" y="40" width="4" height="8" fill="#9ca3af" />
                <rect x="34" y="40" width="4" height="8" fill="#9ca3af" />

                <path d="M12,28 L4,24 L12,20" fill="#6b7280" stroke="#4b5563" stroke-width="1" />

                <path d="M20,16 L16,8 L24,12 L28,4 L32,12 L36,8 L32,16" fill="#4b5563" />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-red-700 text-white rounded-md transition-colors"
                onClick={handleDinoJump}
              >
                ¡Haz saltar al dinosaurio! 🦖
              </button>
              <div className="mt-2 text-white">
                Saltos: <span className="font-bold">{count}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-sky-500/10 rounded-xl -rotate-3"></div>
            <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video flex flex-col border border-gray-700 shadow-2xl">
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"></div>
                  </div>
                  <div className="text-xs text-gray-400 ml-4">contactar-explobyte.js</div>
                </div>
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>

              {/* Contenido del código */}
              {!isRunning ? (
                <div className="flex-1 p-4 overflow-auto font-mono text-sm">
                  {/* Función principal para contactar a Explobyte */}
                  <div className="text-gray-400">
                    <span className="text-purple-400">function</span> <span className="text-blue-400">contactarExplobyte</span><span className="text-gray-400">(</span><span className="text-orange-300">mensaje</span><span className="text-gray-400">, </span><span className="text-orange-300">tipoConsulta</span><span className="text-gray-400"> = </span><span className="text-green-400">"general"</span><span className="text-gray-400">) </span><span className="text-gray-400">{'{'}</span>
                  </div>

                  {/* Verificación de interés */}
                  <div className="text-gray-400 ml-4">
                    <span className="text-purple-400">if</span> <span className="text-gray-400">(</span><span className="text-blue-400">quieresNuestrosServicios</span><span className="text-gray-400">) </span><span className="text-gray-400">{'{'}</span>
                  </div>

                  {/* Acciones si hay interés */}
                  <div className="text-gray-400 ml-8">
                    <span className="text-blue-400">console</span><span className="text-gray-400">.</span><span className="text-blue-400">log</span><span className="text-gray-400">(</span><span className="text-green-400">`¡Genial! Estamos emocionados de ayudarte con: ${'${'}</span><span className="text-orange-300">mensaje</span><span className="text-green-400"> {"}`"}</span><span className="text-gray-400">);</span><br />
                    <span className="text-blue-400">agendar</span><span className="text-gray-400">.</span><span className="text-blue-400">reunion</span><span className="text-gray-400">(</span><span className="text-green-400">"virtual"</span><span className="text-gray-400">, </span><span className="text-orange-300">tipoConsulta</span><span className="text-gray-400">);</span><br />
                    <span className="text-blue-400">enviarConsulta</span><span className="text-gray-400">(</span><span className="text-orange-300">mensaje</span><span className="text-gray-400">, </span><span className="text-orange-300">tipoConsulta</span><span className="text-gray-400">);</span><br />
                    <span className="text-blue-400">mostrarConfeti</span><span className="text-gray-400">(); </span><span className="text-gray-400">// ¡Porque nos encanta ayudar!</span>
                  </div>

                  {/* Caso contrario */}
                  <div className="text-gray-400 ml-4">
                    <span className="text-gray-400">{'}'} </span><span className="text-purple-400">else</span> <span className="text-gray-400">{'{'}</span>
                  </div>

                  <div className="text-gray-400 ml-8">
                    <span className="text-blue-400">console</span><span className="text-gray-400">.</span><span className="text-blue-400">log</span><span className="text-gray-400">(</span><span className="text-green-400">"¡No hay problema! Estamos aquí cuando nos necesites 😊"</span><span className="text-gray-400">);</span><br />
                    <span className="text-blue-400">enviar</span><span className="text-gray-400">.</span><span className="text-blue-400">brochureDigital</span><span className="text-gray-400">(); </span><span className="text-gray-400">// Por si cambias de opinión</span>
                  </div>

                  <div className="text-gray-400 ml-4">
                    <span className="text-gray-400">{'}'}</span>
                  </div>

                  <div className="text-gray-400">
                    <span className="text-gray-400">{'}'}</span>
                  </div>

                  {/* Ejemplos de uso */}
                  <div className="text-gray-400 mt-4">
                    <span className="text-gray-400">// Ejemplo 1: Consulta específica</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-blue-400">contactarExplobyte</span><span className="text-gray-400">(</span><span className="text-green-400">"Necesito una app para mi restaurante"</span><span className="text-gray-400">, </span><span className="text-green-400">"desarrollo"</span><span className="text-gray-400">);</span>
                  </div>

                  <div className="text-gray-400 mt-2">
                    <span className="text-gray-400">// Ejemplo 2: Consulta general</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-blue-400">contactarExplobyte</span><span className="text-gray-400">(</span><span className="text-green-400">"¿Cómo puedo mejorar mi presencia digital?"</span><span className="text-gray-400">);</span>
                  </div>

                  <div className="text-gray-400 mt-2">
                    <span className="text-gray-400">/*</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-gray-400"> * ES SOLO UNA BROMA! :{")"}</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-gray-400"> * NO NECESITAS ENTENDER EL CODIGO PARA CONTACTARNOS JAJA</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-gray-400"> * SOLO SIGUE SCROLLEANDO LA PÁGINA!</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-gray-400"> */</span>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                  {!showMessage ? (
                    <>
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                      <p className="text-gray-400">Ejecutando código...</p>
                    </>
                  ) : (
                    <>
                      <div className="text-center">
                        <p className="text-green-400 mb-4">¡Código corriendo, sigue visitando la página!</p>
                        <button
                          onClick={handleReset}
                          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm text-gray-300"
                        >
                          Volver al código
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero