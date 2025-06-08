const Services = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <img
        className="absolute top-0 left-0 opacity-60 -z-[1]"
        src="/img/gradient.png" 
        alt="gradiente de fondo"
      />
      
      <div 
        className="h-0 w-[60rem] absolute top-[35%] left-[-5%] shadow-[0_0_900px_20px_#4B8AFE] -rotate-[180deg] -z-10"
        aria-hidden="true"
      ></div>
      
      <h2 className="text-end py-8 text-[15rem] font-extrabold">Servicios</h2>
      
    </main>
  );
};

export default Services;