import React, { useEffect, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/language";

const useOutsideAlerter = (ref, cb, closeOutsideHandler) => {
  useEffect(() => {
    if (!closeOutsideHandler) return;
    function handleClickOutside(event) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        if (cb && typeof cb === "function") {
          cb();
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, closeOutsideHandler]);
};

const LangMenu = (props) => {
  const { className, id, ...otherProps } = props;
  const [open, setOpen] = useState();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
    if (typeof window !== undefined) {
      window.localStorage.setItem("lang", language);
    }
    setOpen(false);
  };

  const boxRef = React.useRef(null);

  useOutsideAlerter(boxRef, () => setOpen(false), true);

  return (
    <div className={`lang-menu-container ${className}`} id={id} {...otherProps}>
      <div ref={boxRef}>
        <button onClick={() => setOpen((prevState) => !prevState)}>
          <Image
            src={`/${selectedLanguage}.png`}
            alt={selectedLanguage}
            width="30"
            height="15"
          />
        </button>
        <div
          className={`lang-menu-dropdown ${
            open ? "open-dropdown" : ""
          } roboto-font`}
        >
          <div className="flex flex-col gap-[8px] text-black">
            <button
              onClick={() => handleLanguageChange("en")}
              className="flex gap-[4px]"
            >
              <Image src="/en.png" alt="en" width="30" height="15" />
              English
            </button>
            <button
              onClick={() => handleLanguageChange("it")}
              className="flex gap-[4px]"
            >
              <Image src="/it.png" alt="it" width="30" height="15" />
              Italiano
            </button>
            <button
              onClick={() => handleLanguageChange("ch")}
              className="flex gap-[4px]"
            >
              <Image src="/ch.png" alt="ch" width="30" height="15" />
              中国人
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

LangMenu.propTypes = {
  /** Sets a custom className */
  className: PropTypes.string,
  /** Sets a custom id */
  id: PropTypes.string,
};

LangMenu.defaultProps = {
  className: "",
  id: "",
};

export default LangMenu;
