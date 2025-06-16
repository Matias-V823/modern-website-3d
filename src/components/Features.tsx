import { useRef, useState } from "react";
import { BentoCard } from "./BentoCard";

type BentoTiltProps = {
    children: React.ReactNode;
    className?: string;
};

type MouseEventType = React.MouseEvent<HTMLDivElement, MouseEvent>;


export const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: MouseEventType) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        console.log('izquierda', left)

        console.log('desde event ', event.clientY)

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.7) * 5;
        const tiltY = (relativeX - 0.7) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};



const Features = () => {
    return (
        <section>
            <div className="relative w-full md:min-h-dvh px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">
                        Desarrollo Seguro y Confiable
                    </p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Protege tu software con nuestros estándares de seguridad avanzados. 
                        Ofrecemos soluciones tecnológicas integradas que garantizan la protección, 
                        integridad y confidencialidad de tus sistemas y datos.
                    </p>
                </div>
                <BentoTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="videos/video-1.mp4"
                        title={
                            <>
                                Seguridad
                            </>
                        }
                        description="Tu aplicación estará blindada con los más altos estándares, guiados por ISO 27001. Nos aseguramos de que tu software sea resistente a ataques y que tus datos estén siempre protegidos."
                        isComingSoon
                    />
                </BentoTilt>
                <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2 md:grid-row-3">
                    <BentoTilt className="md:row-span-2">
                        <BentoCard
                            src="videos/video-2.mp4"
                            title={<>
                                Integridad
                            </>}
                            description="La información de tu software siempre estará intacta y precisa. Nos comprometemos a que nunca tendrás problemas con corrupción de datos o inconsistencias en tu sistema."
                            isComingSoon
                        />
                    </BentoTilt>
                    <BentoTilt className="md:row-span-2">
                        <BentoCard
                            src="videos/video-3.mp4"
                            title={<>
                                Confidencialidad
                            </>}
                            description="Tus datos están seguros con nosotros. Todo lo que desarrollamos para ti queda bajo estricta confidencialidad y nunca compartiremos tu información con terceros."
                            isComingSoon
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}
export default Features