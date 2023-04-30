import Slider from "../components/common/Slider";
import Text from "../components/common/Text";

const sliderImages = [
  "/carosello-storia/Storia-3.jpg",
  "/carosello-storia/Storia-1.jpg",
  "/carosello-storia/Storia-2.jpg",
  "/carosello-storia/Storia-4.jpg",
];
const Storia = ({ content }) => {
  return (
    <section id="storia">
      <div className="container flex flex-col gap-8 max-w-6xl mx-auto mb-12 py-6 md:py-24 px-6 text-slate-800 md:flex-row bg-white">
        <Text
          tag="h2"
          className="uppercase text-3xl text-slate-950 md:hidden text-center font-normal"
        >
          {content.storia.title}
        </Text>
        <div className="md:w-[370px]">
          <Slider images={sliderImages} />
          <div className="hidden md:flex mt-8">
            <Text className="font-sans text-center text-slate-900 font-bold italic text-2xl">
              {content.storia.subtitle}
            </Text>
          </div>
        </div>
        <div className="flex flex-col bg-white w-full md:w-[60%]">
          <div className="hidden md:block">
            <Text
              tag="h2"
              className="text-3xl uppercase pb-4 text-slate-950 font-normal"
            >
              {content.storia.title}
            </Text>
            <div id="spacer" className="py-4 border-t-2 border-slate-950"></div>
          </div>
          <Text className="md:hidden mb-6 font-sans text-center text-slate-900 font-bold italic text-xl md:text-2xl md:mt-0 md:text-left">
            {content.storia.subtitle}
          </Text>
          <Text className="text-center md:text-left">
            {content.storia.body}
          </Text>
        </div>
      </div>
      <div className="py-4 border-t-[3px] border-slate-950 mx-auto"></div>
    </section>
  );
};

export default Storia;
