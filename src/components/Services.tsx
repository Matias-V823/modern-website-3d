import { AiOutlineGlobal } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { MdDashboard, MdPhoneIphone } from "react-icons/md";
import { PiChartLineUpBold } from "react-icons/pi";
import CardService from "./CardService";

const Services = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        className="absolute top-0 left-0 opacity-60 -z-[1]"
        src="/img/gradient.png"
        alt="gradiente de fondo"
      />

      <div
        className="h-0 w-[60rem] absolute top-[35%] left-[-5%] shadow-[0_0_900px_20px_#4B8AFE] -rotate-[180deg] -z-10"
        aria-hidden="true"
      ></div>

      <h2
        className="text-end py-8 text-[15rem] font-extrabold  opacity-75 bg-gradient-to-r from-blue-500 to-sky-900 bg-clip-text text-transparent leading-none"
        // style={{
        //   WebkitTextStroke: "1px #AAAAAA",
        // }}
      >
        Servicios
      </h2>

      <div className="relative w-full h-[100vh]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 500"
          className="absolute top-0 left-0"
        >
          <defs>
            <filter id="glass" x="0" y="0" width="100%" height="100%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 15 -5"
                result="glassEffect"
              />
              <feBlend in="SourceGraphic" in2="glassEffect" mode="normal" />
            </filter>
          </defs>

          {/* Contorno principal de la CPU */}
          <rect
            x="50"
            y="50"
            width="700"
            height="400"
            rx="20"
            fill="rgba(17, 24, 39, 0.2)" 
            stroke="#4B8AFE"
            strokeWidth="0.2"
          />

          {/* Circuitos horizontales */}
          <path
            d="M150 150 H650"
            stroke="#6F6F6F"
            strokeWidth="1"
            strokeDasharray="5,5"
            fill="none"
          />
          <path
            d="M150 350 H650"
            stroke="#6F6F6F"
            strokeWidth="1"
            strokeDasharray="5,5"
            fill="none"
          />

          {/* Circuitos verticales */}
          <path
            d="M150 150 V350"
            stroke="#6F6F6F"
            strokeWidth="1"
            strokeDasharray="5,5"
            fill="none"
          />
          <path
            d="M650 150 V350"
            stroke="#6F6F6F"
            strokeWidth="1"
            strokeDasharray="5,5"
            fill="none"
          />

          {/* Circuitos diagonales */}
          <path
            d="M150 150 L650 350"
            stroke="#6F6F6F"
            strokeWidth="1"
            strokeDasharray="3,3"
            fill="none"
          />
          <path
            d="M650 150 L150 350"
            stroke="#4B8AFE"
            strokeWidth="1"
            strokeDasharray="3,3"
            fill="none"
          />

          {/* Circuito en U central */}
          <path
            d="M250 150 V250 H550 V350"
            stroke="#4B8AFE"
            strokeWidth="0.5"
            strokeDasharray="4,4"
            fill="none"
          />

          {/* Nodos principales */}
          <circle cx="150" cy="150" r="8" fill="#1E3A8A" />
          <circle cx="650" cy="150" r="8" fill="#1E3A8A" />
          <circle cx="150" cy="350" r="8" fill="#1E3A8A" />
          <circle cx="650" cy="350" r="8" fill="#1E3A8A" />

          {/* Nodos secundarios */}
          <circle cx="250" cy="150" r="5" fill="#1E3A8A" />
          <circle cx="550" cy="150" r="5" fill="#1E3A8A" />
          <circle cx="250" cy="250" r="5" fill="#1E3A8A" />
          <circle cx="550" cy="250" r="5" fill="#1E3A8A" />
          <circle cx="250" cy="350" r="5" fill="#1E3A8A" />
          <circle cx="550" cy="350" r="5" fill="#1E3A8A" />
          <circle cx="400" cy="250" r="8" fill="#1E3A8A" />
          <path
            id="electronPath"
            d="
                M150 150 H250
                V250
                H550
                V350
                H650
                V150
                H550
                V250
                H250
                V150
                H650
                V350
                H150
                V150
              "
            fill="none"
          />

          {/* Electrón animado que recorre todo el circuito */}
          <circle className="electron" r="6" fill="#4B8AFE">
            <animateMotion

              dur="20s"
              repeatCount="indefinite"
              keyPoints="0;0.05;0.1;0.15;0.2;0.25;0.3;0.35;0.4;0.45;0.5;0.55;0.6;0.65;0.7;0.75;0.8;0.85;0.9;0.95;1"
              keyTimes="0;0.05;0.1;0.15;0.2;0.25;0.3;0.35;0.4;0.45;0.5;0.55;0.6;0.65;0.7;0.75;0.8;0.85;0.9;0.95;1"
              calcMode="linear"
            >

              <mpath xlinkHref="#electronPath" />
            </animateMotion>
          </circle>

          {/* Servicios */}
          <CardService name="Paginas web" icon={AiOutlineGlobal} x={180} y={180} />
          <CardService name="Apps moviles" icon={MdPhoneIphone} x={500} y={180} />
          <CardService name="Dashboard" icon={MdDashboard} x={180} y={280} />
          <CardService name="Soporte TI" icon={BsTools} x={500} y={280} />
          <CardService name="Analitica" icon={PiChartLineUpBold} x={350} y={100} />
          <CardService name="Chatbots AI" icon={PiChartLineUpBold} x={350} y={300} />
        </svg>
      </div>

      <style>{`
        .electron {
          filter: drop-shadow(0 0 5px #4B8AFE) drop-shadow(0 0 10px #4B8AFE);
          animation: pulse 1.5s infinite alternate;
        }
        @keyframes pulse {
          from {
            r: 5;
            opacity: 1;
          }
          to {
            r: 8;
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;