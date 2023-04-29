import Image from "next/image";

const Item = (props) => {
  return (
    <>
      <div className="group item shadow-2xl  text-slate-900 text-center rounded-lg">
        <Image
          src={props.img}
          className="hidden w-full duration-200 md:block group-hover:scale-110 rounded-t"
        />
        <Image src={props.img_mob} className="w-full md:hidden" />
        <div className="flex items-center justify-center p-2 text-white bg-slate-900">
          <p className="md:text-base">{props.text}</p>
      </div>
      </div>
    </>
  );
};

export default Item;
