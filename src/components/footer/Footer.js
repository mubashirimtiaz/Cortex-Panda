import React from "react";
import "./Footer.css";
import facebookIcon from "../../assets/icons/facebook.png";
import linkedInIcon from "../../assets/icons/linkedin.png";
import movieIcon from "../../assets/icons/movie.png";
import userOne from "../../assets/icons/userOne.png";
import userTwo from "../../assets/icons/userTwo.png";
import userThree from "../../assets/icons/userThree.png";
import userFour from "../../assets/icons/userFour.png";
import userFive from "../../assets/icons/userFive.png";

const Footer = () => {
  return (
    <footer className="Footer text-light text-center">
      <p className=" lead p-3">
        Based in Sydney, Australia. Available worldwide.
      </p>
      <div className="lead container my-5">
        <img src={userOne} alt="userOne" className="img-fluid" />
        <img src={userTwo} alt="userTwo" className="img-fluid" />
        <img src={userFive} alt="userFive" className="img-fluid" />
        <img src={userThree} alt="userThree" className="img-fluid" />
        <img src={userFour} alt="userFour" className="img-fluid" />
      </div>
      <p>
        <span>
          <img src={movieIcon} alt="movie" />
        </span>
        <span>
          <img src={facebookIcon} alt="facebook" />
        </span>
        <span>
          <img src={linkedInIcon} alt="linkedIn" />
        </span>
      </p>
      <p className="p-1">© Cortex Copywriter 2020 | ABN 341 1599 0520</p>
      <small>
        <u> Interaction Design + Code by Liam Key</u>
      </small>
    </footer>
  );
};

export default Footer;
