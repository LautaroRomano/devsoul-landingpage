import { BiLinkExternal } from "react-icons/bi";
import ProjectsCard from "./ProjectsCard";

export default function Main() {
    return (
        <section className="text-black body-font lg:pt-20 bg-transparent">

            <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4 mb-8">
                <div className="flex flex-col w-full mb-2 text-left md:text-center ">
                    <h1 className="mb-2 text-4xl font-bold tracking-tighter text-default-900 lg:text-6xl md:text-5xl">
                        <span>Algunos de nuestros proyectos</span>
                    </h1>
                </div>
            </div>

            <div className="flex justify-center flex-wrap gap-8">
                {projects.map((p, i) => (
                    <ProjectsCard title={p.title} description={p.description} link={p.link} key={i} />
                ))}
            </div>

        </section>
    );
}

const projects = [
    {
        title: 'Bronovios.com',
        link: 'https://www.bronovios.com',
        description: 'Un sitio web para ayudar a las personas a emigrar. Este proyecto incluye una pagina principal y un panel de control para los administradores.'
    },
    {
        title: 'Bronovios.com',
        link: 'https://www.bronovios.com',
        description: 'Un sitio web para ayudar a las personas a emigrar. Este proyecto incluye una pagina principal y un panel de control para los administradores.'
    },
    {
        title: 'Bronovios.com',
        link: 'https://www.bronovios.com',
        description: 'Un sitio web para ayudar a las personas a emigrar. Este proyecto incluye una pagina principal y un panel de control para los administradores.'
    },
    {
        title: 'Bronovios.com',
        link: 'https://www.bronovios.com',
        description: 'Un sitio web para ayudar a las personas a emigrar. Este proyecto incluye una pagina principal y un panel de control para los administradores.'
    },
    {
        title: 'Bronovios.com',
        link: 'https://www.bronovios.com',
        description: 'Un sitio web para ayudar a las personas a emigrar. Este proyecto incluye una pagina principal y un panel de control para los administradores.'
    },
]
