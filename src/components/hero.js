import Text from "./common/Text";

const Hero = ({ content }) => {
  return (
    <section id="hero">
      <div className="min-h-[600px] md:min-h-[700px] reltive p-[18px] pt-[50px] sm:pt-[120px] lg:pl-[60px] animation-opacitiy">
        <div className="p-[24px] md:p-[60px] bg-black bg-opacity-40 w-full max-w-[650px]">
          <Text
            className="text-white text-center text-5xl md:text-6xl uppercase font-medium"
            tag="h1"
          >
            {content.title}
          </Text>
        </div>
      </div>
      <div id="spacer" className="border-t-[3px] border-slate-950"></div>
    </section>
  );
};

export default Hero;
