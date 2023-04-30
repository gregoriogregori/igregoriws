import ItemCollection from "../components/common/itemCollection";
import Text from "../components/common/Text";
import { COLLECTIONS_HOME } from "../constants/Content";
import Link from "next/link";

const Creations = ({ content }) => {
  return (
    <section id="creations" className="relative">
      <div className="container max-w-6xl mx-auto px-6 text-slate-900 md:px-8 bg-white md:my-[70px]">
        <div className="flex justify-center md:justify-between mb-[24px] md:mb-[40px] md:relative">
          <Text
            tag="h2"
            className="text-4xl text-center uppercase md:text-left font-bold pb-4 md:border-b-2 border-slate-950"
          >
            {content.title}
          </Text>
          <Link className="btn hidden md:flex items-center" href="/collezioni">
            {content.callDesktop}
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 flex-wrap mt-8">
          {COLLECTIONS_HOME.map((el) => (
            <ItemCollection
              key={el.text}
              img={el.img}
              text={el.text}
              images={el.images}
            />
          ))}
        </div>
        <div className="flex justify-center my-[24px] md:hidden">
          <Link className="btn w-full p-[12px] text-center" href="/collezioni">
            {content.callMobile}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Creations;
