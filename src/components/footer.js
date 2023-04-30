import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiMapPin } from "react-icons/hi2";
import logo from "/public/logo.png"

const Footer = () => {
    return ( 
    
        <section id="footer" className="bg-black">
        <div className="container max-w-6xl py-4 md:py-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 md:space-y-4 md:justify-around md:align-middle ">
            <div className="flex items-center justify-evenly">
              <div className="w-full flex md:gap-24 gap-12 text-4xl txt-white bg-black">
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
            </div>
            <div className="text-center flex flex-col md:flex-row">
              <div className="font-bold text-white m-0 p-0 text-sm md:text-base ">©2023 All right reserved <span className="text-yellow-500">I GREGORI </span>Milano</div>
              <div className="font-bold text-white m-0 p-0">P. IVA 09970530151</div>
            </div> 
          </div>
          </div>
      </section>    );
}
 
export default Footer;