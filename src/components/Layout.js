import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import Header from "./Header";
import { setLanguage } from "../redux/language";

export default function Layout({ children, title, metaDescription, page }) {
  const metaTitle = `I Gregori - ${title}`;

  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const actualLang = window.localStorage.getItem("lang");
    console.log("actualLang", actualLang);
    if (actualLang) {
      dispatch(setLanguage(actualLang));
      window.localStorage.setItem("lang", actualLang);
    } else {
      window.localStorage.setItem("lang", selectedLanguage);
    }
  }, []);
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header page={page} />

        {children}
      </main>
    </>
  );
}
