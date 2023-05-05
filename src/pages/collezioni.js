import Text from "../components/common/Text";
import Head from "next/head";
// import Navbar from "../components/Header";
import Footer from "../components/footer";
import ItemCollection from "../components/common/itemCollection";
import { COLLEZIONI_CONTENT, COLLECTIONS } from "../constants/Content";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/language";

const Collezioni = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== undefined) {
      const actualLang = window.localStorage.getItem("lang");
      if (actualLang) {
        dispatch(setLanguage(actualLang));
      } else {
        window.localStorage.setItem("lang", selectedLanguage);
      }
    }
  }, [dispatch, selectedLanguage]);
  const Content = COLLEZIONI_CONTENT[selectedLanguage];
  return (
    <>
      <Head>
        <title>I Gregori - Le collezioni</title>
        <meta
          name="description"
          content="Le collezioni della Gioielleria I Gregori Milano"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container max-w-6xl mx-auto px-6 text-slate-900 md:px-8 bg-white md:my-[70px]">
        <Text
          tag="h1"
          className="uppercase text-3xl text-slate-950 text-center font-normal mb-[8px]"
        >
          {Content.title}
        </Text>
        <Text className="font-sans text-center text-slate-900 font-bold italic text-2xl mb-[24px]">
          {Content.subtitle}
        </Text>
        <Text className="text-center mb-[50px] text-base">{Content.body}</Text>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 flex-wrap mt-8">
          {COLLECTIONS.map((el) => (
            <ItemCollection
              key={el.text}
              img={el.img}
              text={el.text}
              images={el.images}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collezioni;
