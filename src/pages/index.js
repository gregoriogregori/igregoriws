import { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/language";

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

  return (
    <>
      <Head>
        <title>I Gregori - Gioelleria Milano</title>
        <meta name="description" content="Gioielleria I Gregori Milano" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <></>
    </>
  );
}
