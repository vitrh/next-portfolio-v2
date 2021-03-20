import React from "react";
import Head from "next/head";
import { Navbar } from "../components/LandingPage/Navbar";
import { Footer } from "../components/LandingPage/Footer";
import { Aboutme } from "../components/AboutPage/aboutme";

export default function AboutMe() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
        <title>Vinh | About Me Page</title>
      </Head>
      <Navbar />
      <Aboutme />
      <Footer />
    </div>
  );
}
