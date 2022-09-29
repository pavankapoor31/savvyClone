import React from "react";
import Logo from "../../assets/images/logo.webp";
function Header() {
  return (
    <div className="header" id="header">

          <img src={Logo} alt="logo" className="header__logo" />

    </div>
  );
}

export default Header;
