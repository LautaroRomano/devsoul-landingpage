import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import HoverCard from "./HoverCard";

export default function Main() {
    return (
        <section className="text-black body-font lg:pt-20 bg-transparent">
            <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#DC2626_100%)]"></div>
            <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
                <div className="flex flex-col w-full mb-2 text-left md:text-center ">
                    <h1 className="mb-2 text-4xl font-bold tracking-tighter text-default-900 lg:text-6xl md:text-5xl">
                        <span>Algunos de nuestros proyectos</span>
                    </h1>
                </div>
            </div>

            <section className="text-default-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
                        <img className="w-full" src="/img/casos-de-exito/bronovios.png" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2"><a href="https://www.bronovios.com" target="_blank">Bronovios.com</a></div>
                            <p className="text-default-900 text-base">
                                Un sitio web para ayudar a las personas a emigrar. Este proyecto incluye una pagina principal y un panel de control para los administradores.
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-default-900 mr-2">React</span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-default-900 mr-2">Next.js</span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-default-900">PostgreSQL</span>
                        </div>
                    </div>

                </div>
            </section>

        </section>
    );
}
