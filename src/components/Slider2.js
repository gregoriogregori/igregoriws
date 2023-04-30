import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
    const images = [
      "/carosello-storia/Storia-3.jpg",
      "/carosello-storia/Storia-1.jpg",
       "/carosello-storia/Storia-2.jpg",  
        "/carosello-storia/Storia-4.jpg",
      ];
  return (
    <Zoom arrows={false} scale={1.4}>
      {images.map((each, index) => (
        <div key={index} style={{ width: "100%" }}>
          <img
            style={{ objectFit: "cover", width: "100%" }}
            alt="Slide Image"
            src={each}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default Slider;