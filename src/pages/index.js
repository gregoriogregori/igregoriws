import { useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Sedi from "../components/sedi";
import Storia from "../components/Storia";
import Creations from "../components/creations";
import Footer from "../components/footer";
import Hero from "../components/hero";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/language";
import { HOME_CONTENT } from "../constants/Content";

export default function Home() {
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
  const Content = HOME_CONTENT[selectedLanguage];
  return (
    <>
      <Head>
        <title>I Gregori - Gioelleria Milano</title>
        <meta name="description" content="Gioielleria I Gregori Milano" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Hero content={Content} />
      <Storia content={Content} />
      <Creations content={Content.collezioni} />
      <Sedi />
      <Footer />
    </>
  );
}
