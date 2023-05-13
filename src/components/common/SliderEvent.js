import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SliderEvent = ({ images, desktop }) => {
  return desktop ? (
    <div>
      <Slide slidesToScroll={3} slidesToShow={3} indicators={true}>
        {images.map((each, index) => {
          console.log(each);
          return (
            <div key={index} className="p-[8px]">
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  maxHeight: "550px",
                }}
                alt="Slide Image"
                src={each.img}
              />
              <div className="flex flex-col items-center justify-center py-4 px-[8px] text-white bg-slate-900  rounded-b relative w-full">
                <p className="text-xl uppercase">{each.title}</p>
                <p className="text-sm">{each.text}</p>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  ) : (
    <div>
      <Slide slidesToScroll={1} slidesToShow={1} indicators={true}>
        {images.map((each, index) => {
          console.log(each);
          return (
            <div key={index} className="p-[8px]">
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  maxHeight: "550px",
                }}
                alt="Slide Image"
                src={each.img}
              />
              <div className="flex flex-col items-center justify-center py-4 px-[8px] text-white bg-slate-900  rounded-b relative w-full">
                <p className="text-xl uppercase">{each.title}</p>
                <p className="text-sm">{each.text}</p>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default SliderEvent;
