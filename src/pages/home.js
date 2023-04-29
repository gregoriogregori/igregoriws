import Image from "next/image";
import Text from "../components/common/Text";
import { HOME_CONTENT } from "../constants/Content";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/language";
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiMapPin } from "react-icons/hi2";

import Slider from "../components/common/Slider";
import CarouselSlider from "../components/common/Carousel";

const sliderImages = [
  "/carosello-storia/Storia-1.jpg",
  "/carosello-storia/Storia-2.jpg",
  "/carosello-storia/Storia-3.jpg",
  "/carosello-storia/Storia-4.jpg",
];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
    if (typeof window !== undefined) {
      window.localStorage.setItem("lang", language);
    }
  };
  const Content = HOME_CONTENT[selectedLanguage];
  console.log("selectedLanguage", selectedLanguage);
  return (
    <>
      <div className="w-full lg:w-[500px] mb-[200px]">
        <Slider images={sliderImages} />
        <CarouselSlider images={sliderImages} />
      </div>
      <div className="w-full flex gap-8  mb-[200px] text-4xl txt-white bg-black">
        <a href="#">
          <AiFillPhone />
        </a>
        <a href="#">
          <MdMail />
        </a>

        <a href="#">
          <FaFacebookSquare />
        </a>
        <a href="#">
          <RiInstagramFill />
        </a>
        <a href="#">
          <HiMapPin />
        </a>
      </div>
      <Text tag="h1">{Content.title}</Text>
      <div className="flex gap-8 mb-[200px]">
        <button onClick={() => handleLanguageChange("en")}>
          <Image src="/en.png" alt="en" width="30" height="15" />
        </button>
        <button onClick={() => handleLanguageChange("it")}>
          <Image src="/it.png" alt="it" width="30" height="15" />
        </button>
        <button onClick={() => handleLanguageChange("ch")}>
          <Image src="/ch.jpg" alt="ch" width="30" height="15" />
        </button>
      </div>
    </>
  );
};

export default Home;
