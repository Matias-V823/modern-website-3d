import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const arrowsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!aboutRef.current || !contentRef.current || !titleRef.current || !arrowsRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        tl.fromTo(titleRef.current,
            { opacity: 1, y: 0 },
            { opacity: 0, y: -900, ease: "power2.inOut" }
        );

        tl.fromTo(contentRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, ease: "power2.out" },
            "-=0.5"
        );

        tl.fromTo(arrowsRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            "-=0.3"
        );

        gsap.to(".arrow-down", {
            y: 10,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            tl.kill();
        };
    }, []);

    return (
        <section className="relative">
            <div ref={aboutRef} className="min-h-screen flex items-center justify-center text-center">
                <h2
                    ref={titleRef}
                    className="text-[14rem] font-extrabold opacity-75 bg-gradient-to-r from-blue-500 to-sky-900 bg-clip-text text-transparent leading-none"
                >
                    ¿QUIENES SOMOS?
                </h2>
            </div>

            <div ref={contentRef} className="absolute inset-0 flex items-center justify-center opacity-0 mt-96 font-family-general">
                <div className="max-w-6xl mx-auto p-8 border-[0.1px] border-gray-600 bg-opacity-90 rounded-lg shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="border-[0.1px] border-gray-600 p-6 rounded-lg">
                            <h3 className="text-4xl font-bold mb-4 border-b-[0.1px] border-gray-600 pb-3">Nuestra Historia 🚀</h3>
                            <p className="text-lg mb-6 border-[0.1px] border-gray-400 p-4 rounded">
                                La verdad... ¿historia? 😅 Somos simplemente unos nerds del código que descubrieron que podían ganar dinero haciendo lo que más aman: crear software moderno y comer pizza fría a las 3 AM.🍕💻
                            </p>
                            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition border-[0.1px] border-gray-600 cursor-crosshair">
                                Conoce más
                            </button>
                        </div>
                        <div className="border-[0.1px] border-gray-600 p-4 rounded-lg">
                            <img
                                src="img/animationIA.png"
                                alt="Equipo de trabajo"
                                className="w-4/5 mx-auto h-auto rounded-lg shadow-md border-[0.1px] border-gray-600"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div ref={arrowsRef} className="absolute bottom-30 left-1/2 transform -translate-x-1/2 opacity-0 z-10">
                <div className="flex flex-col items-center">
                    <div className="arrow-down mb-2">
                        <div className="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45"></div>
                    </div>
                    <div className="arrow-down">
                        <div className="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;