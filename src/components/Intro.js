import Image from "next/image";
import logo from "/public/Logo_new.png";
import { useEffect, useState } from "react";

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};
export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const body = document.querySelector("body");
    const intro = document.querySelector("#intro");
    body.classList.add("no-scroll");
    intro.classList.add("visible");
    setTimeout(() => body.classList.remove("no-scroll"), 2500);
    setTimeout(() => intro.classList.remove("visible"), 2500);
    setTimeout(() => intro.classList.add("not-visible"), 2500);
  }, []);
  const [stars, setStars] = useState([]);
  const createStarsPositions = (size, quantity) => {
    const array = [];
    for (let i = 0; i < quantity; i++) {
      const star = {
        left: randomNumber(1, 99),
        bottom: randomNumber(1, 99),
        animationDuration: randomNumber(50, 200),
        size,
      };
      array.push(star);
    }
    return array;
  };
  useEffect(() => {
    const array1 = createStarsPositions(4, 100);
    const array2 = createStarsPositions(1, 100);
    const array3 = createStarsPositions(2, 100);
    const array4 = createStarsPositions(3, 100);
    const variousStars = array1.concat(array2, array3, array4);
    setStars(variousStars);
  }, []);
  return (
    <div id="intro">
      <div className="flex items-center justify-center h-[100%]">
        {stars.length > 0 &&
          stars.map((star) => (
            <div
              className={`star`}
              key={`star-${star.left}${star.bottom}${star.animationDuration}`}
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.left}%`,
                bottom: `${star.bottom}%`,
                animationDuration: `${star.animationDuration}s`,
              }}
            />
          ))}

        <img src="/Logo_new.png" alt="logo" className="logo-animated" />
      </div>
    </div>
  );
}
