import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiMapPin } from "react-icons/hi2";
import logo from "/public/logo.png";

const Footer = () => {
  return (
    <section id="footer" className="bg-black">
      <div className="container max-w-6xl py-4 md:py-6 mx-auto">
        <div className="flex flex-col items-center space-y-6 md:space-y-4 md:justify-around md:align-middle ">
          <div className="flex flex-wrap justify-center md:gap-12 gap-8 text-4xl txt-white px-[8px]">
            <a href="tel:+39024817176">
              <AiFillPhone />
            </a>
            <a href="mailto:igregori.customer@gmail.com">
              <MdMail />
            </a>

            <a href="https://www.facebook.com/IGregoriMilano" target="_blank">
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/igregorimilano/?hl=it"
              target="_blank"
            >
              <RiInstagramFill />
            </a>
          </div>

          <div className="text-center flex flex-col md:flex-row roboto-font">
            <div className="text-white mb-0 md:mb-[8px] text-sm md:text-base ">
              ©2023 All right reserved{" "}
              <span className="text-yellow-500">I GREGORI </span>Milano
            </div>
            <div className="text-white mb-0 md:mb-[12px] md:ml-[8px] text-sm md:text-base ">
              P. IVA 09970530151
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
