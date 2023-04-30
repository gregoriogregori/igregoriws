import Navbar from "../components/nav";
import Footer from "../components/footer";
import CollectionItem from '../components/collectionItem'
import solitaire from "../../public/collections/solitaire/01_solitaire.jpg";
import trilogy from "../../public/collections/trilogy/01_trilogy.jpg";

const collections = [
    {
        text: "Trilogy",
        img: trilogy,
        link: "https://www.google.it/"
    },
    {
        text: "Solitaire",
        img: solitaire,
        link: "https://www.google.it/"
    }
]
const Collezioni = () => {
    return ( <>
    <Navbar />
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 flex-wrap mt-8">
                {collections.map(el =>
                    <CollectionItem
                    key={el.text}
                    img={el.img}
                    text={el.text}
                    link={el.link}
                    />
                 )}
                   
                </div>
    <Footer />
    </> );
}
 
export default Collezioni;