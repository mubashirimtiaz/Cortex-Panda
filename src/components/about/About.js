import React from "react";
import "./About.css";
import ceo from "../../assets/icons/ceo.svg";
const About = () => {
  return (
    <div className="About container-fluid py-5 text-light">
      <div className="container ">
        <div className="row my-2">
          <div className="col-md-6 m-auto text-center">
            <img src={ceo} alt="ux-writing" height="300px" />

            <p className="mt-2">
              <span className="lead">Nathan Mudaliar</span>, the Cortex
              Copywriter
            </p>
          </div>
          <div className="col-md-6 mt-md-4">
            <p className="display-5 mt-3 mt-md-0">
              <span className="bg-info px-4 shadow-lg">About</span>
            </p>
            <p className="lead">
              My copywriting and UX writing draws on abilities developed in the
              psychological sciences.
            </p>
            <p className="lead">
              Expertise in visual perception, behavioral motivation, and
              decision-making allows me to engineer words that convert customers
              and guide users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
