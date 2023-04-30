import Navbar from "../components/Header";
import Footer from "../components/footer";
import CollectionItem from '../components/collectionItem'


const collections = [
    {
        text: "Abbracci",
        img: "/assets/Covers/abbracci_cover.jpg",
        link: "https://www.google.it/"
    },
    {
        text: "Decor",
        img: "/assets/Covers/decor_cover.jpg",
        link: "https://www.google.it/"
    },
    {
        text: "Eternelle",
        img: "/assets/Covers/eternelle_cover.jpg",
        link: "https://www.google.it/"
    },
    {
        text: "Fire",
        img: "/assets/Covers/fire_cover2.jpg",
        link: "https://www.google.it/"
    },
    {
        text: "Glamour",
        img: "/assets/Covers/glamour_cover.jpg",
        link: "https://www.google.it/"
    },
    {
        text: "Nature",
        img: "/assets/Covers/nature_cover.jpg",
        link: "https://www.google.it/"
    },
    {
        text: "Platinum",
        img: "/assets/Covers/platinum_cover.jpg",
        link: "https://www.google.it/"
    },
    {
        text: "Snake",
        img: "/assets/Covers/snake_cover.jpg",
        link: "https://www.google.it/"
    },
    {
        text: "Solitaire",
        img: "/assets/Covers/solitaire_cover.jpg",
        link: "https://www.google.it/"
    },
    {
        text: "Tennis Bracelet",
        img: "/assets/Covers/tennisBracelet_cover.jpg",
        link: "https://www.google.it/"
    },
    {
        text: "Trilogy",
        img: "/assets/Covers/trilogy_cover.jpg",
        link: "https://www.google.it/"
    },
    {
        text: "Waves",
        img: "/assets/Covers/pippo.jpg",
        link: "https://www.google.it/"
    },
]
const Collezioni = () => {
    return ( <>
    <Navbar />
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 flex-wrap my-8">
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