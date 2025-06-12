import type { IconType } from "react-icons"

type CardServiceType = {
  name: string
  icon: IconType
  x: number
  y: number
}

const CardService = ({ name, icon: Icon, x, y }: CardServiceType) => {
  return (
    <g className="hover:scale-105 transition-transform cursor-pointer">
      <foreignObject x={x} y={y} width="120" height="80">
        <div
          className="w-full h-full rounded-2xl backdrop-blur-xs border-[0.7px]  border-blue-principal/40
                     flex flex-col items-center justify-center font-family-general text-white text-xs
                     gap-1 shadow-xl transition-all hover:scale-90 hover:shadow-2xl cursor-crosshair"
        >
          <Icon className="text-xl" />
          <span>{name}</span>
        </div>
      </foreignObject>
    </g>
  )
}

export default CardService
