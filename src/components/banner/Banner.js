import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./banner.css";

const Banner = () => {
  const { ref: supportImgOne } = useWebAnimations({
    keyframes: [
      { opacity: 0.1 },
      { opacity: 0 },
      { opacity: 0.1 },
      { opacity: 0 },
      { opacity: 0 },
      { opacity: 0.3 },
      { opacity: 0.2 },
      { opacity: 0 },
      { opacity: 0.3 },
      { opacity: 0 },
    ],
    timing: {
      duration: 800, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate-reverse", // Run the animation forwards and then backwards
      easing: "ease", // Use a fancy timing function
    },
  });
  const { ref: supportImgTwo } = useWebAnimations({
    keyframes: {
      transform: ["translateY(30px)"],
    },
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  return (
    <div className="Banner">
      <div className="Banner-container">
        <div className="banner-text">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            pariatur ut nisi amet esse maiores reiciendis sed. Architecto, velit
            eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio pariatur ut nisi amet esse maiores reiciendis sed.
            Architecto, velit eveniet?
          </p>
        </div>
        <div className="banner-image">
          <div className="main-svg">
            <img
              src="https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg"
              alt="banner-img"
              className="main-img"
            />
            <img
              src="https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg"
              alt=""
              className="support-img-one"
              ref={supportImgOne}
            />
            <img
              src="https://www.cortexcopywriter.com/img/intro/Intro_Brain.svg"
              alt=""
              className="support-img-two"
              ref={supportImgTwo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
