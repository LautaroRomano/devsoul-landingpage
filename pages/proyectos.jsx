import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/MainCasoDeExito";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
    return (
        <div className="text-default-900">
            <NextSeo
                title="Home: devsoul"
                description="Welcome to devsoul homepage."
                canonical="https://devsoul-landingpage.vercel.app/"
                openGraph={{
                    url: "https://devsoul-landingpage.vercel.app/",
                }}
            />
            <Head>
                <title>DevSoul</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
