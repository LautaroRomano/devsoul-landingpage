import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <div className="bg-black  text-white">
      <NextSeo
        title="Home: devsoul"
        description="Welcome to devsoul homepage."
        canonical="https://devsoul-landingpage.vercel.app/"
        openGraph={{
          url: "https://devsoul-landingpage.vercel.app/",
        }}
      />
      <Head>
        <title>Contactanos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pt-24 pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-2xl font-semibold title-font mb-4 text-white">
              Contactanos
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold">
              ¡Contáctanos si quieres hacer una pregunta!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="name"
                    className="leading-7 text-sm text-white font-semibold"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white-500"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-white font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white-500"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-white font-semibold"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white-500"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-red-600 border-0 py-2 px-8 rounded text-lg">
                  Enviar
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-red-500">info@devsoul.com</a>
                <p className="leading-normal my-5">
                  Tucuman, Argentina
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <Footer />
    </div>
  );
}
