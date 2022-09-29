import React from "react";
import logo from "/home/dell/work/reactAssignment/savvypay/src/assets/images/slogo2.svg";
import mailIcon from "./../../assets/images/mail_icon.svg";
import fbIcon from "./../../assets/images/fb_icon.svg";
import callIcon from "./../../assets/images/call_icon.svg";
import linkedInIcon from "./../../assets/images/linkedin_icon.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="logo">
          {" "}
          <img src={logo} alt="" />
        </div>
        <div className="footer__description">
          SavvyPay is a technology services provider and is not a financial
          institution. The savings product and banking services provided by Yes
          Bank Limited (an associate of State Bank of India) in association with
          a technology service provider; all offers and discounts are subject to
          terms and conditions of the product manufacturers. Copyright ©️ Yellow
          Sky Technologies Private Limited.
          <div className="row footer__getInTouch">
        <div className="getInTouch">
          Get in touch:
          <img className="footer__contactIcons" src={mailIcon} alt="" />
          <img className="footer__contactIcons" src={fbIcon} alt="" />
          <img className="footer__contactIcons" src={callIcon} alt="" />
          <img className="footer__contactIcons" src={linkedInIcon} alt="" />
        </div>
        <div className="footer_terms  b-left"> T&C's</div>
        <div className="footer__faq b-left">FAQs</div>
        <div className="footer__privacyPolicy b-left">Privacy Policy</div>
      </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
