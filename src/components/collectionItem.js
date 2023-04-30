import Image from "next/image";

const Item = ({text, img, link, ...otherProps}) => {
  return (<>
    <div className="h-full w-full bg-white opacity-60 z-100">

      <button href={link} {...otherProps} className="group shadow-2xl block text-slate-900 text-center rounded-lg md:max-w-[210px] overflow-hidden cursor-pointer">
        <Image
          src={img}
          className="duration-200 group-hover:scale-110 rounded-t"
          alt={text}
        />
        <div className="flex items-center justify-center p-2 text-white bg-slate-900 rounded-b relative z-10">
          <p className="md:text-base uppercase">{text}</p>
      </div>
  
      </button>
      </div>
    </>
  );
};

export default Item;
