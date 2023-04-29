import Image from "next/image";
import logo from "/public/logo.png"
import en from "/public/en.png"
import it from "/public/it.png"
import storia1 from "../../public/storia1.jpeg";
import { useState } from "react";

import Item from "../components/item";
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


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
const active = false
    return (
      <>
        <section id="hero" className="bg-gray-900 h-[500px] text-white ">
            <navbar className="bg-black grid grid-cols-6 p-3">
            
                <div id="left" className="col-span-1 flex items-center justify-center">
                    <Image src={it} className="w-5 md:w-8" />
                </div>

                <div id="logo" className="col-span-4 md:col-span-3 md:pl-36 flex items-center justify-center">
                    <Image className="w-[200px] " src={logo} />
                </div>
                    <div className="md:hidden flex items-center justify-center pt-1">
                        <button
                            onClick={handleClick}
                            id="burger"
                            type="button"
                            className={
                            isOpen
                                ? "open z-40 block hamburger md:hidden focus:outline-none"
                                : "z-40 block hamburger md:hidden focus:outline-none"
                            }
                        >
                            <span className="hamburger-top"></span>
                            <span className="hamburger-mid"></span>
                            <span className="hamburger-bot"></span>
                        </button>
                    </div>
                    <div id="right" className="col-span-1 md:col-span-2 flex items-center justify-center">
                        <div id="links" className="hidden h-10 md:flex md:items-center md:space-x-4">
                            <div className="group">
                                <a href="#">Collezioni</a>
                                <div className="mx-2 group-hover:border-b group-hover:border-yellow-600"></div>
                            </div>
                            <div className="group">
                                <a href="#">Chi siamo</a>
                                <div className="mx-2 group-hover:border-b group-hover:border-yellow-600"></div>
                            </div>
                            <div className="group">
                                <a href="#">Contatti</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-yellow-600"></div>
                        </div>
                    </div>
                </div>
            </navbar>
            <div id="menu" className={isOpen ? "responsive" : "hidden"}>
            <a href="#" className={`${active ? "underline" : ''} text-slate-900 decoration-yellow-600 underline-offset-4 font-extrabold`}>
              Collezioni
            </a>
            <a href="#" className={`${active ? "underline" : ''} pt-10 text-slate-900 decoration-yellow-600 underline-offset-4 font-extrabold`}>
              Chi siamo
            </a>
            <a href="#" className={`${active ? "underline" : ''} pt-10 text-slate-900 decoration-yellow-600 underline-offset-4 font-extrabold`}>
              Contatti
            </a>
          </div>
            <div className="text-slate-900">collezioni - 收藏品</div>
        </section>
        <section id="features">
        <div className="container flex flex-col max-w-6xl mx-auto my-12 px-6 text-slate-800 md:flex-row cd:px-0 bg-slate-100">
        <div className="flex justify-center align-center bg-slate-900">
            <Image src={storia1} alt="image-interactive" />
        </div>
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-slate-900 uppercase md:text-5xl md:mt-0 md:text-left">
              Quattro generazioni di passione orafa
            </h2>
            <p className="text-center md:text-left">
            La famiglia Gregori opera nel mondo della gioielleria da oltre un secolo. 
            La loro storia ebbe inizio nella seconda metà dell'800 per opera di Giovanni Gregori che, con il prezioso aiuto del genio creativo 
            del fratello Giuseppe iniziò a proporre ai propri clienti gioielli unici. 
            Nel corso del '900 i figli di Giuseppe, Andrea e Luigi, continuarono l'attività intrapresa dal padre.
            Fu tuttavia negli anni '50, sotto la gestione della terza generazione, che si si ebbe la vera consacrazione: Luigi, figlio di Andrea, 
            insieme alla moglie Marie Esterine diede un forte impulso allo sviluppo dell'azienda, attribuendo al marchio di famiglia un'identità riconoscibile e attrattiva.
            Attualmente l'attività di famiglia è guidata dalla quarta generazione: i fratelli Andrea e Piero Gregori.
            </p>
          </div>
        </div>
        </section>
        <section id="creations">
            <div className="container max-w-6xl mx-auto my-32 px-6 text-slate-900 md:px-8 bg-slate-300 py-8">
                <div className="flex justify-center md:justify-between mb-20">
                    <h2 className="text-4xl text-center uppercase md:text-left md:text-5x">
                    Le nostre creazioni
                    </h2>
                    <button className="btn hidden md:block">Le nostre sedi</button>
                </div>
                <div className="item-container">
                    <Item img={abbracci} img_mob={abbracci} text="Abbracci" />
                    <Item img={decor} img_mob={decor} text="Decor" />
                    <Item img={fire} img_mob={fire} text="Fire" />
                    <Item
                    img={glamour}
                    img_mob={glamour}
                    text="Glamour"
                    />
                </div>
                <div className="item-container mt-8">
                    <Item img={nature} img_mob={nature} text="Nature" />
                    <Item
                    img={platinum}
                    img_mob={platinum}
                    text="Platinum"
                    />
                    <Item
                    img={snake}
                    img_mob={snake}
                    text="Snake"
                    />
                    <Item
                    img={solitaire}
                    img_mob={solitaire}
                    text="Solitaire"
                    />
                </div>
                <div className="flex justify-center mt-10 md:hidden">
                    <button className="btn w-full md:hidden">Le nostre sedi</button>
                </div>
            </div>
        </section>
      </>
    );
}
 
export default Home;