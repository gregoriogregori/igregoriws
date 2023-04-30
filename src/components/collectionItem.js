import Image from "next/image";
import {useState} from "react";
import Carousel from "./common/Carousel"

const Item = ({text, img, link, ...otherProps}) => {
    const carouselImages = [
        "/carosello-storia/Storia-1.jpg",
        "/carosello-storia/Storia-2.jpg",
        "/carosello-storia/Storia-3.jpg",
        "/carosello-storia/Storia-4.jpg",
      ];
    const [modalOpen, setModalOpen] = useState(false);
    const handleClick = () => {
      setModalOpen(!modalOpen);
    };
    return (<div>
        <button onClick={handleClick} href={link} {...otherProps} className="group shadow-2xl block text-slate-900 text-center rounded-lg md:max-w-[210px] overflow-hidden cursor-pointer">
            <Image
            src={img}
            width={200}
            height={200}
            className="duration-200 group-hover:scale-110 rounded-t"
            alt={text}
            />
            <div className="flex items-center justify-center p-2 text-white bg-slate-900 rounded-b">
            <p className="md:text-base uppercase">{text}</p>
            </div>
        </button>

        <div className={
            modalOpen
                ? "h-full w-full bg-white bg-opacity-90  z-100 absolute top-0 left-0"
                : "hidden"
            }>
            <div className="border-2 border-slate-950 text-6xl text-slate-900 flex justify-center h-full w-full">
                <div className="h-full w-[80%] pt-8 mt-[30%] md:mt-0">
                    <Carousel images={carouselImages} />
                </div>
            </div>
        </div>
        </div>
    );
    };

export default Item;
