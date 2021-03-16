import Head from "next/head";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Work } from "../components/Work";

export default function Home() {
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
        <title>Vinh's Portfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <Work />
    </div>
  );
}
