import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutTwo = () => {
  return (
    <div className="space-top">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6">
            <div className="about-thumb2 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="/assets/img/normal/about_2-1.png" alt="800speedy" />
              </div>
              <div className="about-img-2">
                <img src="/assets/img/normal/about_2-2.png" alt="800speedy" />
              </div>
              <div className="about-counter-wrap jump-reverse">
                <img src="assets/img/icon/about_icon2-1.svg" alt="800speedy" />
                <h3 className="about-counter">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={5} />
                          k+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <h4 className="about-counter-text">Trusted Customer</h4>
              </div>
              <div className="about-year-wrap2 movingX">
                <div className="about-year-grid-wrap">
                  <div className="icon">
                    <img src="assets/img/icon/about_icon2-2.png" alt="800speedy" />
                  </div>
                  <h3 className="about-counter">
                    <span className="counter-number">10</span>+
                  </h3>
                </div>
                <h4 className="about-year-text">Years Of Experiences</h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area mb-30">
                <span className="sub-title">Know About Us</span>
                <h2 className="sec-title">
                 Your Trusted Mobile Tyre Experts in Dubai
                  {/* <img
                    className="title-bg-shape shape-center"
                    src="assets/img/bg/title-bg-shape.png"
                    alt="800speedy"
                  /> */}
                </h2>
                <p className="sec-text">
                800SPEEDY provides fast, reliable, and professional on-site tyre services anywhere in Dubai. Whether it’s a puncture, tyre replacement, air fill, or spare tyre change, our trained technicians arrive fully equipped to get you back on the road quickly—without towing or delays.
                </p>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="assets/img/icon/about_icon2-3.svg" alt="800speedy"  style={{
    filter: "brightness(0)",
  }} />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">
                 Elite Automotive Service
                  </h5>
                  <p className="about-feature-text">
                   Our certified technicians use professional-grade tools and proven processes to ensure every job meets high safety and quality standards—right at your location.

                  </p>
                </div>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="assets/img/icon/about_icon2-4.svg" alt="800speedy" style={{
    filter: "brightness(0)",
  }} />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">Pro Drive Garage Experience</h5>
                  <p className="about-feature-text">
                 From emergency roadside support to scheduled tyre services, we combine speed, skill, and customer care to deliver a hassle-free experience you can trust every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
