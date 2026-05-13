import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevSoul",
  url: "https://devsoul.it/",
  logo: "https://devsoul.it/img/logos/isotipo 1.png",
  description:
    "DevSoul crea agentes autónomos de IA que funcionan como empleados digitales en ventas, soporte, administración y operaciones para empresas en Latinoamérica.",
  sameAs: [
    "https://www.instagram.com/dev.soul.it",
    "https://www.linkedin.com/company/104109828",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@devsoul.it",
    contactType: "customer service",
    areaServed: "LATAM",
    availableLanguage: "Spanish",
  },
  offers: {
    "@type": "Offer",
    name: "Empleados Digitales con IA",
    description:
      "Agentes autónomos de IA especializados: SDRSoul, SupportSoul, AdminSoul, OpsSoul, ClinicSoul",
  },
};

export default function Home() {
  return (
    <div className="bg-[#080808] text-white">
      <NextSeo
        title="DevSoul | Empleados Digitales con IA para tu Empresa | Latinoamérica"
        description="DevSoul crea agentes autónomos de IA que trabajan como empleados digitales en ventas, soporte, administración y operaciones. Transformá tu empresa con workforce digital inteligente en Latinoamérica."
        canonical="https://devsoul.it/"
        openGraph={{
          url: "https://devsoul.it/",
          title: "DevSoul | Empleados Digitales con IA",
          description:
            "Agentes autónomos de IA para empresas. SDRSoul, SupportSoul, AdminSoul, OpsSoul y ClinicSoul. Workforce digital para Latinoamérica.",
          images: [
            {
              url: "https://devsoul.it/img/logos/isotipo 1.png",
              width: 1200,
              height: 630,
              alt: "DevSoul — AI Workforce para Empresas",
            },
          ],
          site_name: "DevSoul",
          type: "website",
          locale: "es_AR",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "empleados digitales IA, agentes autónomos, automatización empresarial, AI workforce, SDRSoul, SupportSoul, AdminSoul, inteligencia artificial empresas, workforce digital, Latinoamérica, automatización ventas, soporte automatizado",
          },
          { name: "author", content: "DevSoul" },
          { name: "robots", content: "index, follow" },
          { name: "theme-color", content: "#080808" },
        ]}
      />
      <Head>
        <title>DevSoul | Empleados Digitales con IA</title>
        <link rel="icon" href="/img/logos/isotipo 1.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
