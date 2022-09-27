import React from "react";
import bannerImage from "/home/dell/work/reactAssignment/savvypay/src/assets/images/banner.jpg";
function Banner() {
  return (
    <div className="banner wrap">
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
        <button className="banner_btn btn">KNOW MORE</button>
      </div>
    </div>
  );
}

export default Banner;
