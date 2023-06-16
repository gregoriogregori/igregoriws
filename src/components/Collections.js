import Text from "../components/common/Text";
import ItemCollection from "../components/common/itemCollection";
import { COLLECTIONS } from "../constants/Content";

const Collezioni = ({ content }) => {
  return (
    <div
      id="collezioni"
      className="container max-w-6xl mx-auto px-6 text-slate-900 md:px-8 bg-white md:py-[70px] py-[32px]"
    >
      <Text
        tag="h1"
        className="title-font text-6xl text-slate-950 text-center font-normal mb-[8px]"
      >
        {content.title}
      </Text>
      <Text className="title-font text-center text-slate-900  text-4xl mb-[24px]">
        {content.subtitle}
      </Text>
      <Text className="text-center mb-[50px] text-base">{content.body}</Text>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 flex-wrap mt-8">
        {COLLECTIONS.map((el) => (
          <ItemCollection
            key={el.text}
            img={el.img}
            text={el.text}
            images={el.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Collezioni;
