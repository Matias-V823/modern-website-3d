const Contact = () => {
    return (
        <div className="min-h-screen">
            <div className="flex justify-around p-2 text-[15rem] font-family-zentry text-zinc-300">
                <h5>LET'S</h5>
                <h5>TALK</h5>
            </div>
            <hr className="h-[10px] bg-zinc-400 border-none" />
            <div className="flex mt-10 p-8 gap-4">
                <form id="contactForm" action="send_email.php" method="post" className="w-1/2 font-family-general">
                    <div className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                required
                                className="w-full p-2 border border-gray-300 rounded uppercase"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full p-2 border border-gray-300 rounded uppercase"
                            />
                        </div>
                        <div>
                            <textarea
                                name="mensaje"
                                rows={5}
                                placeholder="Mensaje"
                                required
                                className="w-full p-2 border border-gray-300 rounded  uppercase"
                            ></textarea>
                        </div>
                    </div>
                </form>

                <div className="flex flex-col justify-center bg-blue-principal w-1/2 rounded-lg ">
                    <button
                        type="submit"
                        form="contactForm"
                        className="text-zinc-300 px-4 py-2 rounded hover:text-white transition cursor-crosshair"
                    >
                        <h3 className="font-bold font-family-zentry text-5xl">ENVIAR</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Contact