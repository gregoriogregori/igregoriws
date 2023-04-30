import Item from "../components/item";

import solitaire from "../../public/assets/Covers/solitaire_cover.jpg";
import trilogy from "../../public/assets/Covers/trilogy_cover.jpg";

const collections = [
  {
    text: "Trilogy",
    img: trilogy,
    link: "https://www.google.it/",
  },
  {
    text: "Solitaire",
    img: solitaire,
    link: "https://www.google.it/",
  },
  {
    text: "Trilogy",
    img: trilogy,
    link: "https://www.google.it/",
  },
  {
    text: "Solitaire",
    img: solitaire,
    link: "https://www.google.it/",
  },
  {
    text: "Trilogy",
    img: trilogy,
    link: "https://www.google.it/",
  },
  {
    text: "Solitaire",
    img: solitaire,
    link: "https://www.google.it/",
  },
];
const Creations = () => {
  return (
    <section id="creations" className="relative">
      <div className="container max-w-6xl mx-auto px-6 text-slate-900 md:px-8 bg-white md:my-[70px]">
        <div className="flex justify-center md:justify-between mb-[24px] md:mb-[40px] md:relative">
          <h2 className="text-3xl text-center uppercase md:text-left font-normal py-2">
            Le nostre creazioni
          </h2>
          <button className="btn hidden md:block">Tutte le Collezioni</button>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 flex-wrap mt-8">
          {collections.map((el) => (
            <Item key={el.text} img={el.img} text={el.text} link={el.link} />
          ))}
        </div>
        <div className="flex justify-center my-[24px] md:hidden">
          <button className="btn w-full p-[12px]">Vedi Tutte</button>
        </div>
      </div>
    </section>
  );
};

export default Creations;
