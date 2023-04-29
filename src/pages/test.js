import Image from "next/image";
import Navbar from "../components/nav";
import Sedi from "../components/sedi";
import Features from "../components/feature";
import Creations from "../components/creations";
import Footer from "../components/footer";
import Hero from  "../components/hero";

import abbracci from "../../public/collections/abbracci/01_abbracci.jpg";

import decor from "../../public/collections/decor/01_decor.jpg";

import fire from "../../public/collections/fire/01_fire.jpg";

import glamour from "../../public/collections/glamour/01_glamour.jpg";

import nature from "../../public/collections/nature/01_nature.jpg";

import platinum from "../../public/collections/platinum/01_platinum.jpg";

import snake from "../../public/collections/snake/02_snake.jpg";

import solitaire from "../../public/collections/solitaire/01_solitaire.jpg";

import tennisbracelet from "../../public/collections/tennis-bracelet/01_tennis_bracelet.jpg";

import trilogy from "../../public/collections/trilogy/01_trilogy.jpg";

import waves from "../../public/collections/waves/01_waves.jpg";



const test = () => {
    return ( <>
          <Navbar />
          <Hero/>
          <Features />
          <Creations/>
          <Sedi/>
          <Footer/>
    </> );
}
 
export default test;