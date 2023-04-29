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
import eternelle from "../../public/collections/eternelle/01_eternelle.jpg";
import waves from "../../public/collections/waves/01_waves.jpg";

const Creations = () => {
    return ( 
        <section id="creations" className="relative">
            <div className="container max-w-6xl mx-auto px-6 text-slate-900 md:px-8 bg-white pb-12 pt-4">
                <div className="flex justify-center md:justify-between mb-8 md:relative">
                    <h2 className="text-4xl text-center uppercase md:text-left md:text-5x font-bold md:font-normal py-2">
                    Le nostre creazioni
                    </h2>
                    <button className="btn hidden md:block">Tutte le Collezioni</button>
                </div>
                <div className="item-container mt-8">
                    <Item img={trilogy} img_mob={trilogy} text="Trilogy" />
                    <Item
                    img={solitaire}
                    img_mob={solitaire}
                    text="Solitaire"
                    />
                                        <Item
                    img={tennisbracelet}
                    img_mob={tennisbracelet}
                    text="Tennis Bracelet"
                    />
                    <Item
                    img={eternelle}
                    img_mob={eternelle}
                    text="Eternelle"
                    />
                </div>
                <div className="flex justify-center mt-10 md:hidden">
                    <button className="btn w-[90%] md:hidden">Vedi Tutte</button>
                </div>
            </div>
        </section>
     );
}
 
export default Creations;