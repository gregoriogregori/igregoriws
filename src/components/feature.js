import Image from "next/image";
import storia1 from "../../public/storia1.jpeg";

const Features = () => {
    return ( 
        <section id="features">
            <div className="container flex flex-col gap-8 max-w-6xl mx-auto mb-12 mt-6 md:mt-4 px-6 text-slate-800 md:flex-row cd:px-0 bg-white">
                <h1 className="uppercase text-3xl text-slate-950 md:hidden text-center font-bold">La nostra storia</h1>
                <div className="flex justify-center align-center bg-slate-900 w-full md:w-[30%] md:h-[30%]">
                    <Image className="h-[240px]" src={storia1} alt="Storia-oggi"/>
                </div>                
                <div className="flex flex-col bg-white w-full md:w-[60%]">
                <div className="hidden md:block" >
                    <h1 className="text-5xl uppercase pb-4 text-slate-950">La nostra storia</h1>
                    <div id="spacer" className="py-4 border-t-2 border-slate-950"></div>
                </div>
                    <p className="md:hidden mb-6 font-sans text-center text-slate-900 font-bold italic text-xl md:text-2xl md:mt-0 md:text-left">
                    Quattro generazioni di passione orafa
                    </p>
                    <p className="text-center md:text-left">
                    La famiglia <span className="font-bold">Gregori</span> opera nel mondo della gioielleria da oltre un secolo. 
                    La loro storia ebbe inizio nella <span className="font-bold">seconda metà dell'800</span> per opera di <span className="font-bold">Giovanni Gregori</span> che, con il prezioso aiuto del genio creativo 
                    del fratello Giuseppe iniziò a proporre ai propri clienti gioielli unici. 
                    <span className="font-bold">Nel corso del '900 i figli di Giuseppe, Andrea e Luigi,</span> continuarono l'attività intrapresa dal padre.
                    Fu tuttavia negli<span className="font-bold"> anni '50</span>, sotto la gestione della terza generazione, che si si ebbe la vera consacrazione: <span className="font-bold">Luigi, figlio di Andrea 
                    </span>, insieme alla moglie Marie Esterine diede un forte impulso allo sviluppo dell'azienda, attribuendo al marchio un'identità riconoscibile e attrattiva.
                    <span className="font-bold"> Attualmente</span> l'attività è guidata dalla <span className="font-bold">quarta generazione: i fratelli Andrea e Piero Gregori.</span>
                    </p>
                </div>
            </div>
            <div id="spacer" className="py-4 border-t-2 border-slate-950 w-[94%] mx-auto"></div>
        </section>
     );
}
 
export default Features;