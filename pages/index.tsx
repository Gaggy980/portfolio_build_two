import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import styles from "../styles/Home.module.css";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import Avatar from "../public/avatar.png";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(19,19,19)] text-gray-200 h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gary-400/20
     scrollbar-thumb-red-600/40"
    >
      <Head>
        <title>Portfolio App</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="exsperience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center ">
            <div className="h-12 w-12 rounded-full bg-red-800 filter grayscale
            hover:grayscale-0 opacity-30 hover:opacity-[100%]">
              <Image width={70} height={70} src={Avatar} alt="logo" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
