import Image from "next/image";
import Navbar from "../components/nav";
import Sedi from "../components/sedi";
import Features from "../components/feature";
import Creations from "../components/creations";
import Footer from "../components/footer";
import Hero from "../components/hero";

const test = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Creations />
      <Sedi />
      <Footer />
    </>
  );
};

export default test;
