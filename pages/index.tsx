import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { useEffect } from "react";
import AOS from "aos";
import ContactMe from "../components/ContactMe";
import Link from "next/link";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1700,
      delay: 150,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Henry Bentil</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section id="hero" className="snap-start" data-aos="flip-left">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              alt="click to go to the top"
              src="https://drive.google.com/uc?export=view&id=1VA_N80uj7PzH6KNREzH4ouq77fXLTrxW"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
