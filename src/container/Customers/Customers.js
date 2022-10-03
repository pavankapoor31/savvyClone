import React from "react";
import mint from "./../../assets/images/1.svg";
import theTribune from "./../../assets/images/2.svg";
import businessStandard from "./../../assets/images/3.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Customers() {
  return (
    // linear-gradient(180deg,#000000 50%,#fff 0)

    <div className="customer_container">
      <div className="customers">
        <div className="customer__heading headings">
          Hear from our customers
        </div>
        <div className="customer__reviews">
          {/* <Carousel responsive={responsive}> */}
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1300: {
                slidesPerView: 3,
              },
              855: {
                slidesPerView: 2,
              },
              350: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="carouselBox">
                <div className="customer__review">
                  Savvy is so far the best app of it's kind. User friendly,
                  practical, and truly useful. All your finance planning is
                  catered at one single place and feedbacks provided are worked
                  upon for continued improvement.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselBox">
                <div className="customer__review">
                  Savvy is so far the best app of it's kind. User friendly,
                  practical, and truly useful. All your finance planning is
                  catered at one single place and feedbacks provided are worked
                  upon for continued improvement.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselBox">
                <div className="customer__review">
                  Savvy is so far the best app of it's kind. User friendly,
                  practical, and truly useful. All your finance planning is
                  catered at one single place and feedbacks provided are worked
                  upon for continued improvement.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselBox">
                <div className="customer__review">
                  Savvy is so far the best app of it's kind. User friendly,
                  practical, and truly useful. All your finance planning is
                  catered at one single place and feedbacks provided are worked
                  upon for continued improvement.
                </div>
              </div>
            </SwiperSlide>
            {/* </Carousel> */}
          </Swiper>
        </div>
      </div>
      <div className="press">
        <div className="press_headings customer__heading  headings">
          Savvy in the press
        </div>
        <div className="media__reviews">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1300: {
                slidesPerView: 3,
              },
              855: {
                slidesPerView: 2,
              },
              350: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="carouselBox media_review_Box">
                <div className="media_review">
                  <img src={mint} alt="MINT MEDIA" />
                  <div className="media_description">
                    CEO Rakesh Bhatia vouches for embedded savings via B2B2C
                    firm
                    <br />
                    <div>
                      <a
                        className="font-bold"
                        href="https://www.livemint.com/brand-post/ceo-rakesh-bhatia-vouches-for-embedded-savings-via-b2b2c-firm-savvy-11622718822029.html"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselBox media_review_Box">
                <div className="media_review">
                  <img src={theTribune} alt="" />
                  <div className="media_description">
                    Business-friendly apps to saving apps to immunity boosters..
                    <br />
                    <div>
                      <br />
                      <a
                        className="font-bold"
                        href="https://www.tribuneindia.com/news/lifestyle/challenge-accepted-124600  "
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselBox media_review_Box">
                <div className="media_review">
                  <img src={businessStandard} alt="" />
                  <div className="media_description">
                    Savings and payments startup Savvy raises Rs 14 cr in
                    Pre-Series A rounds
                    <br />
                    <div>
                      <a
                        className="font-bold"
                        href="https://www.business-standard.com/content/specials/savings-and-payments-startup-savvy-raises-rs-14-cr-in-pre-series-a-rounds-121091601324_1.html"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Customers;
