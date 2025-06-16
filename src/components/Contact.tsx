import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef(null);
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);



    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
        setMessage(inputValue);
    };


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return console.error(error);

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_APIKEY_EMAIL)
            .then(
                () => {
                    setIsSubmitted(true);
                    console.log('Mensaje Enviado!');
                },
                (error) => {
                    setError(error.text);
                    console.log('Error al enviar...', error.text);
                }
            );
    };

    return (
        <div className="min-h-screen">
            <div className="flex justify-around p-2 text-[15rem] font-family-zentry text-zinc-300">
                <h5>LET'S</h5>
                <h5>TALK</h5>
            </div>
            <hr className="h-[10px] bg-zinc-400 border-none" />
            <div className="flex mt-10 p-8 gap-4">
                {
                    isSubmitted ? (
                        <div>
                            <h3>¡Gracias por contactarnos!</h3>
                            <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
                        </div>
                    ) : (
                        <>
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                id="contactForm"
                                action="send_email.php"
                                method="post"
                                className="w-1/2 font-family-general">
                                <div className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="user_name"
                                            placeholder="Nombre"
                                            required
                                            className="w-full p-2 border border-gray-300 rounded uppercase"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="user_email"
                                            placeholder="Email"
                                            required
                                            className="w-full p-2 border border-gray-300 rounded uppercase"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            placeholder="Mensaje"
                                            required
                                            value={message}
                                            onChange={handleInputChange}
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
                            {error && <p className="error">Error: {error}</p>}
                        </>
                    )
                }

            </div>
        </div>
    )
}
export default Contact