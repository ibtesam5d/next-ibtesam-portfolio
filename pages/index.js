import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EmailMe from "@/components/EmailMe";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ibtesam's Portfolio</title>
        <meta
          name="description"
          content="Md Ibtesam Hossain's personal portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Projects />
        <EmailMe />
        <Footer />
      </main>
    </>
  );
}
