import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/language";

export default function Header({ page }) {
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

  return (
    <>
      <Link href="/collezioni">Collezioni</Link>
      <Link href="/">Home</Link>
      {selectedLanguage === "it" && (
        <button
          onClick={() => handleLanguageChange("en")}
          disabled={selectedLanguage === "en"}
        >
          <img src="/en.png" alt="en" width="30px" height="15px" />
        </button>
      )}
      {selectedLanguage === "en" && (
        <button
          onClick={() => handleLanguageChange("it")}
          disabled={selectedLanguage === "it"}
        >
          <img src="/it.png" alt="en" width="30px" height="15px" />
        </button>
      )}
    </>
  );
}
