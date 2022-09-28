import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import styles from "../styles/Home.module.css";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(19,19,19)] text-gray-200 h-screen snap-y snap-mandatory
    overflow-scroll z-0"
    >
      <Head>
        <title>Portfolio App</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id='about' className="snap-center">
        <About />
      </section>
      {/* Experiance */}
      <section id='exsperiance'>
        <WorkExperience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
