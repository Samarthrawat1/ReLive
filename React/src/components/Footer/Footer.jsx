import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <div className="Footer-Container">
      <div className="blur footer-blur"></div>
      <hr />
      <div className="Logo">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
