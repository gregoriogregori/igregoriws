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
          className="text-5xl text-slate-950 md:hidden text-center  title-font "
        >
          {content.storia.title}
        </Text>
        <div className="md:w-[370px]">
          <Slider images={sliderImages} />
          <div className="hidden md:flex mt-8">
            <Text className="title-font text-center text-slate-900   text-4xl">
              {content.storia.subtitle}
            </Text>
          </div>
        </div>
        <div className="flex flex-col bg-white w-full md:w-[60%]">
          <div className="hidden md:block">
            <Text tag="h2" className="text-6xl title-font pb-4 text-slate-950 ">
              {content.storia.title}
            </Text>
            <div id="spacer" className="py-4 border-t-2 border-slate-950"></div>
          </div>
          <Text className="md:hidden mb-6 title-font text-center text-slate-900   text-4xl">
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
