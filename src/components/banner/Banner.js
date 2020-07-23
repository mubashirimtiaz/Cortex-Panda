import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import introFrontLayer from "../../assets/icons/Intro_Front_Layer.svg";
import introBrain from "../../assets/icons/Intro_Brain.svg";
import introFeaturedImageEmpty from "../../assets/icons/Intro_Featured_Image_Empty.svg";
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
    keyframes: [{ transform: "translateY(30px) scale(1.2)" }],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  return (
    <div className="Banner py-md-5 py-2 container-fluid d-flex justify-content-center align-items-center">
      <div className="container m-auto pl-md-4 pl-2 py-md-5">
        <div className="row mt-5">
          <div className="col-md-6 mt-2   px-1 px-md-5 order-2 order-md-1 text-light">
            <p className="display-3 font-weight-bold">CORTEX</p>
            <p className="display-4">COPYWRITE</p>
            <p className="lead">
              Enhance your communications with your psychology-based copywriting
              and UX writing
            </p>
            <button className="btn rounded-pill btn-lg my-md-5 my-3 px-4 py-2 text-light msg-btn">
              <small>Send a message</small>
            </button>
          </div>
          <div className="col-md-6  m-auto order-1 order-md-2">
            <div className="main-svg my-5 my-md-2">
              <img
                src={introFeaturedImageEmpty}
                alt="banner-main-img"
                className="main-img  img-fluid"
              />
              <img
                src={introFrontLayer}
                alt="banner-support-img"
                className="support-img-one img-fluid"
                ref={supportImgOne}
              />
              <img
                src={introBrain}
                alt="banner-support-img"
                className="support-img-two img-fluid"
                ref={supportImgTwo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
