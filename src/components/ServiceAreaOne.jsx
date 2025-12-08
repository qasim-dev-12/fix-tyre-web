import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaOne = () => {
  return (
    <div className="service-area-1 space-top bg-smoke overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Latest service</span>
              <h2 className="sec-title">
                Professional Car Repair The Best Services
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-1.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details">Tyre Repair</Link>
                </h4>
                <p className="service-card_text">
                 We fix punctures, leaks, and tyre damage on the spot using professional tools—fast, safe, and reliable.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/Tyre Repair.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-2.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details">Buy New Tyre</Link>
                </h4>
                <p className="service-card_text">
                 Choose from premium tyres for all car models with expert installation at your home or roadside.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/Buy New Tyre.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details">Tyre Replacement</Link>
                </h4>
                <p className="service-card_text">
                 Complete tyre change service with balancing and safety checks—done quickly at your location.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/Tyre Replacement.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details">Air Fill (Nitrogen / Regular)
</Link>
                </h4>
                <p className="service-card_text">
                 We check and fill your tyre pressure (air or nitrogen) to ensure smooth driving and fuel efficiency.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/Air Fill.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details">Spare Tyre Change</Link>
                </h4>
                <p className="service-card_text">
                 Stranded with a flat tyre? Our team will replace it with your spare tyre in minutes.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/Spare Tyre Change.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details">Fix Puncture Tyre</Link>
                </h4>
                <p className="service-card_text">
                Quick puncture repair using premium plugs and sealing techniques to get you back on the road safely.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/Fix Puncture Tyre.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOne;
