import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/m6.png";
import HeaderSocials from "./HeaderSocials";
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Pravin</h1>
        <h4 className="text-light">Python Developer (Intern)</h4>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="ME" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
export default HeaderSocials;
