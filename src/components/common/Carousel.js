import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const CarouselSlider = ({ images }) => {
  return (
    <Zoom
      scale={1.4}
      indicators={(index) => (
        <img
          className="thumb-image-carousel"
          style={{ objectFit: "cover", width: "100px" }}
          alt="Slide thumb-image"
          src={images[index]}
        />
      )}
    >
      {images.map((each, index) => {
        return (
          <div key={index} style={{ width: "100%" }}>
            <img
              style={{ objectFit: "cover", width: "100%" }}
              alt="Slide Image"
              src={each}
            />
          </div>
        );
      })}
    </Zoom>
  );
};

export default CarouselSlider;
