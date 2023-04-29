import facebook from "../../public/icons/icon-facebook.svg";
import twitter from "../../public/icons/icon-twitter.svg";
import instagram from "../../public/icons/icon-instagram.svg";
import Image from "next/image";
import email from "../../public/icons/email.svg";
import logo from "/public/logo.png"

const Footer = () => {
    return ( 
    
        <section id="footer" className="bg-black">
        <div className="container max-w-6xl py-4 md:py-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 md:space-y-4 md:justify-around md:align-middle ">
            <div className="flex items-center justify-evenly space-x-12 md:space-x-24 pt-4">
              <div className="h-8 group">
                <a href="#">
                  <Image src={email} className="h-6 bg-white" />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  <Image src={facebook} className="h-6" />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  <Image src={facebook} className="h-6" />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  <Image src={twitter} className="h-6" />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  <Image src={instagram} className="h-6" />
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