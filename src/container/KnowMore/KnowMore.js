import React from "react";
import savebuyImage from "./../../assets/images/save_buy.jpg"
import "./../../stylesheet/main.css";
function KnowMore() {
  return (
    <>
      <div className="knowMore">
        <img className="knowMore__saveBuyImage" src={savebuyImage} alt=""/>
      </div>
    </>
  );
}

export default KnowMore;
