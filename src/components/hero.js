import Text from "./common/Text";

const Hero = ({ content }) => {
  return (
    <section id="hero">
      <div className="min-h-[600px] md:min-h-[800px] reltive p-[12px] pt-[90px] sm:pt-[250px] lg:pl-[150px] animation-opacitiy">
        <div className="p-[24px] md:p-[60px] bg-black bg-opacity-40 w-full max-w-[750px]">
          <Text
            className="text-white text-center md:text-left text-5xl md:text-7xl uppercase font-medium"
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
