import React from "react";
import bannerImage from "/home/dell/work/reactAssignment/savvypay/src/assets/images/banner.jpg";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="banner">
      {/* Background is given using css */}
      <img className="banner__background" src={bannerImage} alt=" banner " />
      <div className="banner_right ">
        <div className="banner__headings bold headings">
          <span>Get rewarded with</span>{" "}
          <div className="text-center">SavvyPay</div>
        </div>
        <div className="banner_under">
          <span className="font-light">
            Wish, Save and Buy for the products you love, guilt-free
          </span>
        </div>
          <Link to={"KnowMore"}>
            <button className="banner_btn btn">KNOW MORE</button>
          </Link>
        
      </div>
    </div>
  );
}

export default Banner;
