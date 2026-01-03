import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import bg from  "../assets/img/bg/counter-checklist-bg.png";
import '../css/header.css';
// import icon1 from '../../public/assets/img/icon/counter-icon_1-1.svg';
import icon1 from '../assets/img/icon/counter-icon_1-1 (2).svg';
import icon2 from '../assets/img/icon/counter-icon_1-2 (2).svg';
import icon3 from '../assets/img/icon/counter-icon_1-3 (2).svg';
import icon4 from '../assets/img/icon/counter-icon_1-4 (2).svg';
import { ReactComponent as Logo } from '../assets/img/icon/counter-icon_1-1 (2).svg';
import { ReactComponent as Logo1 } from '../assets/img/icon/counter-icon_1-2 (2).svg';
import { ReactComponent as Logo2 } from '../assets/img/icon/counter-icon_1-3 (2).svg';
import { ReactComponent as Logo3 } from '../assets/img/icon/counter-icon_1-4 (2).svg';

// import icon3 from '../assets/img/icon/counter-icon_1-3 (1).svg';
 



const CounterOne = () => {
   function SvgIcon({ src, style }) {
    const [svg, setSvg] = React.useState("");
  
    React.useEffect(() => {
      fetch(src)
        .then(res => res.text())
        .then(data => {
          // 🔥 Remove hardcoded fills & strokes
          const cleaned = data
            .replace(/fill="[^"]*"/g, 'fill="currentColor"')
            .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')
            .replace(/style="[^"]*"/g, "");
  
          setSvg(cleaned);
        });
    }, [src]);
  
    return (
      <span
        
        style={style}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  }
  return (
    <div className="counter-area-1 space-bottom">
      <div className="container">
        <div className="counter-wrap1">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-6">
              <div className="counter-card-wrap">
                <div className="row gy-100 justify-content-between">
                  <div className="col-sm-6 col-lg-6 col-12 mb-4" style={{marginBottom:"4rem"}}>
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp  start={1} end={12} />
                                  k+
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">Happy Customers</p>
                      </div>
                      <div className="counter-card_icon text-white">
                        {/* <img
                          src="assets/img/icon/counter-icon_1-1.svg"
                          alt="800speedy"
                        /> */}
                       <Logo style={{ color: "#e10600" }}   className="icon svg-icon" width={50} height={80}   />


                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6 col-12 mb-4">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
  {({ isVisible }) =>
    isVisible && (
      <span className="counter-number">
        <CountUp delay={0} start={0} end={4.9} decimals={1} />
        ★
      </span>
    )
  }
</TrackVisibility>
                        </h2>
                        <p className="counter-card_text">Rated Tyre Services</p>
                      </div>
                      <div className="counter-card_icon" >
                        {/* <img
                          src="assets/img/icon/counter-icon_1-2.svg"
                          alt="800speedy"
                        /> */}
                      <Logo1 fill="red"  className="icon svg-icon" width={50} height={80}   />

                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6 col-12 mb-4">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp delay={0} start={0} end={40} />
                                  +
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">Daily Tyre Fixes
</p>
                      </div>
                      <div className="counter-card_icon">
                  <Logo2 fill="red"  className="icon svg-icon" width={50} height={80}   />

                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6 col-12 mb-4">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                         <TrackVisibility once>
  {({ isVisible }) =>
    isVisible && (
      <span className="counter-number">
        <CountUp delay={0} start={0} end={20} />
        Min
      </span>
    )
  }
</TrackVisibility>
                        </h2>
                        <p className="counter-card_text">Arrival Time</p>
                      </div>
                      <div className="counter-card_icon">
                        <div >
                             <Logo3 fill="red"  className="icon svg-icon"  width={50} height={80}   />
                        </div>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="counter-checklist-wrap"
                style={{ backgroundImage: `url(${bg})` }}

              >
                <div className="checklist style-white mb-50">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                     24/7 Mobile Tyre Repair Anywhere in Dubai
                    </li>
                    <li>
                      <i className="fas fa-check" />
                     20–30 Minutes Fast Arrival Guarantee
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Expert Technicians with Years of Experience
                    </li>
                      <li>
                      <i className="fas fa-check" />
                     Affordable Rates with No Hidden Charges
                    </li>
                    <li>
                      <i className="fas fa-check" />
                    New Tyres, Puncture Fix, Battery Boost & More
                    </li>
                      <li>
                      <i className="fas fa-check" />
                   Pay by card or pay by link
                    </li>
                    
                  </ul>
                </div>
                <div className="call-media-wrap">
                  <div className="icon">
                    <img className="text-black" src="assets/img/icon/phone-1.svg" alt="800speedy" />
                  </div>
                  <div className="media-body">
                    <h6 className="title text-white">Requesting A Call:</h6>
                    <h4 className="link-2">
                      <a href="tel:6295550129" style={{color:"#fff"}}>
                        0521419334
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;
