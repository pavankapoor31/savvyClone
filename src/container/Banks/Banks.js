import React from "react";

import hdfcLogo from "./../../assets/images/hdfc-logo.svg";
import iciciLogo from "./../../assets/images/icici-logo.svg";
import axisLogo from "./../../assets/images/axis-logo.svg";
import sbiLogo from "./../../assets/images/sbi-logo.svg";
function Banks() {
  return (
    <div className="banks">
      <div className="banks__para">
        <span className="font-bold">Shop securely,</span> setup payments with
        topnotch banks
      </div>
      <div className="banks__logos">
        <img
          src={hdfcLogo}
          alt="hdfc"
          className="bank__logo logo-hdfc"
          width="130"
          height="74"
        />
        <img src={iciciLogo} alt="icici" className="bank__logo logo-icici" />
        <img
          src={axisLogo}
          alt="axis"
          className="bank__logo logo-axis"
          width="130"
          height="74"
        />
        <img src={sbiLogo} alt="sbi" className="bank__logo logo-sbi" />
      </div>
    </div>
  );
}

export default Banks;
