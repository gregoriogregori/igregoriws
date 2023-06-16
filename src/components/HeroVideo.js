import Image from "next/image";
import Text from "./common/Text";

const HeroVideo = ({ content }) => {
  return (
    <section id="hero">
      <div className="video-bg">
        <div className="max-w-6xl mx-auto pt-[120px] ">
          <video width="100%" loop autoPlay muted>
            <source src="/videoHome.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>

      <div className="max-w-6xl mx-auto  py-[24px] md:py-[120px] px-[16px] animation-opacitiy">
        <img alt="slogan" src={content.img} />
      </div>

      <div id="spacer" className="border-t-[3px] border-slate-950"></div>
    </section>
  );
};

export default HeroVideo;
