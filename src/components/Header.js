import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import LangMenu from "../components/common/LangMenu";
import { setOpenMenu } from "../redux/layout";

const Header = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsOpen(!isOpen);
    dispatch(setOpenMenu(!isOpen));
  };
  return (
    <header
      id="navbar"
      className="bg-gray-900 max-h-85px] text-white fixed w-full z-[100]"
    >
      <div className="bg-black flex p-3 justify-between">
        <div id="left" className="flex items-center justify-center md:min-w-[365px]" >
          <LangMenu />
        </div>
        <div id="logo"
          className="flex items-center justify-center w-[200px]"
        >
          <Link href="/">
            <img className="w-[200px]" src="/Logo_new.png" alt="logo" />
          </Link>
        </div>

        <div className="md:hidden flex items-center justify-center pt-1">
          <button
            onClick={handleClick}
            id="burger"
            type="button"
            className={
              isOpen
                ? "open z-40 block hamburger md:hidden focus:outline-none"
                : "z-40 block hamburger md:hidden focus:outline-none"
            }
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-mid"></span>
            <span className="hamburger-bot"></span>
          </button>
        </div>
        <div
          id="right"
          className="hidden md:flex md:min-w-[365px]  items-center justify-center"
        >
          <div
            id="links"
            className="hidden h-10 md:flex md:items-center md:space-x-4"
          >
            <div className="group">
              <Link href="#storia">{content.who}</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-yellow-600"></div>
            </div>
            <div className="group">
              <Link href="#collezioni">{content.collection}</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-yellow-600"></div>
            </div>
            <div className="group">
              <Link href="#sedi">{content.contact}</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-yellow-600"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="menu"
        className={isOpen ? "responsive bg-slate-200 pt-0" : "hidden"}
      >
        <div className="right-0 top-0 w-[100%] bg-black p-6 ease-in-out duration-500 rounded">
          <div className="flex flex-col text-yellow-500 text-xl gap-4">
            <Link href="#storia" onClick={handleClick}>
              {content.who}
            </Link>
            <Link href="#collezioni" onClick={handleClick}>
              {content.collection}
            </Link>
            <Link href="#sedi" onClick={handleClick}>
              {content.contact}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
